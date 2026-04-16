"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/50 relative z-10 mt-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">¿Hablamos?</h2>
          <div className="flex justify-center gap-6 mb-8">
            <Link href="https://github.com/Alex3glez" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-muted-foreground transition-all border border-white/10">
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/alex3glez/" target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-muted-foreground transition-all border border-white/10">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:alejandro.glez.dev@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary text-muted-foreground transition-all border border-white/10">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Alejandro González. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}