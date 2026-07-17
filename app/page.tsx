"use client";

import { useState, useEffect } from "react";
import AudioPlayer from "./components/AudioPlayer";
import HeroSection from "./components/HeroSection";
import InvitationSection from "./components/InvitationSection";
import DetailsSection from "./components/DetailsSection";
import PhotoDump from "./components/PhotoDump";
import WishesSection from "./components/WishesSection";
import GiftSection from "./components/GiftSection";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflowY = "auto";
    } else {
      // Just normal flow, but the rest of the content is hidden until opened
    }
  }, [isOpened]);

  return (
    <main className="flex flex-col min-h-screen relative w-full overflow-x-clip">
      <AudioPlayer />
      <HeroSection />
      <InvitationSection isOpened={isOpened} setIsOpened={setIsOpened} />
      
      {isOpened && (
        <>
          <DetailsSection />
          <PhotoDump />
          <WishesSection />
          <GiftSection />
        </>
      )}
    </main>
  );
}
