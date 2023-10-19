import { motion } from "framer-motion"
import LineGradient from "./LineGradient"
import Project from "./Project"

const container = {
  hideen: {},
  visible: {
    transition: {staggerChildren: 0.2} // animation will happen to each children 0.2 gap between
  }
}

const Projects = () => {
  return (
    <section id="projects" className="py-48">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity:0, x: -50},
          visible: {opacity:1, x: 0}
        }}
        className="md:w-2/5 mx-auto text-center"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-red">PROJECTS</span>
          </p>
  
          <div className="flex justify-center mt-5">  {/* center the line gradient */}
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="my-10">
          Random text
        </p>
       
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={container}
          className="sm:grid sm:grid-cols-3"
        >
          {/* Row 1 */}
          <div
            className="bg-red max-w-[400px] mx-h-[400px] text-2xl font-playfair font-semibold
              flex justify-center text-center items-center p-10"
          >
            Beautiful user interface
          </div>
          <Project title="Project 1" subtitle="Random text" />
          <Project title="Project 2" subtitle="Random text" />

          {/* Row 2 */}
          <Project title="Project 3" subtitle="Random text" />
          <Project title="Project 4" subtitle="Random text" />
          <Project title="Project 5" subtitle="Random text" />

          {/* Row 3 */}
          <Project title="Project 6" subtitle="Random text" />
          <Project title="Project 7" subtitle="Random text" />
          <div
            className="bg-blue max-w-[400px] mx-h-[400px] text-2xl font-playfair font-semibold
            flex justify-center text-center items-center p-10"
          >
            Smooth user experience
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Projects