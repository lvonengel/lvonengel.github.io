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
        animate={{ x: "-105%" }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        Computer Engineer and Computer Science
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-text"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="about-name" variants={textVariants}>
            Liu von Engelbrechten
          </motion.h2>

          <motion.h1 className="about-body">
            I'm a Computer Engineer and Computer Science student with a passion
            for hands on design and solving real world problems through
            innovation.
            <br /> <br />
            Ever since I built my first gaming PC in middle school, I've loved
            creating products that blend software and hardware into something
            people use. I focus particularly on product development and
            robotics.
            <br /> <br />
            Please check out my page and feel free to reach out!
          </motion.h1>
        </motion.div>

        <motion.div
          className="about-effects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="/img/Home/HeadshotNoBackground.jpg" alt="Portrait" />
        </motion.div>
      </div>
    </section>
  );
}
