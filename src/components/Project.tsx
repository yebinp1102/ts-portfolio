import { motion } from "framer-motion";

type Props = {
  title:string,
  subtitle: string
}

const projectVariant = {
  hidden: {opacity: 0, scale: 0.8},
  visible: {opacity: 1, scale: 1}
}

const Project = ({title, subtitle}: Props) => {
  const projectTitle = title.split(" ").join("-").toLowerCase();

  const overlayStyles = `absolute h-full w-full opacity-0
    hover:opacity-90 transition duration-500 bg-grey z-30 
    flex flex-col justify-center items-center text-center p-16 text-deep-blue
  `

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p>{subtitle}</p>
      </div>
      <img src={`src/assets/${projectTitle}.jpeg`} alt={projectTitle} />
    
    </motion.div>
  )
}

export default Project