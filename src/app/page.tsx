import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Ticker from "@/components/Ticker";
import HeroSection from "@/components/HeroSection";
import NewsSection from "@/components/NewsSection";
import EditorsPick from "@/components/EditorsPick";
import InsightsSection from "@/components/InsightsSection";
import StoriesSection from "@/components/StoriesSection";
import LearnSection from "@/components/LearnSection";
import PodcastsSection from "@/components/PodcastsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
      <Header />
      <Menu />
      <Ticker />
      <HeroSection />
      <NewsSection />
      <EditorsPick />
      <InsightsSection />
      <StoriesSection />
      <LearnSection />
      <PodcastsSection />
      <Footer />
    </main>
  );
}
