import { motion } from "framer-motion";
import LineGradient from "./LineGradient";

type Props = {};

const AboutMe = (props: Props) => {
  const AboutMeStyle = `mx-auto relative max-w-[400px] h-[350px] flex flex-col
    justify-end p-16 mt-48 before:absolute before:left-[35%] before:border-2
    before:w-[120px] before:h-[120px] before:bg-white before:-top-[15%] before:rounded-full
    before:left-1/2  
  `;

  return (
    <section id="aboutme" className="pt-32 pb-16">

      {/* Heading */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          ABOUT <span className="text-red">ME</span>
        </p>
        <LineGradient width="mx-auto w-2/4" />
        <p className="mt-10">Random Text</p>
      </motion.div>

      {/* Description section */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className={`bg-blue ${AboutMeStyle}`}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Random Text Random Text Random Text Random Text
            Random Text
          </p>
        </motion.div>

        <motion.div
          className={`bg-red ${AboutMeStyle}`}
          initial="hidden"
          whileInView="visible"
          transition={{delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Random Text Random Text Random Text Random Text
            Random Text
          </p>
        </motion.div>

        <motion.div
          className={`bg-yellow ${AboutMeStyle}`}
          initial="hidden"
          whileInView="visible"
          transition={{delay: 0.4, duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Random Text Random Text Random Text Random Text
            Random Text
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
