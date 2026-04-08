import { motion } from 'framer-motion';

const DistributionSegments = () => {
    return (
        <section id="distribution-segments" className="py-24 px-6 md:px-12 w-full flex justify-center">
            <div className="max-w-6xl w-full p-10 rounded-[32px] glass relative overflow-hidden text-center flex flex-col items-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-3xl flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Distribution Segments Available</h2>
                    <p className="text-lg text-slate-400 font-light mb-8">
                        We operate across multiple proprietary and partner-led distribution segments spanning offline and digital ecosystems.
                    </p>
                    <motion.a
                        href="https://docs.google.com/spreadsheets/d/1W512i1gB0P5aYj7qWlJ8EhyZ9QeX8I2x1D8AIf1_854/edit?gid=179512398"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                        Partnership Scale | Parivestra
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default DistributionSegments;
