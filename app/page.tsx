import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Hero />
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div>
      <h1> </h1>
    </div>
  )
}