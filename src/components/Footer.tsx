import React from "react";
import { motion } from "framer-motion";
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/passive-surveillance-yielding-control-psyc/",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@psyc.industries?si=4-AotQTLGb_gC0aa",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/psycdefence?igsh=cGlpdzVjYTV6cWxy&utm_source=qr",
  },
  { name: "X", url: "https://x.com/psycdefence?s=11" },
];
const navLinks = [
  {
    name: "About Us",
    url: "#hero",
  },
  {
    name: "Solution",
    url: "#problem-solution",
  },
  {
    name: "Features",
    url: "#features",
  },
  {
    name: "Drone Demo",
    url: "#demo",
  },
  {
    name: "Reactions",
    url: "#testimonials",
  },
];
const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-psyc-darkGreen/90 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-psyc-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-psyc-orange/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-psyc-orange/8 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/deda9b5b-0e4e-44a9-9c37-904e85806e7c.png"
                alt="PSYC Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/70 mb-4">
              Revolutionizing Surveillance control with precision drone
              technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4 text-gradient">
              Follow Us
            </h3>
            <ul className="space-y-2 text-white/70">
              {socialLinks.map(({ name, url }) => (
                <motion.li
                  key={name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-psyc-orange transition-colors relative group"
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4 text-gradient">Quick Nav</h3>
            <ul className="space-y-2 text-white/70">
              {navLinks.map(({ name, url }) => (
                <motion.li
                  key={name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={url}
                    className="hover:text-psyc-orange transition-colors relative group"
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-psyc-orange group-hover:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PSYC (Passive Surveillance
            Yielding Control). All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
