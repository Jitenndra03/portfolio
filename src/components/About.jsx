
import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center px-6">
          <img className="rounded-2xl w-full max-w-sm" src={aboutImg} alt="about" />
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6 px-6">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
