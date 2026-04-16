"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Floating Orbs */}
      <motion.div 
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[150px] -z-10 pointer-events-none" 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Lado Izquierdo: Texto Original */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-3xl text-center md:text-left"
          >
            <motion.h2 variants={itemVariants} className="text-primary font-medium tracking-wider mb-4 text-sm md:text-base">
              HOLA, SOY ALEJANDRO GONZÁLEZ
            </motion.h2>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Full Stack Developer. <br />
              <span className="text-muted-foreground bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
                AI & Deep Learning Student.
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Ready to code. Ready to learn. Defino mi perfil por la capacidad de aprendizaje y adaptación para resolver problemas complejos y construir software robusto.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <Button asChild size="lg" className="rounded-full shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-shadow">
                <Link href="#projects">Ver Proyectos</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full glass-effect hover:bg-white/10 text-white">
                <Link href="mailto:alejandro.glez.dev@gmail.com">Contactar</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center md:justify-start gap-6">
              <Link href="https://github.com/Alex3glez" target="_blank" className="text-muted-foreground hover:text-white hover:scale-110 transition-all">
                <FaGithub className="w-7 h-7" />
              </Link>
              <Link href="https://www.linkedin.com/in/alex3glez/" target="_blank" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                <FaLinkedin className="w-7 h-7" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Lado Derecho: Imagen de Perfil Simplificada */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80">
              {/* Brillo sutil de fondo */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] pointer-events-none" />
              
              {/* Contenedor circular */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 glass-effect">
                <Image 
                  src="/perfil.jpg" 
                  alt="Alejandro González" 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}