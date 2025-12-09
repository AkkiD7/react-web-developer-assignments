import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Attendees } from './components/Attendees';
import { WhyAttend } from './components/WhyAttend';
import { Topics } from './components/Topics';
import { Sponsors } from './components/Sponsors';
import { Contact } from './components/Contact';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onRegisterClick={openModal} />
      <main>
        <Hero onRegisterClick={openModal} />
        <Overview />
        <Attendees />
        <WhyAttend />
        <Topics />
        <Sponsors />
      </main>
      <Contact />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;