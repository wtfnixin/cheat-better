"use client";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function GrigliaView() {
    return (
        <div
            className="w-full h-full overflow-y-auto"
            style={{
                paddingTop: "80px",
                paddingBottom: "80px",
            }}
        >
            <div
                className="grid"
                style={{
                    gridTemplateColumns: "repeat(4, 1fr)",
                    borderTop: "1px solid #d0d0d0",
                    borderLeft: "1px solid #d0d0d0",
                }}
            >
                {products.map((product) => (
                    <Link
                        key={product.id}
                        href={`/prodotti/${product.slug}`}
                        className="grid-cell no-underline text-black"
                    >
                        <div className="product-svg-wrapper" style={{ padding: "20%" }}>
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={200}
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "100%",
                                }}
                            />
                        </div>
                        <span className="grid-product-name">{product.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
