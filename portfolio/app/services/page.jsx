"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build fast and responsive web apps using modern frameworks.",
    details:
      "I specialize in React, Next.js, Tailwind CSS, and TypeScript. Let's create something amazing together!",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Creating intuitive and user-friendly designs for applications.",
    details:
      "I use Figma, Adobe XD, and other tools to craft clean and engaging UI/UX experiences.",
  },
  {
    num: "03",
    title: "Database Design",
    description: "Structuring and optimizing databases for performance.",
    details:
      "I work with MongoDB, PostgreSQL, and Firebase to build scalable data structures.",
  },
  {
    num: "04",
    title: "Back-end Development",
    description: "Building powerful APIs and server-side applications.",
    details:
      "I develop robust back-end systems using Node.js, Express, and NestJS.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                      onClick={() => setSelectedService(service)}
                    >
                      <BsArrowDownRight className="text-3xl text-primary" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="bg-[#1a1a1a] border border-[#333] text-accent p-6 rounded-xl shadow-lg">
                    {selectedService && (
                      <>
                        <DialogTitle className="text-2xl font-bold">
                          {selectedService.title}
                        </DialogTitle>
                        <p className="mt-2 text-white">
                          {selectedService.details}
                        </p>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              <p className="text-white/60">{service.description}</p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
