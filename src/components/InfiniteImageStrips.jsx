import { motion } from "framer-motion";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";
import Image9 from "../assets/9.jpg";
import Image10 from "../assets/10.jpg";
import Image11 from "../assets/11.jpg";
import Image12 from "../assets/12.jpg";

const InfiniteImageStrips = () => {
  // Example images - using proper aspect ratios
  const topRowImages = [Image1, Image2, Image3, Image4, Image5];

  const bottomRowImages = [Image6, Image7, Image8, Image9, Image10, Image11, Image12];

  return (
    <div className="w-full h-[30dvh] absolute bg-[#282828]   overflow-hidden">
      {/* Top Strip - 60% height - Left to Right */}
      <div className="h-[55%] relative overflow-hidden">
        <motion.div
          className="flex absolute top-0 left-0 h-full"
          animate={{ x: [0, -2500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 200,
              ease: "linear",
            },
          }}
        >
          {/* First set */}
          {topRowImages.map((src, index) => (
            <div key={`top-1-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Building ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {topRowImages.map((src, index) => (
            <div key={`top-2-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Building ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Third set for seamless loop */}
          {topRowImages.map((src, index) => (
            <div key={`top-3-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Building ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
          {topRowImages.map((src, index) => (
            <div key={`top-4-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Building ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}

          {topRowImages.map((src, index) => (
            <div key={`top-5-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Building ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Strip - 40% height - Right to Left */}
      <div className="h-[45%] relative overflow-hidden">
        <motion.div
          className="flex absolute top-0 left-0 h-full"
          animate={{ x: [-3000, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 200,
              ease: "linear",
            },
          }}
        >
          {/* First set */}
          {bottomRowImages.map((src, index) => (
            <div key={`bottom-1-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Architecture ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}
          {/* Second set for seamless loop */}
          {bottomRowImages.map((src, index) => (
            <div key={`bottom-2-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Architecture ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}
          {/* Third set for seamless loop */}
          {bottomRowImages.map((src, index) => (
            <div key={`bottom-3-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Architecture ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}

          {bottomRowImages.map((src, index) => (
            <div key={`bottom-4-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Architecture ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}
          {bottomRowImages.map((src, index) => (
            <div key={`bottom-5-${index}`} className="flex-shrink-0 h-full">
              <img src={src} alt={`Architecture ${index}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteImageStrips;
