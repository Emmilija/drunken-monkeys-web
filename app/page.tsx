import Image from "next/image";
import Hero from "./components/Hero";
import ReservationForm from "./components/ReservationForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <ReservationForm />
    </main>
  );
}
