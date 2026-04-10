import React from 'react';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {/* Mesh Gradient Layers */}
            <div
                className="absolute inset-0 transition-opacity duration-1000"
                style={{
                    background: `
                        radial-gradient(circle at 0% 0%, rgba(255, 69, 0, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 100% 0%, rgba(208, 178, 255, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 100% 100%, rgba(255, 69, 0, 0.05) 0%, transparent 50%),
                        radial-gradient(circle at 0% 100%, rgba(13, 27, 42, 0.2) 0%, transparent 50%)
                    `,
                    filter: 'blur(60px)',
                    opacity: 0.8
                }}
            />

            {/* Grain/Noise Overlay for high-fidelity feel */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle light mode adjustments */}
            <div className="absolute inset-0 dark:hidden bg-white/40 mix-blend-soft-light" />
        </div>
    );
};

export default HeroBackground;
