"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { use } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/Header";
import NavigationOverlay from "@/components/NavigationOverlay";

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const { slug } = use(params);
    const product = products.find((p) => p.slug === slug);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(
        "description"
    );
    const [menuOpen, setMenuOpen] = useState(false);
    const { t } = useLanguage();

    if (!product) {
        notFound();
    }

    const toggleAccordion = (section: string) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    return (
        <div className="min-h-screen" style={{ background: "#f2f2f2" }}>
            <Header onMenuToggle={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} showBack />
            <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            {/* Product content */}
            <div className="flex min-h-screen" style={{ paddingTop: "80px" }}>
                {/* Left: Product image gallery */}
                <div
                    className="flex items-center justify-center"
                    style={{
                        width: "60%",
                        background: "#f2f2f2",
                        minHeight: "calc(100vh - 80px)",
                        padding: "60px",
                    }}
                >
                    <div style={{ maxWidth: "500px", width: "100%" }}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            style={{
                                objectFit: "contain",
                                width: "100%",
                                height: "auto",
                            }}
                            priority
                        />
                    </div>
                </div>

                {/* Right: Product info */}
                <div
                    className="flex flex-col"
                    style={{
                        width: "40%",
                        background: "#fff",
                        minHeight: "calc(100vh - 80px)",
                        padding: "60px 40px",
                        borderLeft: "1px solid #d0d0d0",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 900,
                            fontSize: "clamp(28px, 3vw, 42px)",
                            marginBottom: "8px",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {product.name}
                    </h1>

                    <p
                        style={{
                            fontSize: "13px",
                            color: "#999",
                            marginBottom: "40px",
                            fontWeight: 500,
                            letterSpacing: "0.05em",
                        }}
                    >
                        {product.designer}, {product.year}
                    </p>

                    {/* Accordions */}
                    <div style={{ borderTop: "1px solid #d0d0d0" }}>
                        {/* Description */}
                        <div style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <button
                                onClick={() => toggleAccordion("description")}
                                className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer"
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {t.product.description}
                                <span
                                    style={{
                                        transform:
                                            activeAccordion === "description"
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    ▼
                                </span>
                            </button>
                            {activeAccordion === "description" && (
                                <div
                                    style={{
                                        paddingBottom: "20px",
                                        fontSize: "14px",
                                        lineHeight: 1.7,
                                        color: "#444",
                                    }}
                                >
                                    {product.description}
                                </div>
                            )}
                        </div>

                        {/* Technical details */}
                        <div style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <button
                                onClick={() => toggleAccordion("technical")}
                                className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer"
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {t.product.technicalSheet}
                                <span
                                    style={{
                                        transform:
                                            activeAccordion === "technical"
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    ▼
                                </span>
                            </button>
                            {activeAccordion === "technical" && (
                                <div
                                    style={{
                                        paddingBottom: "20px",
                                        fontSize: "14px",
                                        lineHeight: 1.7,
                                        color: "#444",
                                    }}
                                >
                                    <table className="w-full" style={{ borderCollapse: "collapse" }}>
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        padding: "8px 0",
                                                        fontWeight: 700,
                                                        fontSize: "12px",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        width: "40%",
                                                    }}
                                                >
                                                    {t.product.category}
                                                </td>
                                                <td style={{ padding: "8px 0" }}>{product.category}</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        padding: "8px 0",
                                                        fontWeight: 700,
                                                        fontSize: "12px",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                    }}
                                                >
                                                    {t.product.designer}
                                                </td>
                                                <td style={{ padding: "8px 0" }}>{product.designer}</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        padding: "8px 0",
                                                        fontWeight: 700,
                                                        fontSize: "12px",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                    }}
                                                >
                                                    {t.product.year}
                                                </td>
                                                <td style={{ padding: "8px 0" }}>{product.year}</td>
                                            </tr>
                                            <tr>
                                                <td
                                                    style={{
                                                        padding: "8px 0",
                                                        fontWeight: 700,
                                                        fontSize: "12px",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                    }}
                                                >
                                                    {t.product.material}
                                                </td>
                                                <td style={{ padding: "8px 0" }}>
                                                    {t.product.materialValue}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        {/* History */}
                        <div style={{ borderBottom: "1px solid #d0d0d0" }}>
                            <button
                                onClick={() => toggleAccordion("history")}
                                className="w-full flex items-center justify-between py-4 bg-transparent border-none cursor-pointer"
                                style={{
                                    fontSize: "13px",
                                    fontWeight: 800,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                }}
                            >
                                {t.product.history}
                                <span
                                    style={{
                                        transform:
                                            activeAccordion === "history"
                                                ? "rotate(180deg)"
                                                : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    ▼
                                </span>
                            </button>
                            {activeAccordion === "history" && (
                                <div
                                    style={{
                                        paddingBottom: "20px",
                                        fontSize: "14px",
                                        lineHeight: 1.7,
                                        color: "#444",
                                    }}
                                >
                                    {t.storia.p1}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Variants */}
                    <div style={{ marginTop: "40px" }}>
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                marginBottom: "16px",
                            }}
                        >
                            {t.product.variants}
                        </p>
                        <div className="flex gap-3">
                            {products
                                .filter(
                                    (p) =>
                                        p.category === product.category && p.id !== product.id
                                )
                                .slice(0, 4)
                                .map((variant) => (
                                    <Link
                                        key={variant.id}
                                        href={`/prodotti/${variant.slug}`}
                                        className="block"
                                        style={{
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            background: variant.color,
                                            border: "2px solid #d0d0d0",
                                            transition: "border-color 0.2s",
                                        }}
                                        title={variant.name}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
