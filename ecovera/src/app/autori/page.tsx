"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";
import { useLanguage } from "@/context/LanguageContext";

const designers = [
    { name: "Studio 65", descriptionIt: "Il collettivo dietro BOCCA, CAPITELLO e MAGRITTA. Pionieri dell'architettura pop e del design italiano.", descriptionEn: "The collective behind BOCCA, CAPITELLO and MAGRITTA. Pioneers of Italian pop architecture and design.", years: "1970–present" },
    { name: "Guido Drocco & Franco Mello", descriptionIt: "Creatori dell'iconico appendiabiti CACTUS®. La loro collaborazione ha prodotto uno degli oggetti di design più riconosciuti della storia.", descriptionEn: "Creators of the iconic CACTUS® coat stand. Their collaboration produced one of the most recognized design objects in history.", years: "1972" },
    { name: "Ceretti, Derossi, Rosso", descriptionIt: "Il trio che ha progettato PRATONE, la monumentale poltrona-erba sovradimensionata. Il loro lavoro incarnava lo spirito del design radicale.", descriptionEn: "The trio who designed PRATONE, the monumental oversized grass lounge. Their work embodied the spirit of radical design.", years: "1971" },
    { name: "Piero Gilardi", descriptionIt: "Artista e designer noto per SASSI e altre creazioni in poliuretano ispirate alla natura. Un pioniere dell'arte povera.", descriptionEn: "Artist and designer known for SASSI and other nature-inspired polyurethane creations. A pioneer in arte povera.", years: "1968–present" },
    { name: "Atelier Biagetti", descriptionIt: "Duo di design contemporaneo che porta prospettive fresche alla collezione Ecovera con pezzi come DETECMA e LA COVA.", descriptionEn: "Contemporary design duo bringing fresh perspectives to Ecovera's collection with pieces like DETECMA and LA COVA.", years: "2020–present" },
];

export default function AutoriPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, language } = useLanguage();

    return (
        <div className="min-h-screen" style={{ background: "#f2f2f2" }}>
            <Header onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
            <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <main style={{ maxWidth: "900px", margin: "0 auto", padding: "120px 40px 80px" }}>
                <h1
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 900,
                        fontSize: "clamp(36px, 5vw, 64px)",
                        marginBottom: "60px",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {t.autori.title}
                </h1>

                <div className="flex flex-col gap-0">
                    {designers.map((designer, i) => (
                        <div
                            key={designer.name}
                            style={{
                                borderTop: "1px solid #d0d0d0",
                                padding: "40px 0",
                                ...(i === designers.length - 1 ? { borderBottom: "1px solid #d0d0d0" } : {}),
                            }}
                        >
                            <div className="flex items-start justify-between gap-8">
                                <div>
                                    <h2
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontWeight: 900,
                                            fontSize: "28px",
                                            marginBottom: "12px",
                                        }}
                                    >
                                        {designer.name}
                                    </h2>
                                    <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#444", maxWidth: "600px" }}>
                                        {language === "en" ? designer.descriptionEn : designer.descriptionIt}
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontSize: "13px",
                                        fontWeight: 700,
                                        color: "#999",
                                        letterSpacing: "0.05em",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {designer.years}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
