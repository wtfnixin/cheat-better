"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";
import { useLanguage } from "@/context/LanguageContext";

const newsItems = [
    { titleIt: "Ecovera al Milan Design Week 2024", titleEn: "Ecovera at Milan Design Week 2024", dateIt: "15 Aprile 2024", dateEn: "April 15, 2024", excerptIt: "Scopri l'ultima collezione Ecovera presentata durante il Salone del Mobile, con nuove collaborazioni e classici reinterpretati.", excerptEn: "Discover Ecovera's latest collection unveiled during Salone del Mobile, featuring new collaborations and reimagined classics." },
    { titleIt: "La nuova collezione Mozza", titleEn: "The New Mozza Collection", dateIt: "28 Febbraio 2024", dateEn: "February 28, 2024", excerptIt: "Sei nuovi colori si aggiungono alla famiglia Mozza, ampliando la collezione di sgabelli giocosi con vivaci tonalità ispirate al Mediterraneo.", excerptEn: "Six new colors join the Mozza family, expanding the playful stool collection with vibrant Mediterranean-inspired hues." },
    { titleIt: "Bocca compie 54 anni", titleEn: "Bocca Turns 54", dateIt: "10 Gennaio 2024", dateEn: "January 10, 2024", excerptIt: "Celebriamo oltre cinque decenni del divano più iconico del mondo. Uno sguardo a come BOCCA ha cambiato per sempre il design del mobile.", excerptEn: "Celebrating over five decades of the world's most iconic sofa. A look back at how BOCCA changed furniture design forever." },
    { titleIt: "Ecovera x Arte Contemporanea", titleEn: "Ecovera x Contemporary Art", dateIt: "5 Dicembre 2023", dateEn: "December 5, 2023", excerptIt: "Un nuovo capitolo nel dialogo continuo di Ecovera con l'arte contemporanea. Annunciate edizioni limitate esclusive.", excerptEn: "A new chapter in Ecovera's ongoing dialogue with contemporary art. Exclusive limited editions announced." },
    { titleIt: "Sostenibilità nel Design Radicale", titleEn: "Sustainability in Radical Design", dateIt: "20 Ottobre 2023", dateEn: "October 20, 2023", excerptIt: "Come Ecovera sta ripensando i suoi processi produttivi rimanendo fedele alla sua eredità di design radicale.", excerptEn: "How Ecovera is reimagining its manufacturing processes while staying true to its radical design heritage." },
];

export default function NewsPage() {
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
                    {t.newsPage.title}
                </h1>

                <div className="flex flex-col gap-0">
                    {newsItems.map((item, i) => (
                        <article
                            key={language === "en" ? item.titleEn : item.titleIt}
                            style={{
                                borderTop: "1px solid #d0d0d0",
                                padding: "32px 0",
                                cursor: "pointer",
                                ...(i === newsItems.length - 1 ? { borderBottom: "1px solid #d0d0d0" } : {}),
                            }}
                        >
                            <span style={{ fontSize: "12px", fontWeight: 700, color: "#999", letterSpacing: "0.1em" }}>
                                {language === "en" ? item.dateEn : item.dateIt}
                            </span>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 900,
                                    fontSize: "24px",
                                    margin: "8px 0 12px",
                                }}
                            >
                                {language === "en" ? item.titleEn : item.titleIt}
                            </h2>
                            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555" }}>
                                {language === "en" ? item.excerptEn : item.excerptIt}
                            </p>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}
