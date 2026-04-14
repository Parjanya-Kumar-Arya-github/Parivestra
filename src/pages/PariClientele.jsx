import React from 'react';
import PariNavbar from './PariNavbar';
import PariFooter from './PariFooter';

// Import local logos
import amazonLogo from '../assets/amazon.png';
import uberLogo from '../assets/Uber.svg';
import swiggyLogo from '../assets/swiggy.png';
import paytmLogo from '../assets/Paytm.png';
import redbullLogo from '../assets/RedBull.png';
import nestleLogo from '../assets/nestle.png';
import pizzahutLogo from '../assets/PizzaHut.jpg';
import budweiserLogo from '../assets/Budweiser.png';
import gilletteLogo from '../assets/Gillette.jpg';
import hersheysLogo from "../assets/Hershey's.svg";
import nescafeLogo from '../assets/Nescafe.png';
import relianceLogo from '../assets/Reliance.png';
import heroLogo from '../assets/hero.png';
import myntraLogo from '../assets/myntra.jpg';
import meeshoLogo from '../assets/meesho.jpg';
import ndtvLogo from '../assets/NDTV.png';
import indiatodayLogo from '../assets/IndiaToday.png';
import hindustantimesLogo from '../assets/HindustanTimes.jpg';
import tataLogo from '../assets/tataWPL.jpg';
import apolloLogo from '../assets/apollo.jpg';
import wowmomoLogo from '../assets/WOWmomo.jpg';
import idpLogo from '../assets/IDP.png';
import fixdermaLogo from '../assets/FixDerma.avif';
import fastupLogo from '../assets/FastUp.webp';
import hangyoLogo from '../assets/Hangyo.jpg';
import admitadLogo from '../assets/Admitad.webp';
import aptosLogo from '../assets/Apstos.png';
import riseinLogo from '../assets/RiseIn.png';
import stockpeLogo from '../assets/StockPe.png';
import ohiLogo from '../assets/OHI.jpg';
import excellentLogo from '../assets/excellentPublicity.jpg';
import flixbusLogo from '../assets/flixbus.png';

const brands = [
    { name: 'Amazon', logo: amazonLogo, sector: 'E-Commerce' },
    { name: 'Uber', logo: uberLogo, sector: 'Mobility' },
    { name: 'Swiggy', logo: swiggyLogo, sector: 'Food Delivery' },
    { name: 'Paytm', logo: paytmLogo, sector: 'Fintech' },
    { name: 'RedBull', logo: redbullLogo, sector: 'Beverage' },
    { name: 'Nestlé', logo: nestleLogo, sector: 'FMCG' },
    { name: 'Pizza Hut', logo: pizzahutLogo, sector: 'QSR' },
    { name: 'Budweiser', logo: budweiserLogo, sector: 'Beverage' },
    { name: 'Gillette', logo: gilletteLogo, sector: 'Personal Care' },
    { name: 'Hershey\'s', logo: hersheysLogo, sector: 'Confectionery' },
    { name: 'Nescafé', logo: nescafeLogo, sector: 'Beverage' },
    { name: 'Reliance', logo: relianceLogo, sector: 'Conglomerate' },
    { name: 'Myntra', logo: myntraLogo, sector: 'Fashion E-Commerce' },
    { name: 'Meesho', logo: meeshoLogo, sector: 'Social Commerce' },
    { name: 'NDTV', logo: ndtvLogo, sector: 'Media & News' },
    { name: 'India Today', logo: indiatodayLogo, sector: 'Media' },
    { name: 'Hindustan Times', logo: hindustantimesLogo, sector: 'Media' },
    { name: 'Tata WPL', logo: tataLogo, sector: 'Sports & Conglomerate' },
    { name: 'Apollo', logo: apolloLogo, sector: 'Healthcare' },
    { name: 'Wow! Momo', logo: wowmomoLogo, sector: 'QSR' },
    { name: 'IDP', logo: idpLogo, sector: 'Education' },
    { name: 'FixDerma', logo: fixdermaLogo, sector: 'Skincare' },
    { name: 'Fast&Up', logo: fastupLogo, sector: 'Nutrition' },
    { name: 'Hangyo', logo: hangyoLogo, sector: 'Ice Cream' },
    { name: 'Admitad', logo: admitadLogo, sector: 'Affiliate Marketing' },
    { name: 'Aptos', logo: aptosLogo, sector: 'Blockchain' },
    { name: 'RiseIn', logo: riseinLogo, sector: 'Web3 Academy' },
    { name: 'StockPe', logo: stockpeLogo, sector: 'Fintech' },
    { name: 'OHI', logo: ohiLogo, sector: 'Advertising' },
    { name: 'Excellent Publicity', logo: excellentLogo, sector: 'Advertising' },
    { name: 'FlixBus', logo: flixbusLogo, sector: 'Intercity Travel' },
];

const PariClientele = () => {
    return (
        <div className="bg-[var(--pari-bg-primary)] min-h-screen text-[var(--pari-text-primary)] font-sans transition-colors">
            <PariNavbar />

            {/* ── HERO ─────────────────────────────────────── */}
            <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF4500]/8 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-[760px] mx-auto relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF4500]/15 border border-[#FF4500]/30 text-[#FF4500] text-[12px] font-bold uppercase tracking-widest mb-8 transition-colors">Clientele</span>
                    <h1 className="text-[52px] md:text-[68px] font-bold tracking-[-0.03em] leading-[1.0] text-[var(--pari-text-primary)] mb-6 transition-colors">
                        Brands we've{' '}
                        <em style={{ fontFamily: 'Georgia, serif', color: '#FF4500' }}>worked with</em>
                    </h1>
                    <p className="text-[19px] text-[var(--pari-text-secondary)] leading-relaxed transition-colors">
                        Each engagement executed pan-India, with market-specific strategies and distribution layers.
                    </p>
                </div>
            </section>

            {/* ── BRAND GRID (Premium Collage) ──────────────── */}
            <section className="py-24 px-4 sm:px-6 bg-[var(--pari-bg-secondary)] dark:bg-[#080F18] transition-colors relative overflow-hidden">
                {/* Decorative background blur to make it feel rich */}
                <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#FF4500]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#FF6B35]/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5">
                        {brands.map((brand) => (
                            <div
                                key={brand.name}
                                className="group relative flex flex-col items-center justify-center h-[180px] bg-white border border-[var(--pari-border)] hover:border-[#FF4500]/50 rounded-[28px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(255,69,0,0.15)] hover:-translate-y-2 cursor-pointer"
                            >
                                {/* Dark Gradient Overlay on Hover for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                                {/* Full Tile Logo Plate */}
                                <div className="absolute inset-0 z-0 p-8 flex items-center justify-center group-hover:scale-[0.85] group-hover:-translate-y-3 transition-all duration-500">
                                    <img
                                        src={brand.logo}
                                        alt={`${brand.name} Logo`}
                                        className="w-full h-full object-contain mix-blend-multiply grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>

                                {/* Sliding Text Details */}
                                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex flex-col items-center text-center">
                                    <h3 className="text-[17px] font-bold text-white leading-tight drop-shadow-md">{brand.name}</h3>
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF4500] mt-1 drop-shadow-md">{brand.sector}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ENGAGEMENT NOTE ───────────────────────────── */}
            <section className="py-24 px-6 bg-[var(--pari-bg-primary)] transition-colors">
                <div className="max-w-[900px] mx-auto">
                    <div className="bg-[var(--pari-bg-secondary)] dark:bg-white/4 border border-[var(--pari-border)] rounded-2xl p-10 md:p-14 text-center shadow-sm dark:shadow-none transition-colors">
                        <i className="fa-solid fa-map-location-dot text-[48px] text-[#FF4500] mb-6 block"></i>
                        <h2 className="text-[32px] md:text-[40px] font-bold text-[var(--pari-text-primary)] mb-4 transition-colors">Pan-India Execution</h2>
                        <p className="text-[17px] text-[var(--pari-text-secondary)] leading-relaxed max-w-[600px] mx-auto mb-10 transition-colors">
                            Every brand engagement is executed pan-India with deeply localized, market-specific strategies — from metros to Tier-2 and Tier-3 cities — through our proprietary distribution network.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Market-Specific Strategy', 'Pan-India Reach', 'Offline + Digital', 'Community-Led', 'Outcome-Tracked'].map((t) => (
                                <span key={t} className="px-4 py-2 bg-[#FF4500]/10 border border-[#FF4500]/25 rounded-full text-[13px] font-medium text-[#FF4500]">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CASE STUDY CTA ────────────────────────────── */}
            <section className="py-16 pb-32 px-6 bg-[var(--pari-bg-secondary)] dark:bg-[#080F18] transition-colors">
                <div className="max-w-[700px] mx-auto text-center">
                    <h2 className="text-[36px] md:text-[48px] font-bold tracking-tight text-[var(--pari-text-primary)] mb-6 transition-colors">
                        See the full{' '}
                        <span style={{ color: '#FF4500' }}>case studies</span>
                    </h2>
                    <p className="text-[17px] text-[var(--pari-text-secondary)] leading-relaxed mb-10 transition-colors">
                        Detailed documentation of engagement strategies, campaign architecture, and measured outcomes across each brand partnership.
                    </p>
                    <a
                        href="https://www.canva.com/design/DAGnCSjB6Gg/phbckJVpepIfHc_prCwpxg/edit"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] text-white font-semibold text-[16px] rounded-[14px] hover:from-[#E03D00] hover:to-[#FF4500] transition-all shadow-xl shadow-orange-500/30"
                    >
                        View Case Study Document
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" /></svg>
                    </a>
                </div>
            </section>

            <PariFooter />
        </div>
    );
};

export default PariClientele;
