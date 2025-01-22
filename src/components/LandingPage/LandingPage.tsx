"use client";

import { Button } from "@/components/ui/button";
import { Music, BookOpen, Brain, Moon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-black/40 z-10 animate-fade-in" />
        <div
          className="h-screen relative bg-cover bg-center animate-scale-up"
          style={{
            backgroundImage:
              "url('/assets/video/landingPage.png')",
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-down">
                Focus Better with Lofi
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-slide-down animate-delay-200">
                Enhance your study sessions and boost productivity with curated lofi beats.
                The perfect musical companion for studying, working, or relaxing.
              </p>
              <Button
                size="lg"
                onClick={() => router.push("/home")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground animate-slide-down animate-delay-400"
              >
                Start Listening
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 animate-slide-down">
            Why Choose Lofi.co?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-scale-up">
              <FeatureCard
                icon={<Music className="w-8 h-8" />}
                title="Curated Playlists"
                description="Hand-picked lofi beats perfect for any mood or study session"
              />
            </div>
            <div className="animate-scale-up animate-delay-200">
              <FeatureCard
                icon={<BookOpen className="w-8 h-8" />}
                title="Study Timer"
                description="Built-in pomodoro timer to optimize your study sessions"
              />
            </div>
            <div className="animate-scale-up animate-delay-400">
              <FeatureCard
                icon={<Brain className="w-8 h-8" />}
                title="Focus Enhancement"
                description="Music scientifically proven to improve concentration"
              />
            </div>
            <div className="animate-scale-up animate-delay-600">
              <FeatureCard
                icon={<Moon className="w-8 h-8" />}
                title="Ambient Sounds"
                description="Mix in rain, coffee shop, or nature sounds"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 animate-slide-down">
            Ready to Enhance Your Focus?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-slide-down animate-delay-200">
            Join thousands of students and professionals who use Lofi.co to boost their
            productivity and create the perfect study atmosphere.
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/home")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground animate-slide-down animate-delay-400"
          >
            Start Listening Now
          </Button>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-card border border-border">
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}