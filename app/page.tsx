"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ActiveTabContext } from "@/src/Contexts";
import { useState } from "react";

export default function Home() {

  const [activeTabContext, setActiveTabContext] = useState(0);
  
  return (
    
      <ActiveTabContext.Provider value={[activeTabContext, setActiveTabContext]}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
        <Footer />
      </ActiveTabContext.Provider>
    
  );
}
