'use client'
import {useRef, useEffect, useState} from "react";
import { twMerge } from "tailwind-merge";
import { FiMail, FiMapPin } from "react-icons/fi";
import { MotionProps, motion, useInView } from "framer-motion";
import Image from "next/image";
import { RiEthFill } from "react-icons/ri";

export default function BentoFooter () {
    const ref = useRef(null) 
    const isInView = useInView(ref)

  return (
    <div className=" bg-zinc-900 px-4 py-12 text-zinc-50">
        <div className='flex justify-center pb-6'>
            <Image src="/images/skymarklogo.png" alt="Skymark" height={30} width={200}/>
        </div>
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.0 }}
            className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
            <LocationBlock location={"San Luis Obispo"}/>
            <EmailListBlock />
        </motion.div>
        <Footer />
    </div>
  );
};

// export default function BentoFooter () {
//     const ref = useRef(null) 
//     const isInView = useInView(ref, {once: true})

//   return (
//     <div className=" bg-zinc-900 px-4 py-12 text-zinc-50">
//         <Image src="/images/skymarklogo.png" alt="Skymark" height={32} width={32}/>
//         <motion.div
//             initial="initial"
//             animate="animate"
//             transition={{
//             staggerChildren: 0.05,
//             }}
//             className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
//         >
//             <LocationBlock location={"San Luis Obispo"}/>
//             <EmailListBlock />
//         </motion.div>
//         <Footer />
//     </div>
//   );
// };


type BlockProps = {
  className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const EmailListBlock = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Here you can send the email to your backend service or perform any other action
      console.log("Email submitted:", email);
      setEmail(""); // Clear the input after submission
    }
  
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    }

    return (
        <Block className="col-span-12 md:col-span-9">
        <p className="mb-3 text-lg">Join the mailing list</p>
        <form
        onSubmit={handleSubmit}
          className="flex items-center gap-2"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
          />
          <button
            type="submit"
            className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
          >
            <FiMail /> Join the list
          </button>
        </form>
      </Block>
    )
};

const LocationBlock = ({location} :  {location: string }) => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
    <p className="text-center text-lg text-zinc-400">{location}</p>
  </Block>
);


const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
       Skymark Systems &copy; 2024 
      </p>
    </footer>
  );
};