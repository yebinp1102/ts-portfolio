import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import { useForm } from "react-hook-form";
import React from "react";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      // If form data is not validated, doesn't go to next page
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-48">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            CONTACT <span className="text-yellow">ME</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* Form & Image */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="src/assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={handleSubmit}
            action="https://formsubmit.co/be50e7e79890c3ce7a6e8f57cb1fa07a"
            method="POST"
          >

            {/* name */}
            <input 
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            {/* email */}
            <input 
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // validate email pattern
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "This is invalid email address."}
              </p>
            )}

            {/* message */}
            <textarea 
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              placeholder="Message"
              rows={4}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                hover:text-white transition duration-500
              "
            >
              Send me a message
            </button>
          </form>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;
