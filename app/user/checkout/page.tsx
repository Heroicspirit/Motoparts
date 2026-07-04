"use client";

import React, { useState } from "react";
import { Lock, Truck, ShoppingBag, ArrowRight, ShieldCheck, RefreshCcw } from "lucide-react";
import Header from "../_components/Header";
import Link from "next/link";
import { createOrder } from "@/lib/api/orders";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    address: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock order data - in real app, this would come from cart
      const orderData = {
        items: [
          {
            product: "mock-product-id",
            title: "Akrapovič Slip-On Exhaust",
            image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&q=80",
            price: 1249.99,
            quantity: 1
          }
        ],
        shippingAddress: formData,
        paymentMethod: 'cod',
        subtotal: 1249.99,
        shippingCost: 0,
        total: 1249.99
      };

      const response = await createOrder(orderData);
      if (response.success) {
        router.push('/user/checkout/review');
      }
    } catch (error) {
      console.error('Failed to create order:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0f1115] flex flex-col">
      <Header />

      {/* MAIN CHECKOUT GRID */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN (Shipping & Review Items) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Shipping Information Section */}
            <div className="bg-[#151923] border border-slate-800 rounded-xl p-6 lg:p-8 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-3">
                <Truck size={20} className="text-slate-300" /> Shipping Information
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name" 
                      className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-1.5">
                    <label className="text-sm text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name" 
                      className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-sm text-slate-300">Phone Number</label>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange} 
                      placeholder="Enter phone number" 
                      className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                  </div>
                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-sm text-slate-300">City</label>
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city" 
                      className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                    />
                  </div>
                </div>
                {/* Full Address */}
                <div className="space-y-1.5">
                  <label className="text-sm text-slate-300">Building/Street/Landmark Address</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter address details" 
                    className="w-full bg-white border border-slate-200 rounded-md p-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  />
                </div>
              </form>
            </div>

            {/* Review Items Section */}
            <div className="bg-[#151923] border border-slate-800 rounded-xl p-6 lg:p-8 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-3">
                <ShoppingBag size={20} className="text-slate-300" /> Review Items
              </h2>

              <div className="bg-[#1b202c] rounded-xl p-4 flex flex-col sm:flex-row gap-5 items-center sm:items-start border border-slate-800/60">
                <div className="w-32 h-32 shrink-0 rounded-lg overflow-hidden bg-[#0a0c10]">
                  <img 
                    src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=300&q=80" 
                    alt="Akrapovič Slip-On Line Titanium Exhaust" 
                    className="w-full h-full object-cover brightness-95"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-sm font-semibold text-white">Akrapovič Slip-On Line Titanium Exhaust</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Carbon fiber end cap | Precision titanium welds | High-performance weight reduction
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-slate-800/80 rounded-full text-xs font-medium text-slate-300 border border-slate-700/50">
                      Qty: 1
                    </span>
                    <span className="text-sm font-bold text-white">Rs1,249.00</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Order Summary) */}
          <div className="lg:col-span-4">
            <div className="bg-[#151923] border border-slate-800 rounded-xl p-6 lg:p-8 space-y-6 sticky top-8">
              <h2 className="text-lg font-semibold text-white">Order Summary</h2>

              {/* Mini Cart Item */}
              <div className="flex items-center gap-4 pb-6 border-b border-slate-800">
                <div className="w-16 h-12 rounded bg-[#0a0c10] overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=150&q=80" 
                    alt="Item Thumbnail" 
                    className="w-full h-full object-cover brightness-90"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-medium text-slate-200 truncate">Akrapovič Slip-On Line<br/>Titanium Exhaust</h4>
                  <div className="flex justify-between items-center pt-1 text-xs">
                    <span className="text-slate-400">Qty: 1</span>
                    <span className="text-slate-400">Rs 1,249.00</span>
                  </div>
                </div>
              </div>

              {/* Totals Breakdown */}
              <div className="space-y-3 text-sm border-b border-slate-800 pb-6">
                <div className="flex justify-between text-slate-300">
                  <span>Items Total</span>
                  <span className="text-white">Rs 1,249.00</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Shipping</span>
                  <span className="text-white">Rs 0</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="flex items-baseline justify-between pt-2">
                <span className="text-xl font-bold text-white">Total</span>
                <span className="text-xl font-bold text-white">Rs 1,249.00</span>
              </div>

              {/* Action Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#b3c5ff] hover:bg-[#a5b8ff] text-slate-900 font-bold text-sm py-3.5 px-4 rounded-md transition flex items-center justify-center gap-2 mt-4 text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'PROCEED TO PAY'} <ArrowRight size={16} />
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 text-[10px] sm:text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-slate-500 shrink-0" />
                  <span>SSL Encrypted<br/>Secure Checkout</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCcw size={16} className="text-slate-500 shrink-0" />
                  <span>30-Day Free<br/>Return Policy</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}