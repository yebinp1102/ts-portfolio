import useMediaQuery from "../hooks/useMediaQuery";
import { SelectedPage } from "../types"
import Profile from "../assets/profile.png"
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./SocialMediaIcons";


type Props = {
  setSelectedPagae: (value: SelectedPage) => void;
}

const Intro = ({setSelectedPagae}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const LineShape=`relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
    before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] 
    before:h-full before:border-2 before:border-yellow before:z-[-1]`
  return (
    <section 
      id="intro"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >

      {/* Image section */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveMediumScreens ? (
          <div className={LineShape}>
            <div className={`rounded-t-[400px] w-[400px] h-[500px] bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-end`}>
              <img 
                alt="profile"
                src={Profile}
                className="hover:filter hover:saturate-50 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]"
              />
            </div>
          </div>
        ): (
          <div className={`rounded-t-[400px] w-[400px] h-[500px] bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-col justify-end`}>
            <img 
              alt="profile"
              src={Profile}
              className="hover:filter hover:saturate-50 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]"
            />
          </div>
        )}
      </div>

      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        
        {/* Heading */}
        <motion.div
        
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{ duration: 0.5}}
          variants={{
            hidden: {opacity:0, x: -50},
            visible: {opacity: 1, x:0}
          }}
        >
          <p
            className="text-5xl font-playfair z-10 text-center md:text-start tracking-widest"
          >
            PARK {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
              xs:before:content-brush before:absolute before:-left-[35px] before:-top-[85px] before:z-[-1]
              "
            >
              YEBIN
            </span>
          </p>

          <p className="mt-11 mb-7 text-center md:text-start"> 
            I am looking for a Frontend developer position.
            I have been studying Frontend development and a little bit of Backend development as well.
          </p>

        </motion.div>

        {/* Call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay:0.3, duration: 0.5}}
          variants={{
            hidden: {opacity:0, x: -50},
            visible: {opacity:1, x:0}
          }}
          className="flex mt-10 justify-center md:justify-start"
        >
          <AnchorLink
             className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
             hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPagae(SelectedPage.Contact)}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
             className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPagae(SelectedPage.Contact)}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.6, duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity:1, x:0}
          }}
          className=""
        >
          <SocialMediaIcons />

        </motion.div>

      </div>

    </section>
  )
}

export default Intro