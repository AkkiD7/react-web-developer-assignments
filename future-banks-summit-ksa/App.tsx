import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Topics from './components/Topics';
import Attendees from './components/Attendees';
import WhyAttend from './components/WhyAttend';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-accent selection:text-white">
      <Navbar onRegisterClick={openRegister} />
      <main>
        <Hero onRegisterClick={openRegister} />
        <Overview />
        <Attendees />
        <Topics />
        <WhyAttend />
        
        <section id="register" className="py-16 bg-gradient-to-r from-brand-blue to-blue-700 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Ready to innovate and join the ranks of the brightest minds?</h2>
                <button 
                  onClick={openRegister}
                  className="bg-brand-accent text-slate-900 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-white transition-colors duration-300"
                >
                    Register Now
                </button>
            </div>
        </section>
      </main>
      <Footer onRegisterClick={openRegister} />
      
      <RegisterModal isOpen={isRegisterOpen} onClose={closeRegister} />
    </div>
  );
}

export default App;