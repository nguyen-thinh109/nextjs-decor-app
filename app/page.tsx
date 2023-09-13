import Footer from "@/components/footer";
import Header from "@/components/header";
import { createContext } from "react";


export default function Home() {
  let navigationState = {
    activeTab: 0,
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Promotion', href: '/promotion' },
      { name: 'News', href: '/news' },
      { name: 'Gallery', href: '/gallery' },
    ]
  };

  const NavigationContext = createContext(navigationState);
  
  
  return (
    <>
      <NavigationContext.Provider value={navigationState}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

        </main>
        <Footer />
      </NavigationContext.Provider>
    </>
  );
}
