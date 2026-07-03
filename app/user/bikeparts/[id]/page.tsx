"use client";

import React, { useState } from "react";
import { Star, ShoppingCart, ShoppingBag, ArrowLeft, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "../../_components/Header";

// Mock data populated from your exact uploaded image specifications
const PRODUCT_DETAIL = {
  id: 2,
  brand: "AKRAPOVIC PERFORMANCE",
  title: "Slip-On Line Titanium Exhaust System",
  rating: 4.9,
  reviewsCount: 128,
  price: "1,249.00",
  originalPrice: "1,499.00",
  discountBadge: "SAVE 15%",
  specs: [
    { label: "Material", value: "High-Grade Titanium" },
    { label: "Weight Reduction", value: "-3.2 kg vs Stock" },
    { label: "Power Increase", value: "+4.5 HP @ 13,200 RPM" },
    { label: "Sound Level", value: "102 dB (with baffle)" },
  ],
  images: [
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=600&q=80"
  ]
};

const RECOMMENDATIONS = [
  { id: 10, brand: "CARBON TECH", title: "High-Flow Air Filter", price: "189.00", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&q=80" },
  { id: 11, brand: "BREMBO RACING", title: "M50 Monoblock Calipers", price: "849.00", image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&q=80" },
  { id: 12, brand: "DID RACING", title: "525 ZVM-X Gold Chain", price: "210.00", image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400&q=80" },
  { id: 13, brand: "RIZOMA ELITE", title: "Adjustable Rear Sets", price: "540.00", image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=400&q=80" }
];

export default function ProductDetailPage() {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1115] flex flex-col">
      <Header />
      <main className="flex-1 p-4 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* BACK TO BROWSE ACTION TIMELINE */}
        <div className="flex items-center justify-between border-b border-slate-900 pb-4">
          <Link href="/user/bikeparts" className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition">
            <ArrowLeft size={14} /> Back to Catalog
          </Link>
          <span className="text-[11px] text-slate-500 font-medium">Product Reference: #MP-00{PRODUCT_DETAIL.id}</span>
        </div>

        {/* COMPONENT LAYOUT MATRIX SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: IMAGE VIEWPORT GALLERY STACK */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-[#111319] border border-slate-900 aspect-square flex items-center justify-center">
              <span className="absolute top-4 left-4 z-10 bg-blue-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Original
              </span>
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#0a0c10]/60 backdrop-blur-md rounded-xl text-slate-400 hover:text-rose-500 transition"
              >
                <Heart size={16} fill={isFavorite ? "currentColor" : "none"} className={isFavorite ? "text-rose-500" : ""} />
              </button>
              <img 
                src={PRODUCT_DETAIL.images[activeImgIdx]} 
                alt={PRODUCT_DETAIL.title}
                className="w-full h-full object-cover brightness-95"
              />
            </div>

            {/* Gallery Mini Previews Row */}
            <div className="grid grid-cols-3 gap-4">
              {PRODUCT_DETAIL.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-[#111319] border transition-all ${
                    activeImgIdx === idx ? "border-blue-500 ring-1 ring-blue-500" : "border-slate-900 hover:border-slate-800"
                  }`}
                >
                  <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover brightness-75" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: META INFO, PRICE, TECHNICAL SPECS TABLE */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                {PRODUCT_DETAIL.brand}
              </span>
              <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                {PRODUCT_DETAIL.title}
              </h1>
              
              {/* Reviews & Star Rating Row */}
              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center text-blue-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  ({PRODUCT_DETAIL.reviewsCount} Reviews)
                </span>
              </div>
            </div>

            {/* Pricing Section Details */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="text-2xl font-black text-white">
                Rs {PRODUCT_DETAIL.price}
              </span>
              <span className="text-sm text-slate-600 line-through">
                Rs {PRODUCT_DETAIL.originalPrice}
              </span>
              <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black px-2 py-0.5 rounded">
                {PRODUCT_DETAIL.discountBadge}
              </span>
            </div>

            {/* TECHNICAL SPECIFICATIONS TABLE COMPONENT */}
            <div className="space-y-3 pt-4 border-t border-slate-900">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technical Specifications
              </h3>
              <div className="bg-[#111319]/50 rounded-xl border border-slate-900 overflow-hidden divide-y divide-slate-900/60 text-xs">
                {PRODUCT_DETAIL.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between p-3.5 px-4 items-center">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-slate-200 font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PURCHASE & ACTIONS COUNTER HUD */}
            <div className="flex items-center gap-3 pt-6">
              {/* Incremental Stepper */}
              <div className="flex items-center bg-[#111319] border border-slate-900 rounded-xl h-11">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3.5 text-slate-500 hover:text-white text-sm font-bold transition"
                >
                  -
                </button>
                <span className="w-6 text-center text-xs font-bold text-white select-none">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3.5 text-slate-500 hover:text-white text-sm font-bold transition"
                >
                  +
                </button>
              </div>

              {/* Add to selection basket */}
              <button className="flex-1 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 font-bold text-xs h-11 px-4 rounded-xl transition flex items-center justify-center gap-2">
                <ShoppingCart size={14} /> Add to Cart
              </button>

              {/* Immediate Checkout Trigger */}
              <Link href="/user/checkout" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs h-11 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md shadow-blue-500/10 text-center">
                <ShoppingBag size={14} /> Buy Now
              </Link>
            </div>
          </div>

        </div>

        {/* RECOMMENDATION BLOCK (YOU MAY ALSO LIKE) */}
        <section className="space-y-6 pt-12 border-t border-slate-900">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight">You may also like</h2>
            <Link href="/user/bikeparts" className="text-xs font-semibold text-blue-400 hover:underline flex items-center gap-1 transition">
              View all components <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECOMMENDATIONS.map((item) => (
              <div key={item.id} className="group bg-[#111319] border border-slate-900 rounded-2xl p-4 flex flex-col justify-between space-y-4 hover:border-slate-800 transition">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-[#0a0c10]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover brightness-90 group-hover:scale-102 transition duration-300" />
                </div>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">{item.brand}</span>
                    <h4 className="text-xs font-semibold text-slate-200 line-clamp-1 pt-0.5 group-hover:text-white transition">{item.title}</h4>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-bold text-white">Rs {item.price}</span>
                    <button className="p-2.5 bg-[#181d29] hover:bg-blue-500 text-slate-400 hover:text-white rounded-xl border border-slate-800/80 transition">
                      <ShoppingCart size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
      </main>
    </div>
  );
}