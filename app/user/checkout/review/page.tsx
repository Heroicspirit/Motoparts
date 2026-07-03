"use client";

import React from "react";
import { 
  MapPin, 
  Phone, 
  UserCheck, 
  Package, 
  Truck, 
  ChevronRight, 
  Lock, 
  Pencil,
  Wallet,
  Building,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import Header from "../../_components/Header";

export default function OrderReviewPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] flex flex-col">
      <Header />

      {/* MAIN BODY CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* TOP DESCRIPTION TITLE */}
        <div className="space-y-1">
          <h1 className="text-md font-bold text-slate-200 tracking-wide">Review Your Order</h1>
          <p className="text-xs text-slate-400">Please confirm your shipping details and order information before proceeding to payment.</p>
        </div>

        {/* CORE INTERFACE CONTAINER SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT CONTAINER COMPONENT: ADDRESS & PACKAGES */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Shipping Address Dashboard View Box */}
            <div className="bg-[#131622] border border-slate-800/60 rounded-xl p-6 space-y-6">
              <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800/50">
                <Truck size={14} className="text-blue-500" /> Shipping Address
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {/* Receiver Info */}
                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <UserCheck size={11} /> Receiver
                  </div>
                  <div className="text-xs font-semibold text-white">Shyam</div>
                </div>

                {/* Contact Number */}
                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Phone size={11} /> Contact Number
                  </div>
                  <div className="text-xs font-semibold text-white">+977 9820824223</div>
                </div>

                {/* Address Details */}
                <div className="sm:col-span-2 space-y-1.5">
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <MapPin size={11} /> Address Details
                  </div>
                  <div className="text-xs text-slate-300 font-medium flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mr-1"></span>
                    Nepal, Ktm, Putalisadak, Ktm-29
                  </div>
                </div>
              </div>

              {/* Edit Address Action Trigger */}
              <div className="pt-2">
                <button className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold transition group">
                  Edit Address <Pencil size={11} className="group-hover:scale-105 transition" />
                </button>
              </div>
            </div>

            {/* Package Details Box Placeholder */}
            <div className="bg-[#131622] border border-slate-800/60 rounded-xl p-6">
              <h2 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2 pb-3 border-b border-slate-800/50">
                <Package size={14} className="text-slate-400" /> Package Details
              </h2>
              <div className="h-12 flex items-center text-xs text-slate-500 italic pl-1 pt-4">
                1 item bundle packaged via express courier router line.
              </div>
            </div>

          </div>

          {/* RIGHT CONTAINER SIDEBAR COMPONENT: ORDER SUMMARY PANEL */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Primary Billing Ledger Card */}
            <div className="bg-[#131622] border border-slate-800/60 rounded-xl p-6 space-y-6">
              <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Order Detail</h3>

              {/* Price Rows */}
              <div className="space-y-4 text-xs border-b border-slate-800/50 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Items Total (1 Item)</span>
                  <span className="text-white font-bold">Rs. 1,249</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Shipping</span>
                  <span className="text-white font-bold">Rs. 0</span>
                </div>
              </div>

              {/* Grand Total Wrapper */}
              <div className="flex justify-between items-baseline pt-1">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white block">Total</span>
                  <span className="text-[9px] text-slate-500 tracking-wider font-bold uppercase block">Including Taxes</span>
                </div>
                <span className="text-base font-black text-blue-400">Rs. 1249</span>
              </div>

              {/* Submission CTA Action Route Trigger Button */}
              <Link href="/user/checkout/payment" className="w-full bg-[#a3beff] hover:bg-[#91aff7] text-slate-900 font-bold text-xs py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-1.5 group shadow-lg shadow-blue-500/5 text-center">
                Proceed to Pay <ChevronRight size={14} className="group-hover:translate-x-0.5 transition" />
              </Link>

              {/* Payment Type Mini Icons Asset Indicators */}
              <div className="flex items-center justify-center gap-4 text-slate-600 border-t border-slate-800/40 pt-4">
                <Wallet size={16} />
                <Building size={16} />
                <CreditCard size={16} />
              </div>
            </div>

            {/* Bottom Secure Shield Disclaimer Box */}
            <div className="bg-[#131622]/40 border border-slate-800/40 rounded-xl p-4 flex items-start gap-3">
              <Lock size={15} className="text-slate-400 shrink-0 mt-0.5" />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Secure 256-bit SSL encrypted checkout. Your data is safe with us.
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/40 px-6 py-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-sm font-bold text-white tracking-tight">
              Moto<span className="text-blue-400">Parts</span>
            </div>
            <p>© 2026 MotoParts. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}