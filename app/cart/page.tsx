import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Cart() {

    return (
        <>
            <Header />
            <main className="min-h-screen p-24 flex flex-col items-center">
                <h1 className="font-medium uppercase mb-8">Shopping cart</h1>
                <p>Cart is now empty!</p>
            </main>
            <Footer />
        </>
    )
}