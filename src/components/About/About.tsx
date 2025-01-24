"use client";

import { Music, Moon, Focus, Coffee, Github, Linkedin, Home } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const features = [
  {
    icon: <Music className="w-8 h-8" />,
    title: "Curated Lo-fi Music",
    description: "Hand-picked tracks to help you focus, relax, and stay productive.",
    color: "bg-purple-100 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Ambient Soundscapes",
    description: "Mix in rain, coffee shop ambiance, or nature sounds to create your perfect atmosphere.",
    color: "bg-blue-100 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: <Focus className="w-8 h-8" />,
    title: "Focus Timer",
    description: "Built-in Pomodoro timer to help you maintain productivity and take regular breaks.",
    color: "bg-green-100 dark:bg-green-900/20",
    textColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Multiple Scenes",
    description: "Choose from various animated scenes to set the perfect visual mood for your session.",
    color: "bg-orange-100 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-foreground hover:opacity-80 transition-opacity"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/s0meone12/lofi-co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-shende-164a1b248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Perfect Study{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Companion
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how our lo-fi music player helps thousands of students and professionals stay focused and relaxed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl border bg-card"
              >
                <div className={cn("absolute inset-0 rounded-2xl opacity-10", feature.color)} />
                <div className="relative">
                  <div className={cn("inline-block p-3 rounded-xl mb-4", feature.color)}>
                    <div className={feature.textColor}>{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Scene",
                description: "Select from our collection of calming animated scenes.",
              },
              {
                step: "2",
                title: "Mix Your Sounds",
                description: "Combine lo-fi music with ambient sounds to create your perfect atmosphere.",
              },
              {
                step: "3",
                title: "Start Your Session",
                description: "Set your timer, put on your headphones, and focus on what matters.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
            <p className="text-xl text-muted-foreground mb-8">
                Discover your ideal study environment designed to help you focus and succeed.
            </p>
            <button 
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                >
                <Link href="/home">
                        Start Listening Now
                </Link>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}