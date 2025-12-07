import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram, Youtube, Phone, MapPin } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "rolandortiz281995@gmail.com",
      href: "mailto:rolandortiz281995@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+855 96 634 6090",
      href: "tel:+855966346090",
    },
    {
      icon: MapPin,
      label: "Based In",
      value: "Phnom Peng, Cambodia",
      href: "https://maps.app.goo.gl/Zeug1Y9cT8Z2TApF6",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "@rolandortiz",
      url: "https://www.linkedin.com/in/rolandortiz2826", // Replace with your LinkedIn URL
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@rolandportiz",
      url: "https://www.instagram.com/rolandportiz/", // Replace with your Instagram URL
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  
  const hoverVariants = {
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 15 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-20 px-6 bg-[#111111] overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/70">
              Let's Create Together
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to bring your video project to life? I'd love to hear your
            ideas and explore how we can collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-8 shadow-2xl h-full">
              <h3 className="text-2xl font-semibold mb-8 text-card-foreground">
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <motion.a
                    key={index}
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/50 group-hover:border-accent/70 transition-colors duration-300">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <detail.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                        <p className="text-base font-semibold text-card-foreground">{detail.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="group flex items-center gap-4 p-4 h-full rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:border-accent/70 transition-colors duration-300">
                      <link.icon className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
                      <div className="text-left">
                        <p className="font-semibold text-card-foreground">{link.name}</p>
                        <p className="text-sm text-muted-foreground">{link.handle}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-8 shadow-2xl text-center">
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                Availability
              </h3>
              <p className="text-muted-foreground">
                Open for new projects & collaborations.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 font-medium">Available Now</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;