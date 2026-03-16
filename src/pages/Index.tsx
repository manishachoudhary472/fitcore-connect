import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import GoalsSection from "@/components/GoalsSection";
import ChallengesSection from "@/components/ChallengesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import GuestGate from "@/components/GuestGate";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <GuestGate message="Please login to check upcoming events">
        <EventsSection />
      </GuestGate>
      <GuestGate message="Please login to track your fitness goals">
        <GoalsSection />
      </GuestGate>
      <GuestGate message="Please login to participate in challenges">
        <ChallengesSection />
      </GuestGate>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
