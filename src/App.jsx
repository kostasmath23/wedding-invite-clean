import React from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import SaveTheDate from './components/SaveTheDate';
import ChurchMap from './components/ChurchMap';
import Gallery from './components/Gallery';
import Cast from './components/Cast';
import WishesAndPoll from './components/WishesAndPoll';
import InvitationAndGifts from './components/InvitationAndGifts';
import RSVPForm from './components/RSVPForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Hero />
      <Countdown />
      <Timeline />
      <SaveTheDate />
      <ChurchMap />
      <Gallery />
      <Cast />
      <WishesAndPoll />
      <InvitationAndGifts />
      <RSVPForm />
      <Footer />

      {/* 🔴 Σταθερό κόκκινο RSVP κουμπί πάνω και πιο κεντραρισμένο */}
      <a
        href="#rsvp"
        className="fixed top-6 left-[15%] z-50 bg-red-600 text-white text-xl font-bold px-6 py-3 rounded shadow-lg animate-pulse hover:bg-red-700 transition"
      >
        RSVP
      </a>
    </div>
  );
}
