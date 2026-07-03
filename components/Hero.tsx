"use client";
import { FaLocationArrow, FaFileAlt } from "react-icons/fa"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const roles = [
  "Cyber Security Analyst",
  "SOC Analyst",
  "Threat Hunter",
  "Network Defender",
  "Penetration Tester",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
            <Spotlight className="-top-28 -left-80 h-[80vh] w-[50vw] " fill="blue" />
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

    </div>
    <div className="flex justify-center relative my-20-z-10">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
            {/* Rotating role badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple/20 bg-purple/[0.05] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-purple/80 font-medium tracking-wide"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Securing Networks and Detecting Threats, One Packet at a Time"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                Hi, I&apos;m Sai Daiwik, a Cyber Security Analyst based in India.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#projects" className="w-full sm:w-auto">
                <MagicButton title="Show my work" icon={<FaLocationArrow />} position='right' />
              </a>
              <a
                href="https://drive.google.com/file/d/1w_RfbUqNUSPOFwgxeZp4SOYUgtAO-CC6/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <MagicButton title="View CV" icon={<FaFileAlt />} position='right' />
              </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
