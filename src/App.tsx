import { useCallback } from 'react';
import { Experience } from './components/Experience';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Journey } from './components/Journey';
import { Overview } from './components/Overview';
import { RaceStages } from './components/RaceStages';
import { Rewards } from './components/Rewards';

const REGISTRATION_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1gnTkMo5NL-dcsu17iTqeoTPHGBnXPQocxLAcxu6ECVE/edit?gid=31458438&pli=1&authuser=0#gid=31458438';

export default function App() {
  const openRegistrationSheet = useCallback(() => {
    window.open(REGISTRATION_SHEET_URL, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onRegister={openRegistrationSheet} onViewTeams={openRegistrationSheet} />
        <Overview />
        <Journey />
        <RaceStages />
        <Rewards />
        <Experience />
        <FinalCTA onRegister={openRegistrationSheet} />
      </main>
      <Footer />
    </>
  );
}
