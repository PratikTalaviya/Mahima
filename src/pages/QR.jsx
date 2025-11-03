import { motion } from "framer-motion";
import InfiniteImageStrips from "../components/InfiniteImageStrips";
import SocialLinks from "../components/SocialLinks";

function QR() {
  const title = ["m", "a", "h", "i", "m", "ā"];
  const text = "architects";
  const letters = text.split("");

  return (
    <motion.div className="h-[100dvh] bg-[#201e1f] flex flex-col">
      <div className="h-[40dvh] bg-[#201e1f] w-full flex justify-around items-center flex-col">
        <div className="flex flex-col items-center">
          <motion.div className="flex justify-center text-[4rem] text-[#fff] font-urbanist font-light leading-none">
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
          <div className="flex justify-end w-full mt-1">
            <motion.div className="font-urbanist text-[1.3rem] leading-[0.001em] text-[#EAE8E2] font-light pr-0.5 opacity-70">
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="h-[30dvh] bg-[#201e1f]">
        <InfiniteImageStrips />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <div className="bg-[#201e1f] flex flex-col justify-center items-center gap-5 pt-8">
        <SocialLinks /> 
        <div className="flex justify-center flex-col items-center">
          <h1 className="flex justify-center font-semibold items-center gap-2 text-sm text-[#fff] font-urbanist font-light leading-none tracking-[0.1em]">
            ARCHITECTURE 
            <span className="text-[#fff] text-lg font-urbanist font-light leading-none">|</span> 
            INTERIOR 
            <span className="text-[#fff] text-lg font-urbanist font-light leading-none">|</span> 
            PLANNING
          </h1>
          <div className="text-base text-[#ffffffde] font-light flex flex-col items-center">
          <div className="flex justify-center items-center gap-2 mt-2 leading-none text-[#EAE8E2]">    
          <a className="sm:hover:text-white text-sm" href="tel:+919859819190">
            +91 9879819190
          </a>
          <span className="text-[#ffffffde] sm:text-lg mb-0.5">|</span>
          <a className="sm:hover:text-white text-sm" href="tel:+919859871371">
            +91 9879871371
          </a>
          </div>
          <a className="sm:hover:text-white text-sm leading-none mt-0" href="mailto:mahimaarchitects.contact@gmail.com?subject=Enquiry%20regarding%20project.">
            mahimaarchitects.contact@gmail.com
          </a>
        </div>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
}

export default QR;
