import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Music } from "lucide-react";

const ProfileSection = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCatClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <Card className="w-full max-w-md mx-auto p-8 text-center border-2 border-border profile-glow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer">
      <div className="space-y-6">
        {/* Avatar */}
        <div 
          className={`w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center cursor-pointer transition-transform ${
            isAnimating ? "cat-bounce" : ""
          }`}
          onClick={handleCatClick}
        >
          <span className="text-2xl filter grayscale">🐱</span>
        </div>

        {/* Profile Info */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Supriya Verma</h1>
          <p className="text-muted-foreground">Student</p>
          <p className="text-muted-foreground text-sm">19y/o student trying to build better web interfaces taught by the web itself — along with a lot of problem solving.</p>
        </div>

        {/* Now Playing */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Music className="w-4 h-4" />
            <span>now-playing:</span>
          </div>
          <a 
            href="https://open.spotify.com/track/3MF9cjIlg3R9osw3SgRmEb?si=28a6e1a114824f8a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors underline text-sm"
          >
            music is math by boards of canada
          </a>
        </div>

        {/* Contacts */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contacts</h3>
          <div className="space-y-2">
            <a 
              href="mailto:supriya81205@gmail.com"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              supriya81205@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/spr7a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              linkedin.com/in/spr7a
            </a>
            <a 
              href="https://github.com/spr7a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              github.com/spr7a
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection;