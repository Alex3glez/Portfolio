"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Desarrollador Full-Stack",
    company: "Temotiva Innovación Lab",
    date: "2026 - Presente",
    description: "Desarrollo de interfaces front-end y diseño de APIs RESTful escalables. Colaboración en metodologías ágiles con entregas en sprints semanales.",
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Desarrollador Front-End",
    company: "Igrowker",
    date: "2026 - 2026",
    description: "Desarrollo de interfaces responsivas y optimizadas con React, TypeScript y Tailwind CSS. Implementación de APIs y participación en la integración completa del proyecto RENO USA.",
    icon: <Briefcase className="w-5 h-5" />
  }
];

const education = [
  {
    title: "Máster de Desarrollo con IA",
    company: "BIG school / Universidad Isabel I",
    date: "2025 - Presente",
    description: "Formación avanzada en integración de Inteligencia Artificial y Deep Learning en aplicaciones modernas.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "Técnico Superior en DAW",
    company: "IES José Planes",
    date: "2025 - Presente",
    description: "Desarrollo de Aplicaciones Web. Formación técnica oficial en diseño, desarrollo y despliegue web.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "Full-Stack Software Developer",
    company: "4Geeks Academy",
    date: "2025",
    description: "Bootcamp intensivo. Desarrollo de proyectos completos con React, Python, Flask y SQL.",
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "Grado en Fisioterapia",
    company: "Universidad de Murcia",
    date: "2020 - 2024",
    description: "Base académica inicial donde desarrollé capacidades analíticas y resolución de problemas complejos antes de mi transición al software.",
    icon: <GraduationCap className="w-5 h-5" />
  }
];

export function Timeline() {
  const columnVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-white/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trayectoria</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Columna de Experiencia */}
          <motion.div 
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experiencia Laboral</h3>
            </div>

            <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-12">
              {experience.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary z-10" />
                  <div className="glass-effect p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group">
                    <Badge variant="outline" className="mb-3 border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                      {item.date}
                    </Badge>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <span className="text-sm font-medium text-muted-foreground block mb-4">{item.company}</span>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna de Educación */}
          <motion.div 
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Educación y Formación</h3>
            </div>

            <div className="relative border-l-2 border-primary/20 ml-4 pl-8 space-y-12">
              {education.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-4 border-primary z-10" />
                  <div className="glass-effect p-6 rounded-xl hover:border-primary/30 transition-all duration-300 group">
                    <Badge variant="outline" className="mb-3 border-primary/20 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                      {item.date}
                    </Badge>
                    <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                    <span className="text-sm font-medium text-muted-foreground block mb-4">{item.company}</span>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}