"use client";

import React from "react";
import { ShoppingCart, ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import Header from "../_components/Header";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#0f1115] flex flex-col">
      <Header />
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/user/dashboard" className="p-2 rounded-full hover:bg-slate-800 transition">
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </Link>
            <h1 className="text-2xl font-bold text-white">Shopping Cart</h1>
          </div>

          {/* Empty Cart State */}
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
              <ShoppingCart className="w-12 h-12 text-slate-600" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Your cart is empty</h2>
            <p className="text-slate-400 mb-6">Add some products to your cart to continue shopping</p>
            <Link 
              href="/user/dashboard"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg shadow-blue-500/10"
            >
              Continue Shopping
            </Link>
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
