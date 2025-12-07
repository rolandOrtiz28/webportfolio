import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Cpu, Users } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skills = {
    "Frontend Development": [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Vite",
    ],
    "Backend & Tools": [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Deployment (VPS / Nginx)",
    ],
  };

  const highlights = [
    {
      icon: Code,
      title: "Clean & Scalable Code",
      description:
        "Building modern, maintainable applications with clean architecture and best practices.",
    },
    {
      icon: Globe,
      title: "Responsive Web Design",
      description:
        "Creating fast, mobile-friendly, and visually appealing user interfaces.",
    },
    {
      icon: Cpu,
      title: "Full-Stack Development",
      description:
        "Developing both frontend and backend systems that work seamlessly together.",
    },
    {
      icon: Users,
      title: "Client Collaboration",
      description:
        "Turning ideas into fully functioning digital experiences through clear communication.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const cardHoverVariants = {
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const iconHoverVariants = {
    hover: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.6 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    }),
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20 px-6 bg-[#111111]"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/70">
              About Me
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, type: "spring" }}
          >
            I’m a dedicated web developer who builds fast, modern, and user-friendly
            applications. I combine creativity, clean code, and problem-solving to turn
            ideas into real, functional websites.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Journey Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-8 shadow-lg relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                  My Journey
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {[
                    "I started my web development journey driven by curiosity—how websites worked, how apps were built, and how design and logic combine to create real digital experiences.",
                    "As I practiced coding, I began building small projects, then full applications using modern tools like React, Node.js, and MongoDB. Each project strengthened my skills and expanded my creativity.",
                    "Today, I develop fast, responsive, and scalable web platforms. I enjoy solving problems, improving user experience, and creating clean interfaces that feel good to use."
                  ].map((paragraph, i) => (
                    <motion.p
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      variants={paragraphVariants}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.div variants={cardHoverVariants}>
                  <Card className="group bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-6 relative overflow-hidden">

                    <motion.div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                      style={{ boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.1)" }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                      style={{ boxShadow: "0 0 15px rgba(0, 255, 255, 0.2)" }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />

                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-3 bg-accent/10 rounded-lg"
                        variants={iconHoverVariants}
                      >
                        <highlight.icon className="w-6 h-6 text-accent" />
                      </motion.div>

                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-card-foreground">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>

                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 
            className="text-3xl font-semibold mb-8 text-center text-foreground"
            variants={itemVariants}
          >
            Skills & Tools
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div 
                key={category} 
                variants={itemVariants}
                custom={index}
              >
                <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl p-6 h-full">
                  <h4 className="text-xl font-semibold mb-4 text-card-foreground">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        custom={skillIndex}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={badgeVariants}
                      >
                        <Badge
                          className="text-sm bg-gray-800/50 text-accent/80 px-3 py-1.5 rounded-md hover:bg-accent/20 hover:text-accent transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
