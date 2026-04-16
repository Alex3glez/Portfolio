"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Code2, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6 italic">
              "Ready to code. Ready to learn."
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                Defino mi perfil por la <strong className="text-white">capacidad de aprendizaje y adaptación</strong>. Entiendo el desarrollo de software como una disciplina que requiere orden, lógica y actualización permanente.
              </p>
              <p>
                Mi transición desde el Grado en Fisioterapia al desarrollo de software me ha dotado de una perspectiva única. Aplico la misma <strong className="text-white">capacidad analítica, perseverancia y resolución de problemas complejos</strong> que utilizaba en el entorno clínico, ahora enfocadas en construir arquitecturas de código robustas.
              </p>
              <p>
                Actualmente inmerso en una formación intensiva en <strong className="text-white">Inteligencia Artificial y Desarrollo Web</strong>, busco constantemente integrar las últimas tecnologías para crear soluciones eficientes y escalables.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid gap-6"
          >
            <Card className="glass-effect border-none">
              <CardContent className="p-6 flex items-start gap-4">
                <Code2 className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Desarrollo Full Stack</h4>
                  <p className="text-sm text-muted-foreground">Construcción de aplicaciones End-to-End con React, Next.js, Node.js y Python.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-none">
              <CardContent className="p-6 flex items-start gap-4">
                <BrainCircuit className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Integración de IA</h4>
                  <p className="text-sm text-muted-foreground">Implementación de APIs de Google Gemini y herramientas de Deep Learning.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="glass-effect border-none">
              <CardContent className="p-6 flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Aprendizaje Continuo</h4>
                  <p className="text-sm text-muted-foreground">Máster en Desarrollo con IA y Grado Superior en Desarrollo de Aplicaciones Web.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}