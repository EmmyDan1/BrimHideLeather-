import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useUIStore } from "../store/useUIStore";
import { generateOrderId, saveOrder, clearCart } from "../lib/storage";
import CartSummary from "../components/CartSummary";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, subtotal, clearCart } = useCartStore();
  const { showToast } = useUIStore();

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Customer Information
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Shipping Information
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  });
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    accountName: "",
    accountNumber: "",
    routingNumber: "",
  });

  const handleBankInfoChange = (e) => {
    const { name, value } = e.target;
    setBankInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Payment Information
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");

  // Errors
  const [errors, setErrors] = useState({});

  // Fix hydration issues by waiting for client-side render
  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect to home if cart is empty
  useEffect(() => {
    if (mounted && items.length === 0) {
      navigate("/cart");
    }
  }, [mounted, items, navigate]);

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateCustomerInfo = () => {
    const newErrors = {};

    if (!customerInfo.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!customerInfo.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!customerInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!customerInfo.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateShippingInfo = () => {
    const newErrors = {};

    if (!shippingInfo.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!shippingInfo.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!shippingInfo.state.trim()) {
      newErrors.state = "State is required";
    }

    if (!shippingInfo.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateCustomerInfo()) {
        setStep(2);
        window.scrollTo(0, 0);
      }
    } else if (step === 2) {
      if (validateShippingInfo()) {
        setStep(3);
        window.scrollTo(0, 0);
      }
    } else if (step === 3) {
      setStep(4);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmitOrder = () => {
    setIsSubmitting(true);

    // Calculate shipping cost (free over $150)
    const shippingCost = subtotal >= 150 ? 0 : 10;

    // Create order object
    const order = {
      id: generateOrderId(),
      customer: customerInfo,
      shipping: shippingInfo,
      items: items,
      paymentMethod,
      totals: {
        subtotal,
        shipping: shippingCost,
        total: subtotal + shippingCost,
      },
      createdAt: new Date().toISOString(),
    };

    // Simulate API call
    setTimeout(() => {
      // Save order to localStorage
      saveOrder(order);

      // Clear cart
      clearCart();

      // Show success message
      navigate("/checkout/success");
      showToast("Order placed successfully!", "success");

      // Redirect to success page

      setIsSubmitting(false);
    }, 1500);
  };

  if (!mounted || items.length === 0) {
    return (
      <div className="container py-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
          Checkout
        </h1>
        <p>Loading...</p>
      </div>
    );
  }

  const stateOptions = [
    { value: "", label: "Select State" },
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ];

  const countryOptions = [
    { value: "US", label: "United States" },
    { value: "CA", label: "Canada" },
  ];

  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8">
        Checkout
      </h1>

      {/* Checkout Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1
                  ? "bg-deep-brown text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <span className="mt-2 text-sm">Customer Info</span>
          </div>
          <div
            className={`flex-1 h-1 mx-2 ${
              step >= 2 ? "bg-deep-brown" : "bg-gray-200"
            }`}
          ></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2
                  ? "bg-deep-brown text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <span className="mt-2 text-sm">Shipping</span>
          </div>
          <div
            className={`flex-1 h-1 mx-2 ${
              step >= 3 ? "bg-deep-brown" : "bg-gray-200"
            }`}
          ></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3
                  ? "bg-deep-brown text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              3
            </div>
            <span className="mt-2 text-sm">Payment</span>
          </div>
          <div
            className={`flex-1 h-1 mx-2 ${
              step >= 4 ? "bg-deep-brown" : "bg-gray-200"
            }`}
          ></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 4
                  ? "bg-deep-brown text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              4
            </div>
            <span className="mt-2 text-sm">Review</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-soft p-6">
            {/* Step 1: Customer Information */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Customer Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    id="firstName"
                    name="firstName"
                    value={customerInfo.firstName}
                    onChange={handleCustomerInfoChange}
                    error={errors.firstName}
                    required
                  />

                  <Input
                    label="Last Name"
                    id="lastName"
                    name="lastName"
                    value={customerInfo.lastName}
                    onChange={handleCustomerInfoChange}
                    error={errors.lastName}
                    required
                  />

                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    error={errors.email}
                    required
                  />

                  <Input
                    label="Phone"
                    id="phone"
                    name="phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    error={errors.phone}
                    required
                  />
                </div>

                <div className="mt-8 flex justify-end">
                  <Button onClick={handleNextStep}>Continue to Shipping</Button>
                </div>
              </div>
            )}

            {/* Step 2: Shipping Information */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Shipping Address
                </h2>

                <div className="grid grid-cols-1 gap-6">
                  <Input
                    label="Street Address"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleShippingInfoChange}
                    error={errors.address}
                    required
                  />

                  <Input
                    label="Apartment, suite, etc. (optional)"
                    id="apartment"
                    name="apartment"
                    value={shippingInfo.apartment}
                    onChange={handleShippingInfoChange}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="City"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingInfoChange}
                      error={errors.city}
                      required
                    />

                    <Select
                      label="State"
                      id="state"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingInfoChange}
                      options={stateOptions}
                      error={errors.state}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="ZIP Code"
                      id="zip"
                      name="zip"
                      value={shippingInfo.zip}
                      onChange={handleShippingInfoChange}
                      error={errors.zip}
                      required
                    />

                    <Select
                      label="Country"
                      id="country"
                      name="country"
                      value={shippingInfo.country}
                      onChange={handleShippingInfoChange}
                      options={countryOptions}
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>Continue to Payment</Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment Method */}
            {/* Step 3: Payment Method */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Payment Method
                </h2>

                <div className="space-y-4">
                  {/* Bank Transfer */}
                  <div className="border rounded-md p-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank-transfer"
                        checked={paymentMethod === "bank-transfer"}
                        onChange={() => setPaymentMethod("bank-transfer")}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Bank Transfer</div>
                        <div className="text-sm text-gray-600">
                          Pay via bank transfer. Your order will be processed
                          once payment is received.
                        </div>
                      </div>
                    </label>

                    {/* Show bank details form only if Bank Transfer is selected */}
                    {paymentMethod === "bank-transfer" && (
                      <div className="mt-4 grid grid-cols-1 gap-4">
                        <Input
                          label="Bank Name"
                          id="bankName"
                          name="bankName"
                          value={bankInfo.bankName}
                          onChange={handleBankInfoChange}
                          required
                        />
                        <Input
                          label="Account Name"
                          id="accountName"
                          name="accountName"
                          value={bankInfo.accountName}
                          onChange={handleBankInfoChange}
                          required
                        />
                        <Input
                          label="Account Number"
                          id="accountNumber"
                          name="accountNumber"
                          value={bankInfo.accountNumber}
                          onChange={handleBankInfoChange}
                          required
                        />
                        <Input
                          label="Routing Number"
                          id="routingNumber"
                          name="routingNumber"
                          value={bankInfo.routingNumber}
                          onChange={handleBankInfoChange}
                        />
                      </div>
                    )}
                  </div>

                  {/* Pay on Delivery */}
                  <div className="border rounded-md p-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pay-on-delivery"
                        checked={paymentMethod === "pay-on-delivery"}
                        onChange={() => setPaymentMethod("pay-on-delivery")}
                        className="mr-3"
                      />
                      <div>
                        <div className="font-medium">Pay on Delivery</div>
                        <div className="text-sm text-gray-600">
                          Pay with cash or card when your order is delivered.
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>Review Order</Button>
                </div>
              </div>
            )}

            {/* Step 4: Review Order */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Review Your Order
                </h2>

                <div className="space-y-6">
                  {/* Customer Information */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center justify-between">
                      <span>Customer Information</span>
                      <button
                        onClick={() => setStep(1)}
                        className="text-sm text-deep-brown hover:text-saddle-tan"
                      >
                        Edit
                      </button>
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p>
                        {customerInfo.firstName} {customerInfo.lastName}
                      </p>
                      <p>{customerInfo.email}</p>
                      <p>{customerInfo.phone}</p>
                    </div>
                  </div>

                  {/* Shipping Information */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center justify-between">
                      <span>Shipping Address</span>
                      <button
                        onClick={() => setStep(2)}
                        className="text-sm text-deep-brown hover:text-saddle-tan"
                      >
                        Edit
                      </button>
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p>
                        {customerInfo.firstName} {customerInfo.lastName}
                      </p>
                      <p>{shippingInfo.address}</p>
                      {shippingInfo.apartment && (
                        <p>{shippingInfo.apartment}</p>
                      )}
                      <p>
                        {shippingInfo.city}, {shippingInfo.state}{" "}
                        {shippingInfo.zip}
                      </p>
                      <p>
                        {shippingInfo.country === "US"
                          ? "United States"
                          : "Canada"}
                      </p>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="font-bold text-lg mb-2 flex items-center justify-between">
                      <span>Payment Method</span>
                      <button
                        onClick={() => setStep(3)}
                        className="text-sm text-deep-brown hover:text-saddle-tan"
                      >
                        Edit
                      </button>
                    </h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <p>
                        {paymentMethod === "bank-transfer"
                          ? "Bank Transfer"
                          : "Pay on Delivery"}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">Order Items</h3>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="divide-y">
                        {items.map((item, index) => (
                          <div key={index} className="py-3 flex items-center">
                            <div className="w-12 h-12 flex-shrink-0">
                              <img
                                src={item.images[0]}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div className="ml-4 flex-grow">
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-gray-600">
                                {item.color && `Color: ${item.color}`}
                                {item.size && ` | Size: ${item.size}`}
                                {` | Qty: ${item.quantity}`}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleSubmitOrder} disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <CartSummary isCheckout={true} />
        </div>
      </div>
    </div>
  );
}
