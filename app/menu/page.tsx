"use client";

import { useState } from "react";

const categories = [
  "Coffee",
  "Hot Beverages",
  "Cold Drinks",
  "Beer",
  "Cocktails",
  "Food"
];

export default function MenuCard() {
  const [active, setActive] = useState("Coffee");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 py-16">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.25em]">
          DRUNKEN MONKEYS
        </h1>
        <p className="text-gray-400 mt-3 tracking-widest uppercase">
          BREWS • LIQUOR • GASTRO EXPERIENCE
        </p>
      </div>

      {/* CATEGORY NAV */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-4 py-3 flex gap-3 justify-center mb-12 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-full text-sm tracking-wide transition-all whitespace-nowrap
              ${active === cat ? "bg-white text-black" : "text-gray-300 hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MENU CONTENT */}
      <div className="max-w-4xl mx-auto space-y-10">
        {active === "Coffee" && <Section title="Coffee">
          <Item name="Double Espresso" price="140" />
          <Item name="Freddo Espresso" price="130" />
          <Item name="Macchiato" price="100" />
          <Item name="Cappuccino" price="100" />
          <Item name="Latte" price="130" />
        </Section>}

        {active === "Hot Beverages" && <Section title="Hot Beverages">
          <Item name="Tea" price="100" />
          <Item name="Hot Chocolate" price="160" />
          <Item name="Salep" price="100" />
        </Section>}

        {active === "Cold Drinks" && <Section title="Cold Drinks">
          <Item name="Pepsi / Zero" price="100" />
          <Item name="Schweppes" price="100" />
          <Item name="Ice Tea" price="100" />
          <Item name="Guarana" price="120" />
        </Section>}

        {active === "Beer" && <Section title="Beer Selection">
          <Item name="Zlaten Dab" price="130 / 150" />
          <Item name="Carlsberg" price="200 / 220" />
          <Item name="Kronenbourg Blanc" price="200 / 240" />
          <Item name="Corona" price="210" />
          <Item name="Guinness" price="230" />
        </Section>}

        {active === "Cocktails" && <Section title="Signature Cocktails">
          <Item name="Aperol Spritz" price="280" />
          <Item name="Mojito" price="290" />
          <Item name="Negroni" price="280" />
          <Item name="Espresso Martini" price="280" />
          <Item name="Long Island" price="300" />
        </Section>}

        {active === "Food" && <Section title="Gastro Kitchen">
          <Item name="Drunken Monkeys Burger" price="420" />
          <Item name="Bar Burger" price="380" />
          <Item name="Chicken Wings" price="270" />
          <Item name="Fries / Loaded Fries" price="190 - 280" />
          <Item name="Chicken Bites" price="310" />
        </Section>}
      </div>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
      <h2 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-white mb-6">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Item({ name, price }: any) {
  return (
    <div className="flex justify-between items-center border-b border-white/10 pb-2 text-sm md:text-base">
      <span className="text-gray-200 tracking-wide">{name}</span>
      <span className="text-white font-light">{price} MKD</span>
    </div>
  );
}
