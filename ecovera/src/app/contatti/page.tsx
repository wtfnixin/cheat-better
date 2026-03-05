"use client";
import { useState } from "react";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";
import { useLanguage } from "@/context/LanguageContext";

export default function ContattiPage() {
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
                        marginBottom: "60px",
                        letterSpacing: "-0.02em",
                    }}
                >
                    {t.contatti.title}
                </h1>

                <div className="grid grid-cols-2 gap-16">
                    <div>
                        <h3
                            style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                marginBottom: "16px",
                            }}
                        >
                            {t.contatti.headquarters}
                        </h3>
                        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#444" }}>
                            ECOVERA SRL<br />
                            Località Batasiolo 85/A<br />
                            12064, La Morra (CN)<br />
                            Italia
                        </p>

                        <h3
                            style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                marginTop: "40px",
                                marginBottom: "16px",
                            }}
                        >
                            {t.contatti.contactInfo}
                        </h3>
                        <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#444" }}>
                            Email: info@ecovera.it<br />
                            Tel: +39 0173 50 20 74
                        </p>

                        <h3
                            style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                marginTop: "40px",
                                marginBottom: "16px",
                            }}
                        >
                            {t.contatti.social}
                        </h3>
                        <div className="flex gap-4">
                            {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                                <span
                                    key={social}
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        borderBottom: "1px solid #000",
                                        paddingBottom: "2px",
                                    }}
                                >
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3
                            style={{
                                fontSize: "13px",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                marginBottom: "16px",
                            }}
                        >
                            {t.contatti.writeToUs}
                        </h3>
                        <form className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder={t.contatti.name}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid #d0d0d0",
                                    padding: "12px 0",
                                    fontSize: "14px",
                                    outline: "none",
                                }}
                            />
                            <input
                                type="email"
                                placeholder={t.contatti.email}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid #d0d0d0",
                                    padding: "12px 0",
                                    fontSize: "14px",
                                    outline: "none",
                                }}
                            />
                            <textarea
                                placeholder={t.contatti.message}
                                rows={5}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid #d0d0d0",
                                    padding: "12px 0",
                                    fontSize: "14px",
                                    outline: "none",
                                    resize: "none",
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: "#000",
                                    color: "#fff",
                                    border: "none",
                                    padding: "14px 32px",
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    alignSelf: "flex-start",
                                    marginTop: "8px",
                                    transition: "opacity 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                {t.contatti.send}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
