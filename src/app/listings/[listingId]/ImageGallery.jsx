"use client";
import Image from "next/image";
import { useState } from "react";

const ImageGallery = () => {
  const images = [
    { src: "/1.webp", alt: "Living Room", width: 800, height: 600 },
    { src: "/2.webp", alt: "Exterior", width: 800, height: 600 },
    {
      src: "/3.webp",
      alt: "Living Room and Dining Area",
      width: 800,
      height: 600,
    },
    { src: "/4.webp", alt: "Dining Area", width: 800, height: 600 },
    {
      src: "/5.webp",
      alt: "Dining Area and Living Room",
      width: 800,
      height: 600,
    },
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div className="mb-4">
        <Image
          src={mainImage.src}
          alt={mainImage.alt}
          width={mainImage.width}
          height={mainImage.height}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setMainImage(image)}
            className="cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width / 2}
              height={image.height / 2}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
