"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";
import ViewToggle from "@/components/ViewToggle";
import SpazioView from "@/components/SpazioView";
import GrigliaView from "@/components/GrigliaView";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<"spazio" | "griglia">("spazio");

  return (
    <div className="w-full h-screen overflow-hidden relative" style={{ background: "#f2f2f2" }}>
      <Header
        onMenuToggle={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />

      <NavigationOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <div className="w-full h-full">
        {activeView === "spazio" ? <SpazioView /> : <GrigliaView />}
      </div>

      <ViewToggle activeView={activeView} onToggle={setActiveView} />
    </div>
  );
}
