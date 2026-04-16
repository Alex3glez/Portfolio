"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techCategories = [
  {
    title: "Frontend",
    skills: ["React 18+", "Next.js 14+", "TypeScript", "Tailwind CSS", "Shadcn UI", "Framer Motion", "HTML5", "CSS3", "JavaScript (ES6+)"]
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Python", "Flask", "PostgreSQL", "SQLAlchemy", "Supabase", "Prisma", "REST APIs", "JWT"]
  },
  {
    title: "Herramientas & IA",
    skills: ["Google Gemini API", "Git", "GitHub", "Docker", "Vercel", "Render", "VS Code", "Scrum", "Vitest"]
  }
];

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stack Técnico</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Animación flotante constante en el contenedor de la tarjeta */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx }}
                className="h-full"
              >
                <Card className="glass-effect h-full border-white/5 relative overflow-hidden group">
                  {/* Gradiente de hover interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-8 text-center tracking-wide">{category.title}</h3>
                    
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-3 justify-center"
                    >
                      {category.skills.map((skill, sIdx) => (
                        <motion.div key={sIdx} variants={badgeVariants}>
                          <Badge 
                            variant="secondary" 
                            className="bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-300 border border-white/10 hover:border-primary/50 px-4 py-1.5 transition-all cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}