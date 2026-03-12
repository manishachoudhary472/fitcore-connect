import { motion } from "framer-motion";
import { Trophy, TrendingUp, Clock } from "lucide-react";

const goals = [
  {
    title: "Run 21km",
    progress: 68,
    daysLeft: 14,
    participants: 45,
    leader: "Sarah M.",
  },
  {
    title: "100 Yoga Sessions",
    progress: 42,
    daysLeft: 30,
    participants: 32,
    leader: "Alex R.",
  },
  {
    title: "Lose 10kg",
    progress: 85,
    daysLeft: 7,
    participants: 67,
    leader: "Mike T.",
  },
];

const GoalsSection = () => {
  return (
    <section id="goals" className="section-padding-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Track Your <span className="gradient-text">Goals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Set ambitious targets and race to the finish. See who meets the target first and earn your place on the leaderboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, i) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">{goal.title}</h3>
                <Trophy className="text-primary" size={22} />
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 bg-muted rounded-full mb-2 overflow-hidden">
                <motion.div
                  className="h-full gradient-bg rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${goal.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                />
              </div>
              <p className="text-sm text-muted-foreground mb-6">{goal.progress}% complete</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={14} /> {goal.daysLeft} days left</span>
                <span className="flex items-center gap-1"><TrendingUp size={14} /> Leader: {goal.leader}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
