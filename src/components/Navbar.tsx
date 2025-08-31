import { Button } from "@/components/ui/button";
import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Technology", href: "#technology" },
    { name: "AI Personalities", href: "#personalities" },
    { name: "How It Works", href: "#how-it-works" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-glass border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Bot className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Discord AI Chat
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://discord.com/oauth2/authorize?client_id=1409855867834073279&permissions=40138653572864&integration_type=0&scope=bot+applications.commands"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button variant="default" size="sm">
                <Bot className="w-4 h-4 mr-2" />
                Add to Discord
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://discord.com/oauth2/authorize?client_id=1409855867834073279&permissions=40138653572864&integration_type=0&scope=bot+applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button variant="default" size="sm" className="mt-4">
                  <Bot className="w-4 h-4 mr-2" />
                  Add to Discord
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
