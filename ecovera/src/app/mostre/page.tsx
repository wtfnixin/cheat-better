"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";
import { useLanguage } from "@/context/LanguageContext";

const exhibitions = [
    { title: "Ecovera Radical Design", location: "Milan Design Week", dateIt: "Aprile 2024", dateEn: "April 2024", descIt: "Una retrospettiva completa dei pezzi più iconici di Ecovera, che mostra l'evoluzione del marchio dalle origini radicali alla maestria contemporanea.", descEn: "A comprehensive retrospective of Ecovera's most iconic pieces, showcasing the brand's evolution from radical beginnings to contemporary mastery." },
    { title: "Soft Monuments", location: "Museo del Design, Turin", dateIt: "Settembre 2023", dateEn: "September 2023", descIt: "Un'installazione immersiva che evidenzia l'uso rivoluzionario del poliuretano espanso nel design del mobile.", descEn: "An immersive installation highlighting the revolutionary use of polyurethane foam in furniture design." },
    { title: "Icons of Italian Design", location: "Triennale Milano", dateIt: "Giugno 2023", dateEn: "June 2023", descIt: "I pezzi Ecovera esposti accanto ad altre leggende del design italiano in questa mostra storica.", descEn: "Ecovera pieces featured alongside other Italian design legends in this landmark exhibition." },
    { title: "Pop to Radical", location: "Centre Pompidou, Paris", dateIt: "Marzo 2022", dateEn: "March 2022", descIt: "Esplorando l'intersezione tra pop art e design radicale attraverso le opere più provocatorie di Ecovera.", descEn: "Exploring the intersection of pop art and radical design through Ecovera's most provocative works." },
];

export default function MostrePage() {
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
                    {t.mostre.title}
                </h1>

                <div className="grid grid-cols-2 gap-6">
                    {exhibitions.map((exhibit) => (
                        <div
                            key={exhibit.title}
                            style={{
                                background: "#fff",
                                padding: "32px",
                                border: "1px solid #d0d0d0",
                                cursor: "pointer",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-4px)";
                                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.08)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#999", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                                {language === "en" ? exhibit.dateEn : exhibit.dateIt}
                            </span>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 900,
                                    fontSize: "22px",
                                    margin: "12px 0 8px",
                                }}
                            >
                                {exhibit.title}
                            </h2>
                            <p style={{ fontSize: "13px", fontWeight: 600, color: "#666", marginBottom: "12px" }}>
                                {exhibit.location}
                            </p>
                            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#444" }}>
                                {language === "en" ? exhibit.descEn : exhibit.descIt}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
