"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when overlay opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
        if (!isOpen) {
            setQuery("");
        }
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKey);
        }
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    const filtered = query.trim()
        ? products.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.designer.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        : [];

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(12px)",
                }}
            />

            {/* Search content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "700px",
                    width: "100%",
                    margin: "0 auto",
                    paddingTop: "100px",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "30px",
                        right: "24px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: "8px",
                    }}
                    aria-label="Close search"
                >
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                        <line x1="2" y1="2" x2="18" y2="18" stroke="#000" strokeWidth="2" />
                        <line x1="18" y1="2" x2="2" y2="18" stroke="#000" strokeWidth="2" />
                    </svg>
                </button>

                {/* Search input */}
                <div
                    style={{
                        borderBottom: "2px solid #000",
                        paddingBottom: "12px",
                        marginBottom: "32px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
                        <circle cx="8" cy="8" r="6.5" stroke="#000" strokeWidth="2" />
                        <line x1="13" y1="13" x2="19" y2="19" stroke="#000" strokeWidth="2" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search products..."
                        style={{
                            flex: 1,
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            fontSize: "24px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                        }}
                    />
                </div>

                {/* Results */}
                <div
                    style={{
                        maxHeight: "calc(100vh - 240px)",
                        overflowY: "auto",
                    }}
                >
                    {query.trim() && filtered.length === 0 && (
                        <p
                            style={{
                                fontSize: "15px",
                                color: "#999",
                                textAlign: "center",
                                paddingTop: "40px",
                            }}
                        >
                            No products found for &ldquo;{query}&rdquo;
                        </p>
                    )}

                    {filtered.map((product) => (
                        <Link
                            key={product.id}
                            href={`/prodotti/${product.slug}`}
                            onClick={onClose}
                            className="no-underline"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "20px",
                                padding: "16px 0",
                                borderBottom: "1px solid #e5e5e5",
                                color: "#000",
                                transition: "opacity 0.15s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            <div
                                style={{
                                    width: "64px",
                                    height: "64px",
                                    background: "#f5f5f5",
                                    borderRadius: "4px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                }}
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={48}
                                    height={48}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div>
                                <p
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 900,
                                        fontSize: "18px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    {product.name}
                                </p>
                                <p
                                    style={{
                                        fontSize: "12px",
                                        color: "#999",
                                        fontWeight: 500,
                                        letterSpacing: "0.05em",
                                    }}
                                >
                                    {product.designer} · {product.year}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
