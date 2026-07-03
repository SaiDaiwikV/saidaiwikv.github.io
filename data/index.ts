export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Coding", link: "#code" },
    { name: "Work Experience", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  export const gridItems = [
    {
      id: 1,
      title: "I bring a security-first mindset to every system I touch ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Based in India, open to remote security roles worldwide",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Cybersecurity enthusiast with a passion for threat detection.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },

    {
      id: 5,
      title: "Currently sharpening my skills through TryHackMe SOC labs & CTFs",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to build something secure together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  export const projects = [
    {
      id: 1,
      title: "Network Intrusion Detection System (NIDS)",
      des: "Real-time NIDS built with Python, Snort 3 and Wireshark — a custom streaming engine detects port scans, brute-force, ping sweeps and web intrusions, cross-validated against native Snort rules.",
      img: "/nids.svg",
      iconLists: ["/ic-network.svg", "/ic-shield.svg", "/ic-terminal.svg"],
      link: "https://github.com/SaiDaiwikV/Network-Intrusion-Detection-System",
    },
    {
      id: 2,
      title: "Simple Password Manager",
      des: "A secure Tkinter GUI password manager in Python — SHA-512 salted master auth, PBKDF2 key derivation and an AES/Fernet-encrypted vault with auto-lock and encrypted backups.",
      img: "/password-manager.svg",
      iconLists: ["/ic-lock.svg", "/ic-key.svg", "/ic-shield.svg"],
      link: "https://github.com/SaiDaiwikV/Simple-password-manager",
    },
    {
      id: 3,
      title: "Text-Encryption-Suite",
      des: "A CLI cryptography toolkit implementing 10+ classical and modern ciphers — Caesar, Vigenère, AES, DES, Blowfish, RSA and Fernet — for hands-on encryption learning.",
      img: "/encryption.svg",
      iconLists: ["/ic-cipher.svg", "/ic-lock.svg", "/ic-key.svg"],
      link: "https://github.com/SaiDaiwikV/Text-Encryption-Suite",
    },
  ];

  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];

  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];

  export const workExperience = [
    {
      id: 1,
      title: "Cyber Security Analyst — Adyapan Edutech Pvt. Ltd.",
      desc: "Monitored company web assets through the Wazuh SIEM, authored Snort rules to automate network-traffic analysis, and contributed to website hardening and security enhancements. (Mar 2025 – Jun 2025)",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Cyber Security Analyst (Training) — TryHackMe",
      desc: "Performed packet analysis in Wireshark across 500+ packets, simulated SOC workflows (alert triage, investigation, escalation), and ran vulnerability assessments with Nmap in hands-on SOC labs. (Jan 2025 – Present)",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/SaiDaiwikV",
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/vontimitta-saidaiwik",
    },
  ];

  export const codingProfiles = [
    {
      id: 1,
      name: "LeetCode",
      url: "https://leetcode.com/u/SaiDaiwik/",
      image: "/leetcode.svg",
      description: "Solved 144 problems and earned the 50-Day Badge for consistent daily practice.",
    },
    {
      id: 2,
      name: "TryHackMe",
      url: "https://tryhackme.com/p/saidaiwik",
      image: "/tryhackme.svg",
      description: "Completed 70+ hands-on rooms, earned 12 badges, and reached a global rank of #145,647.",
    },
    {
      id: 3,
      name: "Monkeytype",
      url: "https://monkeytype.com/profile/SaiDaiwik",
      image: "/monkeytype.svg",
      description: "84 WPM average (120s), 75 WPM on 100 words, across 800+ completed typing tests.",
    },
  ];
