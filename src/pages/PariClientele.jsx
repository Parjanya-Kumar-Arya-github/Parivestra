import React from 'react';
import PariNavbar from './PariNavbar';
import PariFooter from './PariFooter';

// Import local logos
import swiggyLogo from '../assets/swiggy.png';
import uberLogo from '../assets/uber.png';
import flixbusLogo from '../assets/flixbus.png';
import nestleLogo from '../assets/nestle.png';
import apolloLogo from '../assets/apollo.jpg';
import myntraLogo from '../assets/myntra.jpg';

const brands = [
    { name: 'Swiggy', logo: swiggyLogo, sector: 'Food Delivery' },
    { name: 'Uber', logo: uberLogo, sector: 'Mobility' },
    { name: 'FlixBus', logo: flixbusLogo, sector: 'Intercity Travel' },
    { name: 'Nestlé', logo: nestleLogo, sector: 'FMCG' },
    { name: 'JioStar', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/JioStar_2025.svg', sector: 'Media & Entertainment' },
    { name: 'Apollo', logo: apolloLogo, sector: 'Healthcare' },
    { name: 'Meesho', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Meesho_Logo_Full.png', sector: 'Social Commerce' },
    { name: 'Myntra', logo: myntraLogo, sector: 'Fashion E-Commerce' },
    { name: 'Tata Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg', sector: 'Conglomerate' },
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

            {/* ── BRAND GRID ────────────────────────────────── */}
            <section className="py-16 px-6 bg-[var(--pari-bg-secondary)] dark:bg-[#080F18] transition-colors">
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--pari-border)] rounded-2xl overflow-hidden border border-[var(--pari-border)] transition-colors">
                        {brands.map((brand) => (
                            <div
                                key={brand.name}
                                className="group relative flex flex-col items-center justify-center bg-[var(--pari-bg-primary)] hover:bg-[var(--pari-bg-secondary)] dark:bg-[#0D1B2A] dark:hover:bg-[#0F1F30] h-[220px] transition-all duration-300 hover:z-10"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/0 to-[#FF4500]/0 group-hover:from-[#FF4500]/5 group-hover:to-transparent transition-all duration-300" />
                                <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center p-3 mb-4 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
                                    <img
                                        src={brand.logo}
                                        alt={`${brand.name} Logo`}
                                        className="w-full h-full object-contain transition-all duration-300"
                                    />
                                </div>
                                <h3 className="text-[18px] font-bold text-[var(--pari-text-primary)] group-hover:text-[#FF4500] transition-colors">{brand.name}</h3>
                                <p className="text-[12px] text-[var(--pari-text-secondary)] mt-1 font-medium transition-colors">{brand.sector}</p>
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
