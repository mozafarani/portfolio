import { useState, useEffect } from "react";
import Image from "next/image";

// Array of images (Make sure they exist in /src/images/)
import ProfilePic1 from "../images/bluePP.png";
import ProfilePic2 from "../images/whitePP.png";
import ProfilePic3 from "../images/redPP.png";

const images = [ProfilePic1, ProfilePic2, ProfilePic3]; // Add as many as you want

const ProfileSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[350px] h-[350px] rounded-lg overflow-hidden shadow-lg">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <Image
            src={src}
            alt="Profile"
            width={350} // Force all images to be the same size
            height={350} // Prevent shifting
            className="rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileSlideshow;
