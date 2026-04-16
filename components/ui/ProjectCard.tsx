import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  deployUrl?: string;
}

export function ProjectCard({ title, description, image, tags, githubUrl, deployUrl }: ProjectCardProps) {
  return (
    <Card className="glass-effect border-none overflow-hidden flex flex-col h-full group">
      <div className="relative w-full h-48 overflow-hidden bg-white/5 flex items-center justify-center">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
      </div>
      <CardContent className="p-6 flex-grow relative z-20">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="border-primary/50 text-primary text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-4 relative z-30">
        {/* Cambiado <Link> por <a> estándar para URLs externas */}
        <Button asChild variant="secondary" size="sm" className="flex-1 bg-white/10 hover:bg-white/20 text-white cursor-pointer relative z-50">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-4 h-4 mr-2" /> Código
          </a>
        </Button>
        {deployUrl && (
          <Button asChild size="sm" className="flex-1 cursor-pointer relative z-50">
            <a href={deployUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" /> Deploy
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}