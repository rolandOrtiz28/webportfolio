import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProjectsSection = () => {
  // Your existing web projects (unchanged)
  const webProjects = [
    // {
    //   title: "The Liquor Store",
    //   description:
    //     "A New York-based online liquor store offering wines, spirits, accessories, and same-day delivery with full age-verification compliance.",
    //   tech: "React, Node.js, MongoDB, Tailwind CSS",
    //   previewImage:
    //     "https://res.cloudinary.com/rolandortiz/image/upload/v1747190155/editedge/Screenshot_78_rtwdyi.png",
    //   link: "https://theliquorstore.editedgemultimedia.com/",
    // },
    {
      title: "E-Book Store",
      description:
        "This is a professional e-publishing and personal brand website dedicated to the work of Nadine Paula Yu. The platform serves as a central hub for her audience, featuring a seamless e-commerce Shop for purchasing digital books and e-books, and a Blog & Insights section for sharing stories, tips, and reflections on writing and the creative process. Key functionality includes a fully integrated Admin Dashboard for managing e-books, blogs, orders, and users, a user-specific My Dashboard for tracking purchases and downloads, and a comprehensive 'Get In Touch' page for business inquiries and collaborations. The site is designed to empower others through purposeful storytelling and strategic content.",
      tech: "React, Node.js, MongoDB, Stripe, Tailwind CSS",
      previewImage:
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083729/Screenshot_6_ww7jpd.png",
      link: "https://store.nadinepaulayu.com/",
    },
    {
      title: "Mindful Balance: Emotional Wellness & Therapy Platform",
      description:
        "A specialized website for Mindful Balance, offering evidence-based hypnotherapy and counseling services focused on achieving emotional balance and freedom. The site clearly outlines the services provided, including Clinical Hypnotherapy, Counseling & Psychotherapy, Stress & Anxiety Management, and Trauma Recovery. It features clear calls-to-action to book a Free Consultation, displays client testimonials, and provides an overview of the approach and professional experience. It is designed to be an accessible digital hub for prospective clients seeking long-term emotional and mental transformation.",
      tech: "React, Node.js, MongoDB, Stripe, Tailwind CSS",
      previewImage:
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765084099/Screenshot_8_sivfp1.png",
      link: "https://mindfullbalancesg.com/",
    },
    {
      title: "EcoLogic Solutions NYC",
      description:
        "An e-commerce platform specializing in sustainable packaging and eco-friendly products. The site focuses on custom retail solutions, including premium eco-friendly tote bags and sustainable packaging collections, designed to help businesses transition to environmentally responsible practices. The platform showcases product collections, offers customer testimonials, and provides educational content on sustainable solutions.",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      previewImage:
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765084294/Screenshot_9_mmodic.png",
      link: "https://ecologicsolutions.nyc/",
    },
    // {
    //   title: "Spirit Shop Deluxe",
    //   description:
    //     "A modern online liquor marketplace with advanced filtering, secure checkout, curated product collections, and local delivery options.",
    //   tech: "React, Node.js, MongoDB, Tailwind CSS",
    //   previewImage:
    //     "https://res.cloudinary.com/rolandortiz/image/upload/v1746207548/editedge/Screenshot_77_wf3oal.png",
    //   link: "https://spiritshopdeluxe.editedgemultimedia.com/",
    // },
    
    // {
    //   title: "Iron Edge",
    //   description:
    //     "A performance supplement brand website featuring sports nutrition products with a responsive UI and secure e-commerce functions.",
    //   tech: "React, Node.js, MongoDB, Tailwind CSS, Stripe",
    //   previewImage:
    //     "https://res.cloudinary.com/rolandortiz/image/upload/v1743991963/editedge/IronEdge_afvz7a.png",
    //   link: "https://ironedge.editedgemultimedia.com/",
    // },
   
    
  ];

  // Mobile App Projects - now with normal card height
  const appProjects = [
    {
      title: "CRM and Inventory Tracking",
      description: "Private crm and inventory tracking app with real-time collaboration, and advanced analytics dashboard, Live Delivery Tracking, AI integration.",
      tech: "React Native, Tailwind, Node.js, MongoDB, Express",
      previewImage: "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Dashboard_momnya.png",
      screenshots: [
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Dashboard_momnya.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Login_ivxx8l.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Live_Tracking_hrd7hg.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081138/bagstory/Alerts_ixzlzf.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Reports_ncfixc.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Inventory_hmeiff.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081137/bagstory/Shipping_fasyt9.png",
      ],
    },
    {
      title: "Medical Equipments Inventory Tracking & Client Management",
      description: "This project is a full-stack Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) application developed to manage complex inventory and client operations for a B2B supply business.",
      tech: "React Native, Tailwind, Node.js, MongoDB, Express",
      previewImage: "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081966/Paulamed/Screenshot_1_h7zfwn.png",
      screenshots: [
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081966/Paulamed/Screenshot_2_uqiwii.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081966/Paulamed/Screenshot_4_dcf8av.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081966/Paulamed/Screenshot_1_h7zfwn.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081965/Paulamed/Screenshot_5_sgtdlw.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765081965/Paulamed/Screenshot_3_fbbf7o.png",
      ],
    },
    {
    "title": "ContentEdge: AI Content Generation & Collaboration Platform",
    "description": "ContentEdge is an AI-powered SaaS platform designed for businesses to streamline content creation, management, and scheduling across various channels. It enables clients to add and manage multiple business profiles, automatically generating high-quality blog articles and social media posts using integrated AI, tailored to specific brand tones, content pillars, and keywords. The platform features a collaborative environment, allowing team members (e.g., Owner, Admin, Editor) to be invited and managed for shared content production. Key features include a detailed Content History, a Content Calendar for scheduling, performance Analytics, and a dashboard providing an overview of content status and schedule.",
    "tech": "React Native, Tailwind, Node.js, MongoDB, Express",
    "previewImage": "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082570/Content/Screenshot_6_eg3dzu.png",
    "screenshots": [
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082570/Content/Screenshot_6_eg3dzu.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082569/Content/Screenshot_5_qvjyhz.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082568/Content/Screenshot_7_f2hun1.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082568/Content/Screenshot_4_dm3n7w.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082566/Content/Screenshot_2_dwwh48.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082566/Content/Screenshot_8_wnipxt.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082565/Content/Screenshot_3_vz0iio.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082565/Content/Screenshot_10_eocwxf.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765082565/Content/Screenshot_9_suk2pe.png"
    ]
},
  {
    "title": "EditEdge CRM: Sales, Lead & Communication Management",
    "description": "EditEdge CRM is an all-in-one sales and communication management platform designed to help businesses track leads, manage contacts, and streamline sales operations. Key features include a Sales Pipeline visualized by a funnel chart, a comprehensive Leads and Contacts manager with list, Kanban, and calendar views, and a dedicated Tasks module for staying on top of the to-do list. Communication is centralized with features for sending individual Emails, Bulk Emails (with template management), Messages, and scheduling Meetings, ensuring efficient team and customer outreach. The Dashboard provides a performance overview of total leads, contacts, open deals, and revenue.",
    "tech": "React Native, Tailwind, Node.js, MongoDB, Express",
    "previewImage": "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083348/CRM/Screenshot_1_yu0ada.png",
    "screenshots": [
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083351/CRM/Screenshot_11_uyswly.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083350/CRM/Screenshot_5_zbeug5.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083349/CRM/Screenshot_2_hnc8cj.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083349/CRM/Screenshot_4_hrawy4.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083349/CRM/Screenshot_3_gggrwa.png",
        "https://res.cloudinary.com/dbzuuuvue/image/upload/v1765083348/CRM/Screenshot_1_yu0ada.png",
    ]
}
  ];

  const [selectedWebProject, setSelectedWebProject] = useState(null);
  const [selectedAppProject, setSelectedAppProject] = useState(null);

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-[#111111] relative overflow-hidden" ref={sectionRef}>
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Web Projects - unchanged */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/70">
                Web Development Projects
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Full-stack websites and e-commerce platforms built with the MERN stack.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {webProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-accent/10 transition-all duration-300 group flex flex-col cursor-pointer"
                  onClick={() => setSelectedWebProject(project)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img src={project.previewImage} alt={project.title} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.split(", ").map((tool, i) => (
                        <span key={i} className="text-xs bg-gray-800/50 text-accent/80 px-2 py-1 rounded">{tool}</span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile App Projects - NOW SAME HEIGHT */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={sectionInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                App Projects
              </span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Private client apps built with React Native
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appProjects.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800/50 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group flex flex-col cursor-pointer"
                  onClick={() => setSelectedAppProject(app)}
                >
                  <div className="aspect-video relative overflow-hidden bg-gray-900">
                    <img
                      src={app.previewImage}
                      alt={app.title}
                      className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-70"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-medium">Click for screenshots →</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {app.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {app.tech.split(", ").map((tool, i) => (
                        <span key={i} className="text-xs bg-gray-800/50 text-purple-400/80 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Project Modal - unchanged */}
      <AnimatePresence>
        {selectedWebProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedWebProject(null)} className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedWebProject(null)} className="absolute -top-3 -right-3 bg-white text-black rounded-full p-1.5 z-10 hover:scale-110 transition-transform">
                <X className="w-6 h-6" />
              </button>
              <img src={selectedWebProject.previewImage} alt={selectedWebProject.title} className="w-full rounded-lg shadow-2xl" />
              <div className="mt-4 p-4 text-white text-center">
                <h3 className="text-2xl font-bold">{selectedWebProject.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{selectedWebProject.description}</p>
                <a href={selectedWebProject.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-6 py-3 rounded bg-accent hover:bg-accent/80 text-black font-semibold">
                  Visit Live Site
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Project Carousel Modal - FIXED WITH VISIBLE ARROWS */}
<AnimatePresence>
  {selectedAppProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedAppProject(null)}
      className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedAppProject(null)}
          className="absolute top-4 right-4 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-3 transition-all hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Carousel with Properly Styled Arrows */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {selectedAppProject.screenshots.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="flex aspect-video items-center justify-center bg-black">
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="max-h-screen w-auto max-w-full object-contain rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Styled Previous Button */}
            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 text-black hover:bg-white/40 hover:scale-110 transition-all" />

            {/* Custom Styled Next Button */}
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 text-black hover:bg-white/40 hover:scale-110 transition-all" />
          </Carousel>

          {/* Optional: Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {selectedAppProject.screenshots.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-white/50 data-[active=true]:bg-white transition-all"
              />
            ))}
          </div>
        </div>

        {/* Project Info Below */}
        <div className="p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            {selectedAppProject.title}
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
            {selectedAppProject.description}
          </p>
          <p className="text-sm text-gray-500">
            Tech: {selectedAppProject.tech}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
};

export default ProjectsSection;