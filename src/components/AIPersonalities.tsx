// import charlesAvatar from "@/assets/charles-avatar.jpg";
// import maverickAvatar from "@/assets/maverick-avatar.jpg";
// import rubyAvatar from "@/assets/ruby-avatar.jpg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const personalities = [
  {
    name: "Maverick",
    age: 28,
    avatar: "https://murf.ai/public-assets/home/avatars/Maverick.jpg",
    traits: ["Calm", "Optimistic", "Wise"],
    description:
      "A thoughtful conversationalist who brings balanced perspectives and encourages positive thinking in every discussion.",
    accent: "border-blue-400/50 shadow-blue-400/20",
  },
  {
    name: "Ruby",
    age: 24,
    avatar: "https://murf.ai/public-assets/home/avatars/Ruby.jpg",
    traits: ["Energetic", "Enthusiastic", "Creative"],
    description:
      "Brings vibrant energy to conversations with creative ideas and infectious enthusiasm that keeps everyone engaged.",
    accent: "border-pink-400/50 shadow-pink-400/20",
  },
  {
    name: "Charles",
    age: 26,
    avatar: "https://murf.ai/public-assets/home/avatars/Charles.jpg",
    traits: ["Witty", "Analytical", "Sharp"],
    description:
      "Combines sharp analytical thinking with clever humor, offering insightful observations and quick-witted responses.",
    accent: "border-green-400/50 shadow-green-400/20",
  },
];

const AIPersonalities = () => {
  return (
    <section id="personalities" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Meet Your AI Companions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three distinct personalities powered by Murf AI's advanced
            text-to-speech technology, each with unique voices and
            conversational styles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {personalities.map((personality, index) => (
            <Card
              key={personality.name}
              className={`p-8 bg-card/30 backdrop-blur-glass border ${personality.accent} hover:shadow-card hover:scale-105 transition-all duration-500 animate-fade-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={personality.avatar}
                    alt={`${personality.name} AI Avatar`}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20 shadow-glow"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {personality.name}
                </h3>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {personality.traits.map((trait) => (
                    <Badge
                      key={trait}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {personality.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground">
            Each personality is powered by{" "}
            <span className="text-primary font-semibold">Murf AI's</span>{" "}
            industry-leading voice synthesis
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIPersonalities;
