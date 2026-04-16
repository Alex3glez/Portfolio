import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          AG<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#about" className="hover:text-white transition-colors">Sobre Mí</Link>
          <Link href="#experience" className="hover:text-white transition-colors">Experiencia</Link>
          <Link href="#projects" className="hover:text-white transition-colors">Proyectos</Link>
        </div>
        <a href="mailto:alejandro.glez.dev@gmail.com">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Contactar
          </button>
        </a>
      </div>
    </nav>
  );
}