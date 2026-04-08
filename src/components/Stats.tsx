import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section id="scale" className="py-24 px-6 md:px-12 w-full flex justify-center border-t border-white/5 mt-12 bg-white/[0.01]">
            <div className="max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 md:flex justify-between items-end"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">Our Scale</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] glass p-10 flex flex-col justify-center items-center text-center min-h-[250px] group"
                    >
                        <h3 className="text-5xl md:text-6xl font-normal text-[#FF4500] mb-4 tracking-[-0.03em]">100+</h3>
                        <p className="text-xl font-medium text-slate-200">brands enabled</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] glass p-10 flex flex-col justify-center items-center text-center min-h-[250px] group"
                    >
                        <h3 className="text-5xl md:text-6xl font-normal text-[#FF4500] mb-4 tracking-[-0.03em]">300M+</h3>
                        <p className="text-xl font-medium text-slate-200">device & community touchpoints</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="rounded-[32px] glass p-10 flex flex-col justify-center items-center text-center min-h-[250px] group"
                    >
                        <h3 className="text-5xl md:text-6xl font-normal text-[#FF4500] mb-4 tracking-[-0.03em]">₹120+ Cr</h3>
                        <p className="text-xl font-medium text-slate-200">in aggregated sales driven</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
