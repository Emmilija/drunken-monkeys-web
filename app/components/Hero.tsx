
import Image from "next/image";
import logo from "../assets/images/logo.jpg";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-black text-white px-6">
      
      <div className="text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Drunken Monkeys
        </h1>

        <div className="flex justify-center mt-6">
          <Image
            src={logo}
            alt="Drunken Monkeys Logo"
          
            className="rounded-full"
            loading="eager"
            style={{ height: "auto", width: 'auto' }} 
          />
        </div>

        <p className="text-gray-400 mt-6 text-lg">
          British Bar, cocktails and food experience in center of Skopje.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="/menu"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            View Menu
          </a>
        </div>

      </div>

    </section>
  );
}