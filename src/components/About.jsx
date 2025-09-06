import "./About.css";
import { motion } from "motion/react";

const textVariants = {
  initial: { x: -60, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.08 },
  },
};

export default function About() {
  return (
    <section className="about">

      <motion.div
        className="marquee"
        initial={{ x: 0 }}
        animate={{ x: "-220%" }}
        transition={{ duration: 15, ease:"linear", repeat: Infinity, repeatType: "mirror" }}
      >
        Computer Engineer and Computer Science
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-text"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}>
            
          <motion.h2 className="about-name" variants={textVariants}>
            Liu von Engelbrechten
          </motion.h2>

          <motion.h1 className="about-body">
            I am a third-year at Northeastern University from Cleveland, Ohio. 
            I'm passionate about robotics and building systems that bridge software and hardware together. <br /> <br />

            In my free time, I love hiking, playing tennis, and going out to try new foods. <br /> <br />

            Please feel free to check out my page!
          </motion.h1>

        </motion.div>

        <motion.div
          className="about-effects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/img/imghome/portfolio_no_background.png"
            alt="Portrait"
          />
        </motion.div>
      </div>
    </section>
  );
}
