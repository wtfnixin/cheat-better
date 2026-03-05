"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";
import { useLanguage } from "@/context/LanguageContext";

export default function StoriaPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useLanguage();

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
                        marginBottom: "40px",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {t.storia.title}
                </h1>

                <div style={{ fontSize: "16px", lineHeight: 1.8, color: "#333" }}>
                    <p style={{ marginBottom: "24px" }}>{t.storia.p1}</p>
                    <p style={{ marginBottom: "24px" }}>{t.storia.p2}</p>
                    <p style={{ marginBottom: "24px" }}>{t.storia.p3}</p>

                    <div style={{ margin: "60px 0", borderTop: "1px solid #d0d0d0" }} />

                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "24px", marginBottom: "16px" }}>{t.storia.year1966title}</h3>
                            <p>{t.storia.year1966}</p>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "24px", marginBottom: "16px" }}>{t.storia.year1970title}</h3>
                            <p>{t.storia.year1970}</p>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "24px", marginBottom: "16px" }}>{t.storia.year1972title}</h3>
                            <p>{t.storia.year1972}</p>
                        </div>
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "24px", marginBottom: "16px" }}>{t.storia.todayTitle}</h3>
                            <p>{t.storia.today}</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
