import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { LayoutTextFlip } from "./ui/layout-text-flip";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 dark:bg-black-200/50 backdrop-blur-md p-8 md:p-12 w-full mx-auto overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <h1 className="heading lg:max-w-[45vw] flex flex-col items-center justify-center gap-4 relative z-10">
          <span>Ready to strengthen <span className="text-purple">your</span></span>
          <LayoutTextFlip
            text=""
            words={["security posture", "threat detection", "network defenses", "incident response"]}
            className="text-3xl sm:text-4xl md:text-5xl font-bold px-2 text-purple"
          />
          <span>and stay ahead of threats?</span>
        </h1>
        <p className="text-white-200 mt-6 md:mt-10 mb-8 max-w-xl text-center relative z-10">
          Reach out today and let&apos;s talk about how I can help detect threats,
          analyze traffic, and secure your systems.
        </p>
        <a href="mailto:vsaidaiwik@gmail.com" className="relative z-10">
          <MagicButton
            title="Drop a Mail"
            icon={<FaEnvelope />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-6 px-4 md:px-12">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          Copyright © 2026{" "}
          <a
            href="https://github.com/SaiDaiwikV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple font-semibold hover:text-purple/80 transition-colors"
          >
            V Sai Daiwik
          </a>
        </p>

        <div className="flex items-center justify-center gap-4">
          <p className="md:text-base text-sm md:font-normal font-light">Find me on</p>
          <Link href="https://github.com/SaiDaiwikV" target="_blank" rel="noopener noreferrer">
            <button className="px-5 py-2 rounded-full border border-white/20 bg-black-200/50 text-purple font-semibold hover:text-purple/80 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2 backdrop-blur-sm shadow-md">
              <FaGithub /> GitHub
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/vontimitta-saidaiwik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <button className="w-10 h-10 rounded-full border border-white/20 bg-black-200/50 text-purple hover:text-purple/80 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm shadow-md">
              <FaLinkedinIn />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
