import React from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";

const POPULAR_PRODUCTS = [
  { id: 1, tag: "Brembo", category: "Brakes", name: "Brembo M50 Monoblock Radial Caliper", price: "Rs5,499.00", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=400&q=80" },
  { id: 2, tag: "Shoei", category: "Helmets", name: "Shoei X-15 Aerodynamic Racing Helmet", price: "Rs8,849.99", image: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=400&q=80" },
  { id: 3, tag: "Öhlins", category: "Suspension", name: "Öhlins TTX GP Rear Shock Absorber", price: "Rs1,250.00", image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&q=80" },
  { id: 4, tag: "DID", category: "Transmission", name: "DID 520 ZVM-X Super Street Chain", price: "Rs185.00", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&q=80" },
];

export default function PopularProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Popular Products</h2>
          <p className="text-sm text-slate-400 mt-1">The most trusted components chosen by experts.</p>
        </div>
        <a href="#" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium group transition">
          View All Products <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {POPULAR_PRODUCTS.map((product) => (
          <div key={product.id} className="group bg-[#141822] border border-slate-800/60 rounded-2xl overflow-hidden p-4 flex flex-col justify-between hover:border-slate-700 transition">
            <div className="relative aspect-square w-full rounded-xl bg-slate-950 overflow-hidden mb-4 flex items-center justify-center">
              <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded-full border border-slate-800">
                {product.tag}
              </span>
              <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-300" />
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{product.category}</p>
              <h3 className="text-sm font-semibold text-slate-200 line-clamp-2 min-h-[40px] group-hover:text-white transition">{product.name}</h3>
            </div>
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-800/40">
              <span className="text-base font-bold text-white">{product.price}</span>
              <button className="bg-blue-500/10 hover:bg-blue-500 text-blue-400 hover:text-white p-2 rounded-full transition duration-200">
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}