"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {

  return (
    <>
      <Header />
        <main className="min-h-screen p-24 grid place-items-center">
          <p>HomePage</p>
        </main>
      <Footer />
    </>
  );
}
