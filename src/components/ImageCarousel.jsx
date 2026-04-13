import React from 'react';

const images = [
    { src: '/carousel/tech.png', alt: 'Technology' },
    { src: '/carousel/logistics.png', alt: 'Logistics' },
    { src: '/carousel/architecture.png', alt: 'Architecture' },
    { src: '/carousel/team.png', alt: 'Team' },
    { src: '/carousel/abstract.png', alt: 'Abstract' },
];

const ImageCarousel = () => {
    // Triple the images to ensure seamless infinite scroll
    const scrollImages = [...images, ...images, ...images];

    return (
        <div className="w-full overflow-hidden bg-black py-10 border-y border-[var(--pari-border)]">
            <div className="flex animate-scroll hover:pause">
                {scrollImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[300px] h-[200px] grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
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
          100% { transform: translateX(calc(-300px * ${images.length})); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: calc(300px * ${scrollImages.length});
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}} />
        </div>
    );
};

export default ImageCarousel;
