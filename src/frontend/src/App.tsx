import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import HoliGrailCard from './components/HoliGrailCard';
import TeamSection from './components/TeamSection';
import TicketingSection from './components/TicketingSection';
import CorporateEventsSection from './components/CorporateEventsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-matteBlack text-foreground">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="holi-grail" className="py-20 px-4">
          <HoliGrailCard />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="tickets">
          <TicketingSection />
        </section>
        <section id="corporate">
          <CorporateEventsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
