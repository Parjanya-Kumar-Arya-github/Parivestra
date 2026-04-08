// Parivestra Logo SVG Component
// Based on the official brand: eye icon (white) with orange diamond, wordmark below
const ParivestraLogo = ({ height = 48 }: { height?: number }) => (
    <svg
        viewBox="0 0 220 40"
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Parivestra Logo"
    >

        {/* Wordmark — प in Devanagari + arivestra in Inter */}
        <text
            x="4"
            y="28"
            fontFamily="'Noto Sans Devanagari', 'Inter', Arial, sans-serif"
            fontWeight="700"
            fontSize="26"
            fill="white"
            letterSpacing="-0.8"
        >
            <tspan fontFamily="'Noto Sans Devanagari', sans-serif">प</tspan>arivestra
        </text>
        {/* underline accent below प */}
        <line x1="4" y1="33" x2="18" y2="33" stroke="#FF4500" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
);

export default ParivestraLogo;
