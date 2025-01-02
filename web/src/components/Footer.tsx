import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-padding bg-secondary/50 border-t border-foreground/10">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {[
              { icon: Github, href: "#", label: "Github" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          <div className="text-center text-foreground/60">
            <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;