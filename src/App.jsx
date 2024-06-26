import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Features } from './components/Features/Features';
import { TourList } from './components/TourList/TourList';

export const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
      <HeroSection />
      <Features />
      <TourList />
      </main>
      <Footer />
    </div>
  );
};
