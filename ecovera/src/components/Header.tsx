"use client";
import { useState } from "react";
import Link from "next/link";
import SearchOverlay from "./SearchOverlay";

interface HeaderProps {
    onMenuToggle: () => void;
    menuOpen: boolean;
    showBack?: boolean;
}

export default function Header({ onMenuToggle, menuOpen, showBack }: HeaderProps) {
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <header className="site-header">
                {showBack ? (
                    <Link href="/" className="w-8 h-8 flex items-center justify-center no-underline">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <line x1="14" y1="4" x2="6" y2="10" stroke="#000" strokeWidth="2" />
                            <line x1="6" y1="10" x2="14" y2="16" stroke="#000" strokeWidth="2" />
                        </svg>
                    </Link>
                ) : (
                    <button
                        onClick={onMenuToggle}
                        className="w-8 h-8 flex items-center justify-center cursor-pointer bg-transparent border-none"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <line x1="2" y1="2" x2="18" y2="18" stroke="#000" strokeWidth="2" />
                                <line x1="18" y1="2" x2="2" y2="18" stroke="#000" strokeWidth="2" />
                            </svg>
                        ) : (
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                                <line x1="0" y1="1" x2="22" y2="1" stroke="#000" strokeWidth="2" />
                                <line x1="0" y1="7" x2="22" y2="7" stroke="#000" strokeWidth="2" />
                                <line x1="0" y1="13" x2="22" y2="13" stroke="#000" strokeWidth="2" />
                            </svg>
                        )}
                    </button>
                )}

                <Link href="/" className="no-underline">
                    <span
                        className="text-2xl tracking-tight"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 900,
                            color: "#000",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        ecovera
                    </span>
                </Link>

                <button
                    onClick={() => setSearchOpen(true)}
                    className="w-8 h-8 flex items-center justify-center cursor-pointer bg-transparent border-none"
                    aria-label="Search"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="8" cy="8" r="6.5" stroke="#000" strokeWidth="2" />
                        <line x1="13" y1="13" x2="19" y2="19" stroke="#000" strokeWidth="2" />
                    </svg>
                </button>
            </header>

            <SearchOverlay
                isOpen={searchOpen}
                onClose={() => setSearchOpen(false)}
            />
        </>
    );
}
