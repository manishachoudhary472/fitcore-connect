import { motion } from "framer-motion";
import { Flame, Swords, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  {
    title: "Push-Up Showdown",
    description: "Challenge a friend to a 30-day push-up battle. Most reps wins the crown.",
    difficulty: "Medium",
    duration: "30 Days",
    participants: 124,
  },
  {
    title: "Sprint King",
    description: "Who covers the most distance in 7 days? Track every run and dominate the board.",
    difficulty: "Hard",
    duration: "7 Days",
    participants: 89,
  },
  {
    title: "Plank Warriors",
    description: "Hold your ground. The longest cumulative plank time wins this challenge.",
    difficulty: "Easy",
    duration: "14 Days",
    participants: 203,
  },
];

const difficultyColor: Record<string, string> = {
  Easy: "bg-secondary text-secondary-foreground",
  Medium: "bg-primary/20 text-foreground",
  Hard: "gradient-bg text-primary-foreground",
};

const ChallengesSection = () => {
  return (
    <section id="challenges" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Accept the <span className="gradient-text">Challenge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Challenge other members head-to-head. Compete, push harder, and prove what you're made of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, i) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Swords className="text-primary" size={28} />
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficultyColor[challenge.difficulty]}`}>
                  {challenge.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{challenge.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">{challenge.description}</p>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Timer size={14} /> {challenge.duration}</span>
                <span className="flex items-center gap-1"><Flame size={14} /> {challenge.participants} competing</span>
              </div>

              <Button variant="hero" className="w-full">
                Accept Challenge
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
