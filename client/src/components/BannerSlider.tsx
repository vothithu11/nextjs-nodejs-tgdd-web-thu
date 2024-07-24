'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function BannerSlider() {
    const [startIndex, setStartIndex] = useState(0);
    const images = ['/image/banner1.png', '/image/banner2.png', '/image/banner3.png', '/image/banner4.png'];

    const prevImage = () => {
        setStartIndex((prevIndex) => (prevIndex === 0 ? images.length - 2 : prevIndex - 2));
    };

    const nextImage = () => {
        setStartIndex((prevIndex) => (prevIndex === images.length - 2 ? 0 : prevIndex + 2));
    };

    return (
        <div className="w-full center pb-3 space-x-2 -mb-14 max-lg:-mb-10">
            <div className="w-10 h-10 p-3 rounded-full bg-slate-200 center" onClick={prevImage}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className="grid grid-cols-2 space-x-2">
                {images.slice(startIndex, startIndex + 2).map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt="banner"
                        width={540}
                        className="rounded"
                        initial={{ opacity: 1, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: index % 2 === 0 ? '100vw' : '-100vw' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                    />
                ))}
            </div>
            <div className="w-10 h-10 p-3 rounded-full bg-slate-200 center" onClick={nextImage}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    );
}

export default BannerSlider;
