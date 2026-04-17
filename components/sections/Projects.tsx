"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projectsData = [
  {
    title: "Temotiva",
    description: "Desarrollo profesional Full Stack liderando la migración integral de una arquitectura de HTML puro a React y Next.js. Implementación de backend escalable, optimización de estilos con Tailwind CSS y mejora sustancial en el rendimiento de la plataforma.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    deployUrl: "https://temotiva.com/"
  },
  {
    title: "MatchMaker",
    description: "Plataforma para conectar reclutadores y candidatos usando IA. Evalúa la compatibilidad del CV en PDF con la oferta de trabajo mediante Google Gemini, devolviendo un 'Match Score' y plan de acción.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Supabase", "Gemini API"],
    githubUrl: "https://github.com/Alex3glez/match-maker",
    deployUrl: "https://match-maker-e6sj.onrender.com/"
  },
  {
    title: "4Giifts",
    description: "Aplicación Web para proponer regalos personalizados con IA. Permite registrar contactos y compartir listas de favoritos. Autenticación segura y bases de datos relacionales.",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Python", "SQLAlchemy", "JWT", "Google APIs"],
    githubUrl: "https://github.com/HA-HA-Team/Final_Project-4Giifts",
    deployUrl: "https://final-project-4giifts.onrender.com/"
  },
  {
    title: "RENO USA",
    description: "Aplicación Web orientada a la administración, gestión y seguimiento integral de obras de construcción. Desarrollo robusto de frontend e integración de APIs REST.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/IgrowkerTraining/i006-reno-usa-fullstack",
    deployUrl: "https://reno-usa-frontend.onrender.com/"
  },
  {
    title: "Prueba Técnica (Vanilla JS)",
    description: "Conjunto de 4 ejercicios interactivos: Generador de contraseñas con evaluación de seguridad, consumo de API con paginación, calculadora y herramienta de dibujo interactiva.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript Vanilla", "Vitest", "p5.js"],
    githubUrl: "https://github.com/Alex3glez/prueba-t-cnica-alejandro",
    deployUrl: "https://prueba-t-cnica-alejandro.onrender.com/ejercicio1/index.html"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic tracking-tight">Proyectos Destacados</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}