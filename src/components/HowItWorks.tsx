import { Card } from "@/components/ui/card";
import { MessageSquare, Play, Plus, Users } from "lucide-react";

const steps = [
  {
    icon: Plus,
    title: "Add bot to your Discord server",
    description:
      'Click the "Add to Discord" button and authorize VoiceBot AI for your server',
    color: "text-blue-400",
  },
  {
    number: 2,
    icon: MessageSquare,
    title: "Use /join command in a voice channel",
    description:
      "Type /join while in any voice channel to invite the AI personalities to join",
    color: "text-purple-400",
  },
  {
    number: 3,
    icon: Play,
    title: "Start talking naturally",
    description:
      "Begin conversations as you normally would - the AI listens and responds in real-time",
    color: "text-green-400",
  },
  {
    number: 4,
    icon: Users,
    title: "Enjoy dynamic group conversations",
    description:
      "Experience natural interactions with Maverick, Ruby, and Charles as they join your discussions",
    color: "text-primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in minutes with our simple setup process. No complex
            configuration required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card
                className="p-8 bg-card/40 backdrop-blur-glass border border-white/10 hover:border-white/20 hover:shadow-card transition-all duration-500 animate-fade-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center ${step.color} flex-shrink-0`}
                  >
                    <step.icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mt-16 text-center animate-fade-up">
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <a
              href="https://github.com/frhanjav/discord-ai-call"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-colors"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
