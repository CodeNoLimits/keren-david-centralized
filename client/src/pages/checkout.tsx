import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useStripe, useElements, Elements, PaymentElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, CreditCard, Truck, Shield, Heart, CheckCircle } from 'lucide-react';

// Load Stripe
const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = stripePublicKey ? loadStripe(stripePublicKey) : null;

interface ShippingAddress {
  fullName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface OrderSummary {
  subtotal: number;
  discount: number;
  vatAmount: number;
  shippingAmount: number;
  totalAmount: number;
}

const CheckoutForm = ({ clientSecret, orderSummary }: {
  clientSecret: string;
  orderSummary: OrderSummary;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const { clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements) {
      toast({
        title: "שגיאה",
        description: "מערכת התשלום אינה זמינה כרגע",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
        },
      });

      if (error) {
        toast({
          title: "שגיאה בתשלום",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "תשלום בוצע בהצלחה!",
          description: "ההזמנה שלך אושרה וקבלת מייל אישור",
        });
        clearCart();
        queryClient.invalidateQueries({ queryKey: ['/api/user/subscription'] });
      }
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast({
        title: "שגיאה",
        description: "אירעה שגיאה בעיבוד התשלום",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (amount: number) => `₪${(amount / 100).toFixed(2)}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
        <PaymentElement />
      </div>
      
      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            סיכום ההזמנה
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>סכום ביניים:</span>
              <span>{formatPrice(orderSummary.subtotal)}</span>
            </div>
            {orderSummary.discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>הנחת מנוי (5%):</span>
                <span>-{formatPrice(orderSummary.discount)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>מע"מ (17%):</span>
              <span>{formatPrice(orderSummary.vatAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>משלוח:</span>
              <span>{orderSummary.shippingAmount > 0 ? formatPrice(orderSummary.shippingAmount) : 'חינם! 🎉'}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>סה"כ לתשלום:</span>
              <span className="text-blue-600">{formatPrice(orderSummary.totalAmount)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        type="submit" 
        className="w-full btn-breslov-primary text-white py-3 text-lg font-bold shadow-lg" 
        disabled={!stripe || !elements || isLoading}
        data-testid="button-complete-payment"
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            מעבד תשלום...
          </div>
        ) : (
          <>
            <CreditCard className="mr-2 h-5 w-5" />
            השלם תשלום - {formatPrice(orderSummary.totalAmount)}
          </>
        )}
      </Button>
    </form>
  );
};

export default function Checkout() {
  const { items, totalPrice, subtotalPrice, discount, isSubscriber, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    fullName: '',
    addressLine1: '',
    city: '',
    region: '',
    postalCode: '',
    country: 'IL',
    phone: ''
  });
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null);
  const { toast } = useToast();
  
  // Redirect if cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">העגלה שלך ריקה</h2>
            <p className="text-gray-600 mb-4">הוסף מוצרים לעגלה כדי להמשיך לקופה</p>
            <Button asChild>
              <a href="/store">המשך קניות</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const createPaymentIntent = useMutation({
    mutationFn: async () => {
      if (!shippingAddress.fullName || !email || !shippingAddress.addressLine1 || !shippingAddress.city) {
        throw new Error('יש למלא את כל השדות הנדרשים');
      }

      const cartData = items.map(item => ({
        productId: item.productId,
        variantId: item.variantId,
        name: item.name,
        nameEnglish: item.nameEnglish,
        price: item.price,
        quantity: item.quantity,
        variant: item.variant
      }));

      const res = await apiRequest('POST', '/api/create-payment-intent', {
        cart: cartData,
        shippingAddress,
        billingAddress: shippingAddress,
        email,
        shippingMethod: 'standard'
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'שגיאה ביצירת התשלום');
      }
      
      return await res.json();
    },
    onSuccess: (data) => {
      setClientSecret(data.clientSecret);
      setOrderSummary(data.orderSummary);
      toast({
        title: "מוכן לתשלום",
        description: "ניתן להמשיך לתשלום באמצעות כרטיס אשראי",
      });
    },
    onError: (error: any) => {
      toast({
        title: "שגיאה",
        description: error.message || "שגיאה ביצירת התשלום",
        variant: "destructive",
      });
    }
  });

  const handleCreatePayment = () => {
    createPaymentIntent.mutate();
  };

  if (!stripePromise) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="text-center py-8">
            <CreditCard className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-bold mb-2">מערכת תשלומים אינה זמינה</h2>
            <p className="text-gray-600 mb-4">אנא צרו קשר עם שירות הלקוחות</p>
            <Button asChild variant="outline">
              <a href="/contact">צור קשר</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {!clientSecret ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    פרטי משלוח
                  </CardTitle>
                  <CardDescription>
                    אנא מלא את פרטי המשלוח שלך
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">אימייל *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fullName">שם מלא *</Label>
                    <Input 
                      id="fullName"
                      value={shippingAddress.fullName}
                      onChange={(e) => setShippingAddress(prev => ({...prev, fullName: e.target.value}))}
                      required 
                      data-testid="input-full-name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address1">כתובת *</Label>
                    <Input 
                      id="address1"
                      value={shippingAddress.addressLine1}
                      onChange={(e) => setShippingAddress(prev => ({...prev, addressLine1: e.target.value}))}
                      required 
                      data-testid="input-address"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">עיר *</Label>
                      <Input
                        id="city"
                        value={shippingAddress.city}
                        onChange={(e) => setShippingAddress(prev => ({...prev, city: e.target.value}))}
                        required
                        data-testid="input-city"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="region">אזור</Label>
                      <Input
                        id="region"
                        value={shippingAddress.region}
                        onChange={(e) => setShippingAddress(prev => ({...prev, region: e.target.value}))}
                        data-testid="input-region"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">מיקוד</Label>
                    <Input
                      id="postalCode"
                      value={shippingAddress.postalCode}
                      onChange={(e) => setShippingAddress(prev => ({...prev, postalCode: e.target.value}))}
                      data-testid="input-postal-code"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">טלפון *</Label>
                    <Input 
                      id="phone"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress(prev => ({...prev, phone: e.target.value}))}
                      required 
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleCreatePayment}
                    className="w-full"
                    disabled={createPaymentIntent.isPending}
                    data-testid="button-proceed-to-payment"
                  >
                    {createPaymentIntent.isPending ? 'מכין תשלום...' : 'המשך לתשלום'}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Order Summary */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      עגלת קניות ({items.length} פריטים)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {items.map(item => (
                        <div key={item.id} className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">
                              כמות: {item.quantity} × ₪{item.price}
                            </p>
                            {item.variant && (
                              <p className="text-xs text-gray-500">
                                {item.variant.format} - {item.variant.size}
                              </p>
                            )}
                          </div>
                          <span className="font-medium">₪{item.price * item.quantity}</span>
                        </div>
                      ))}
                      
                      <Separator />
                      
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>סכום ביניים:</span>
                          <span>₪{subtotalPrice}</span>
                        </div>
                        {isSubscriber && discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>הנחת מנוי (5%):</span>
                            <span>-₪{discount}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-lg font-bold">
                          <span>סה"כ:</span>
                          <span>₪{totalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Spiritual Mission */}
                <Card className="border-amber-200 bg-amber-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-amber-800 mb-2">💎 מחיר הקרן - תמיכה רוחנית</h3>
                        <p className="text-sm text-amber-700">
                          כל רכישה תומכת במשימה הרוחנית של הפצת תורת רבי נחמן מברסלב בכל העולם. 
                          הכסף שלך הולך ישירות לפעילות הרוחנית של קרן רבי ישראל.
                        </p>
                        <p className="text-sm text-amber-700 mt-2 font-medium">
                          נ נח נחמ נחמן מאומן! 🔥
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Policies */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-green-800 mb-2">🛡️ מדיניות משלוח והחזרות</h3>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• משלוח חינם על הזמנות מעל ₪399</li>
                          <li>• זמן משלוח: 3-7 ימי עסקים</li>
                          <li>• החזרה תוך 14 יום מקבלת המוצר</li>
                          <li>• מוצר פגום - החלפה מיידית ללא עלות</li>
                          <li>• שירות לקוחות: support@haesh-sheli.co.il</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">
                    <CreditCard className="h-8 w-8 mx-auto mb-2" />
                    תשלום מאובטח
                  </CardTitle>
                  <CardDescription className="text-center">
                    אנא השלם את פרטי כרטיס האשראי כדי להשלים את ההזמנה
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm clientSecret={clientSecret} orderSummary={orderSummary} />
                  </Elements>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}