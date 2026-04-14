import React from 'react';

const images = [
    { src: '/carousel/IMG-20251014-WA0055.jpg', alt: 'Event 1' },
    { src: '/carousel/IMG-20251014-WA0060.jpg', alt: 'Event 2' },
    { src: '/carousel/IMG-20251014-WA0075.jpg', alt: 'Event 3' },
    { src: '/carousel/IMG-20251014-WA0078.jpg', alt: 'Event 4' },
    { src: '/carousel/IMG-20251014-WA0080.jpg', alt: 'Event 5' },
    { src: '/carousel/IMG-20251014-WA0088.jpg', alt: 'Event 6' },
    { src: '/carousel/IMG-20251014-WA0121.jpg', alt: 'Event 7' },
    { src: '/carousel/IMG-20251014-WA0126.jpg', alt: 'Event 8' },
    { src: '/carousel/IMG-20251014-WA0130.jpg', alt: 'Event 9' },
    { src: '/carousel/IMG-20251014-WA0133.jpg', alt: 'Event 10' },
    { src: '/carousel/IMG-20251014-WA0147.jpg', alt: 'Event 11' },
    { src: '/carousel/IMG-20251014-WA0152.jpg', alt: 'Event 12' },
    { src: '/carousel/IMG-20251014-WA0155.jpg', alt: 'Event 13' },
    { src: '/carousel/IMG-20251014-WA0158.jpg', alt: 'Event 14' },
    { src: '/carousel/IMG-20251014-WA0161.jpg', alt: 'Event 15' },
    { src: '/carousel/IMG-20251014-WA0165.jpg', alt: 'Event 16' },
    { src: '/carousel/IMG-20251014-WA0169.jpg', alt: 'Event 17' },
    { src: '/carousel/IMG-20251015-WA0014.jpg', alt: 'Event 18' },
    { src: '/carousel/IMG-20251015-WA0019.jpg', alt: 'Event 19' },
    { src: '/carousel/IMG-20251015-WA0029.jpg', alt: 'Event 20' },
];

const ImageCarousel = () => {
    const scrollImages = [...images, ...images, ...images];

    return (
        <div className="w-full overflow-hidden bg-black py-12 border-y border-[var(--pari-border)]">
            <div className="flex animate-scroll hover:pause">
                {scrollImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[400px] h-[240px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden mx-2 rounded-xl"
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-416px * ${images.length})); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: calc(416px * ${scrollImages.length});
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}} />
        </div>
    );
};

export default ImageCarousel;
