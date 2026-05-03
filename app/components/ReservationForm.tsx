"use client";
import emailjs from "emailjs-com";

import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

 try {
 await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  form,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);

  alert("Reservation sent successfully!");

} catch (error) {
  console.error(error);
  alert("Something went wrong.");
}

setLoading(false);
}

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-white/10 shadow-xl">
        
        <h2 className="text-3xl font-bold mb-6 text-center">
          Reserve a Table
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            required
          />

          <input
            name="date"
            type="date"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            required
          />

          <input
            name="guests"
            type="number"
            placeholder="Number of Guests"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
            required
          />

          <textarea
            name="message"
            placeholder="Special Requests"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {loading ? "Sending..." : "Book Now"}
          </button>
        </form>
      </div>
    </section>
  );
}