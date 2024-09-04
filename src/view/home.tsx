import InfoSection from "@/components/InfoSection";
import Category from "../components/Category";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MostSearchedCars from "../components/MostSearchedCars";
import Footer from "@/components/Footer";

function home() {
    return (
        <>
            {/**header */}
            <Header />

            {/**hero */}
            <Hero />

            {/**category */}
            <Category />

            {/* most searched car list */}
            <MostSearchedCars />

            {/* InfoSection */}
            <InfoSection />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default home