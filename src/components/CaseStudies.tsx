import { motion } from 'framer-motion';

const features = [
    "Solved complex distribution challenges",
    "Built community-first GTM strategies",
    "Correlated brand visibility with sales",
    "Scaled brands across offline and digital ecosystems"
];

const CaseStudies = () => {
    return (
        <section id="case-studies" className="py-24 px-6 md:px-12 w-full flex justify-center border-t border-white/5">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex justify-between items-end"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Real Distribution. Real Outcomes.</h2>
                        <p className="text-lg text-slate-400 font-light mb-6">
                            Explore detailed case studies showcasing how Parivestra:
                        </p>
                        <ul className="flex flex-col gap-3 font-light text-slate-300">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8 md:mt-0 flex flex-col gap-4">
                        <motion.a
                            href="https://www.canva.com/design/DAGnCSjB6Gg/phbckJVpepIfHc_prCwpxg/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                        >
                            Performance First Case Studies
                        </motion.a>
                        <motion.a
                            href="https://docs.google.com/presentation/d/1XngK1zEXeT7Jz-gH8tC0h0H1XJzj92i8mYI2rS-n0YI/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-colors"
                        >
                            Case Studies | UGC Campaigns
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudies;
