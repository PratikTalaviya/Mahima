import { motion } from "framer-motion";
import InfiniteImageStrips from "../components/InfiniteImageStrips";
import SocialLinks from "../components/SocialLinks";

function QR() {
  const title = ["m", "a", "h", "i", "m", "ā"];
  const text = "architects";
  const letters = text.split("");

  return (
    <motion.div className="h-dvh bg-[#282828] flex flex-col">
      <div className="h-[40dvh] bg-[#282828] w-full flex justify-around items-center flex-col">
        <div className="flex flex-col items-center">
          <motion.div className="flex justify-center text-[20vw] text-[#fff] font-urbanist font-light leading-none">
            {title.map((letter, index) => (
              <motion.span
                key={index}
                className={index >= 4 ? "font-[600]" : ""}
                initial={{
                  translateY: 70,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                }}
                animate={{
                  translateY: 0,
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                }}
                transition={{ delay: index === 0 ? 0.1 : index * 0.2, duration: 1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex justify-end w-full mt-2">
            <motion.div className="font-urbanist text-[6.7vw] leading-[0.01em] text-[#EAE8E2] font-light pr-0.5 opacity-70">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{
                    translateX: -70,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
                  }}
                  animate={{
                    translateX: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
                  }}
                  transition={{ delay: index === 0 ? 1.5 : index * 0.1 + 1.5, duration: 0.25 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-[30dvh] bg-[#282828]">
        <InfiniteImageStrips />
      </div>
      <div className="h-[20dvh] bg-[#282828] flex flex-col justify-center items-center pt-[5dvh]">
        <SocialLinks /> 
        <div className="flex justify-center flex-col items-center my-5 pt-[2dvh]">
          <h1 className="flex justify-center items-center gap-2 text-lg text-[#fff] font-urbanist font-light leading-none">
            ARCHITECTURE 
            <span className="text-[#fff] text-xl font-urbanist font-light leading-none mb-1">|</span> 
            INTERIOR 
            <span className="text-[#fff] text-xl font-urbanist font-light leading-none mb-1">|</span> 
            PLANNING
          </h1>
          <div className="text-base sm:text-sm mt-[1rem] text-[#ffffffde] font-light flex flex-col items-center">
          <div className="flex justify-center items-center gap-2">    
          <a className="sm:hover:text-white text-[0.90rem] sm:text-[1.15rem]" href="tel:+919859819190">
            +91 9879819190
          </a>
          <span className="text-[#ffffffde] text-[0.90rem] sm:text-xl mb-0.5 ">|</span>
          <a className="sm:hover:text-white text-[0.90rem] sm:text-[1.15rem]" href="tel:+919859871371">
            +91 9879871371
          </a>
          </div>
          <a className="sm:hover:text-white" href="mailto:mahimaarchitects.contact@gmail.com?subject=Enquiry%20regarding%20project.">
            mahimaarchitects.contact@gmail.com
          </a>
        </div>
        </div>
      </div>
    </motion.div>
  );
}

export default QR;
