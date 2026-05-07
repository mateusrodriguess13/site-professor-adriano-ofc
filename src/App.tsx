/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Products } from './components/Products';
import { About } from './components/About';
import { Mission } from './components/Mission';
import { LeadCapture } from './components/LeadCapture';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      <main>
        <Hero />
        <About />
        <SocialProof />
        <Products />
        <Mission />
        <LeadCapture />
        <Community />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

