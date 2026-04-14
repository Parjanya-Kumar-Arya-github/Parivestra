import React, { useState } from 'react';
import PariNavbar from './PariNavbar';
import PariFooter from './PariFooter';
import logoIcon from '../assets/logo_icon.png';
import { useTheme } from '../context/ThemeContext';

const PariContact = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        brandName: '',
        phoneNumber: '',
        serviceRequired: '',
        emailId: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    brandName: '',
                    phoneNumber: '',
                    serviceRequired: '',
                    emailId: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = `
        w-full bg-transparent border-b-2 border-[var(--pari-border)] py-3 px-1
        text-[var(--pari-text-primary)] placeholder:text-[var(--pari-text-secondary)]/50
        focus:outline-none focus:border-[#FF4500] hover:border-[#FF4500]/60
        transition-all duration-300 group
    `;

    return (
        <div className="bg-[var(--pari-bg-primary)] min-h-screen text-[var(--pari-text-primary)] font-sans">
            <PariNavbar />

            <main className="max-w-[1440px] mx-auto px-6 pt-[160px] pb-32">
                <div className="flex flex-col lg:flex-row items-start gap-20 lg:gap-32">

                    {/* Left Side: Brand Identity */}
                    <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="relative group mb-8">
                            <div className="absolute -inset-4 bg-[#FF4500]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src={logoIcon}
                                alt="Parivestra Icon"
                                className="relative h-32 md:h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h1 className="text-[32px] md:text-[40px] font-bold tracking-[0.2em] text-[var(--pari-text-primary)] uppercase">
                            Parivestra
                        </h1>
                        <div className="h-1.5 w-20 bg-[#FF4500] mt-4 rounded-full" />
                        <p className="mt-8 text-[18px] text-[var(--pari-text-secondary)] leading-relaxed max-w-[320px]">
                            Distribution, engineered for outcomes. Let's build the future together.
                        </p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="flex-1 w-full max-w-[600px]">
                        <div className="mb-12">
                            <h2 className="text-[44px] md:text-[56px] font-bold tracking-tight leading-tight mb-4">
                                Get in <em className="italic" style={{ fontFamily: 'Georgia, serif', color: '#FF4500' }}>touch</em>
                            </h2>
                            <p className="text-[18px] text-[var(--pari-text-secondary)]">
                                Fill out the form below and our team will get back to you shortly.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold uppercase tracking-wider text-[#FF4500]">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold uppercase tracking-wider text-[#FF4500]">Brand Name</label>
                                    <input
                                        type="text"
                                        name="brandName"
                                        placeholder="Company Inc."
                                        value={formData.brandName}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold uppercase tracking-wider text-[#FF4500]">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="+91 00000 00000"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[12px] font-bold uppercase tracking-wider text-[#FF4500]">Email Id</label>
                                    <input
                                        type="email"
                                        name="emailId"
                                        placeholder="john@example.com"
                                        value={formData.emailId}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[12px] font-bold uppercase tracking-wider text-[#FF4500]">Service Required</label>
                                <input
                                    type="text"
                                    name="serviceRequired"
                                    placeholder="e.g. Influencer Marketing, Distribution"
                                    value={formData.serviceRequired}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    required
                                />
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full md:w-auto px-10 py-4 bg-gradient-to-r from-[#FF4500] to-[#FF6B35] text-white font-bold text-[16px] rounded-xl hover:shadow-2xl hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>

                                {submitStatus === 'success' && (
                                    <p className="mt-4 text-green-500 font-medium flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                                        Message sent! We'll be in touch.
                                    </p>
                                )}
                                {submitStatus === 'error' && (
                                    <p className="mt-4 text-red-500 font-medium flex items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        Failed to send message. Please try again.
                                    </p>
                                )}

                                <p className="mt-8 flex items-center gap-3 text-[14px] text-[var(--pari-text-secondary)] font-medium">
                                    <span className="flex h-2 w-2 rounded-full bg-[#FF4500] animate-pulse" />
                                    Someone from our team will reach you in 24 hours.
                                </p>
                            </div>
                        </form>
                    </div>

                </div>
            </main>

            <PariFooter />
        </div>
    );
};

export default PariContact;
