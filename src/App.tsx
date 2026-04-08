import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Stats from './components/Stats';
import Partnerships from './components/Partnerships';
import Clientele from './components/Clientele';
import AboutUs from './components/AboutUs';
import CaseStudies from './components/CaseStudies';
import DistributionSegments from './components/DistributionSegments';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-[#0D1B2A] text-white selection:bg-orange-500/30 selection:text-white font-sans overflow-x-hidden">
            {/* Brand Glow Effects — Orange + Navy */}
            <div className="fixed top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-[#FF4500] opacity-[0.06] blur-[140px] rounded-full pointer-events-none -z-10" />
            <div className="fixed bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] bg-[#FF4500] opacity-[0.04] blur-[160px] rounded-full pointer-events-none -z-10" />
            <div className="fixed top-[40%] left-[60%] w-[30vw] h-[30vw] bg-[#1A3A5C] opacity-[0.3] blur-[100px] rounded-full pointer-events-none -z-10" />

            <Navbar />
            <main className="w-full flex flex-col items-center justify-center">
                <Hero />
                <BentoGrid />
                <Stats />
                <Partnerships />
                <Clientele />
                <AboutUs />
                <CaseStudies />
                <DistributionSegments />
            </main>
            <Footer />
        </div>
    )
}

export default App
