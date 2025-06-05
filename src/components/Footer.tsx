import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building } from "lucide-react";

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
  { name: "About Us", url: "#hero" },
  { name: "Solution", url: "#problem-solution" },
  { name: "Features", url: "#features" },
  { name: "Drone Demo", url: "#demo" },
  { name: "Reactions", url: "#testimonials" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-psyc-darkGreen/90 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-psyc-orange/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-psyc-orange/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-psyc-orange/8 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBoNDAgdjQwIEgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDExMSwgMCwgMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-30" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-1"
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

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="font-bold text-lg mb-4 text-gradient">Follow Us</h3>
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

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1"
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

          {/* Contact & Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="font-bold text-lg mb-4 text-gradient">
              Contact & Location
            </h3>
            <div className="space-y-4 text-white/70 text-sm">
              <div className="flex items-start space-x-2">
                <Building className="w-4 h-4 text-psyc-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Registered Office:</p>
                  <p className="leading-relaxed text-xs">
                    C/O T N VISHUKUMAR<br />
                    Lingadahalli Main Road<br />
                    Tarikere, Chickmagalur<br />
                    Karnataka - 577228
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-psyc-orange mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/90 font-medium">Incubated at:</p>
                  <p className="leading-relaxed text-xs">
                    AICDSU Foundation<br />
                    VJPR+WGG, Service Rd<br />
                    Kudlu Main Rd, Srinivasa Nagar<br />
                    Hal Layout, Singasandra<br />
                    Bengaluru, Karnataka - 560068
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <h3 className="font-bold text-lg mb-4 text-gradient">Our Location</h3>
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-psyc-orange/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.3295070137968!2d77.6411235120577!3d12.887260256820102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b023dade9d%3A0x35272e55303bd711!2sDayananda+Sagar+University!5e0!3m2!1sen!2sin!4v1554278492479!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PSYC (Passive Surveillance Yielding Control). All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
