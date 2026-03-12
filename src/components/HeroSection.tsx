import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding-lg pt-32">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-none mb-6">
            <span className="gradient-text">YOUR GOALS,</span>
            <br />
            <span className="text-foreground">AMPLIFIED.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Join a fitness community that pushes boundaries. Discover events, crush challenges, and track your goals — all in one place.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button variant="hero" size="lg">
              Get Started
            </Button>
            <Button variant="heroOutline" size="lg">
              Explore Events
            </Button>
          </div>

          <div className="flex gap-8 mt-12">
            {[
              { number: "2.4K+", label: "Active Members" },
              { number: "150+", label: "Events Hosted" },
              { number: "98%", label: "Goals Achieved" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0, delay: 0.2 }}
          className="relative"
        >
          <img
            src={heroImage}
            alt="Abstract fitness energy visualization"
            className="w-full rounded-2xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-secondary/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
