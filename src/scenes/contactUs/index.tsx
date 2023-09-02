import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-3/5 bg-white text-black px-5 py-3 placeholder-black`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto h-3/4 flex items-center justify-center pt-24 pb-32 bg-[#E5C643]">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div
          className="basis-1/2 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-white text-4xl">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</span> 
          </HText>
          <p className="my-5 text-white">
            Type your email down below and be young wild generation
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-center gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="flex justify-center"
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/1671b67b70b11931d4c4b0eb69e6dfde"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <button
                type="submit"
                className="rounded-md bg-black text-white px-10 py-2 hover:bg-gray-200 hover:text-black "
              >
                Send
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;