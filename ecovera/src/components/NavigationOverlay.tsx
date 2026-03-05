"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface NavigationOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavigationOverlay({
    isOpen,
    onClose,
}: NavigationOverlayProps) {
    const { t, toggleLanguage } = useLanguage();

    const navLinks = [
        { label: t.nav.products, href: "/" },
        { label: t.nav.history, href: "/storia" },
        { label: t.nav.authors, href: "/autori" },
        { label: t.nav.exhibitions, href: "/mostre" },
        { label: t.nav.news, href: "/news" },
        { label: t.nav.contact, href: "/contatti" },
    ];

    return (
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
            <div className="backdrop" onClick={onClose} />
            <div className="nav-content">
                {/* Close + Logo + Search */}
                <div
                    className="w-full flex items-center justify-between"
                    style={{ marginTop: "-20px", marginBottom: "20px" }}
                >
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center cursor-pointer bg-transparent border-none"
                        aria-label="Close menu"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <line x1="2" y1="2" x2="18" y2="18" stroke="#000" strokeWidth="2" />
                            <line x1="18" y1="2" x2="2" y2="18" stroke="#000" strokeWidth="2" />
                        </svg>
                    </button>

                    <span
                        className="text-2xl"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 900,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        ecovera
                    </span>

                    <button
                        className="w-8 h-8 flex items-center justify-center cursor-pointer bg-transparent border-none"
                        aria-label="Search"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="8" cy="8" r="6.5" stroke="#000" strokeWidth="2" />
                            <line x1="13" y1="13" x2="19" y2="19" stroke="#000" strokeWidth="2" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col items-center gap-2 py-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            className="no-underline text-black"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 900,
                                fontSize: "clamp(24px, 4vw, 36px)",
                                letterSpacing: "0.02em",
                                lineHeight: 1.4,
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.opacity = "0.5")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.opacity = "1")
                            }
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Bottom actions */}
                <div className="w-full mt-auto" style={{ borderTop: "1px solid #d0d0d0" }}>
                    <div className="flex">
                        <button
                            onClick={toggleLanguage}
                            className="flex-1 flex items-center justify-center gap-2 py-3 bg-transparent border-none cursor-pointer text-sm font-bold tracking-wider"
                            style={{ borderRight: "1px solid #d0d0d0" }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="8" stroke="#000" strokeWidth="1.5" />
                                <line x1="10" y1="2" x2="10" y2="18" stroke="#000" strokeWidth="1" />
                                <path d="M2 10 Q6 6 10 6 Q14 6 18 10" stroke="#000" strokeWidth="1" fill="none" />
                                <path d="M2 10 Q6 14 10 14 Q14 14 18 10" stroke="#000" strokeWidth="1" fill="none" />
                            </svg>
                            {t.navFooter.languageToggle}
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-transparent border-none cursor-pointer text-sm font-bold tracking-wider">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <rect x="2" y="4" width="16" height="12" rx="1" stroke="#000" strokeWidth="1.5" fill="none" />
                                <line x1="2" y1="8" x2="18" y2="8" stroke="#000" strokeWidth="1" />
                            </svg>
                            {t.navFooter.newsletter}
                        </button>
                    </div>

                    <div
                        className="text-center py-2 text-xs font-bold tracking-wider"
                        style={{
                            background: "#000",
                            color: "#fff",
                        }}
                    >
                        {t.navFooter.privacyPolicy}
                    </div>

                    <p
                        className="text-center py-3 text-xs tracking-wide"
                        style={{ color: "#666" }}
                    >
                        ECOVERA SRL Località Batasiolo 85/A, 12064, La Morra (CN)
                    </p>
                </div>
            </div>
        </div>
    );
}
