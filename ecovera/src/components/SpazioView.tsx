"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { products, Product } from "@/data/products";

interface ProductPosition {
    product: Product;
    x: number;
    y: number;
    z: number;
    baseSize: number;
}

function generatePositions(): ProductPosition[] {
    const positions: ProductPosition[] = [];
    const totalProducts = products.length;
    const fov = 800;

    for (let i = 0; i < totalProducts; i++) {
        const z = i * 500 + Math.random() * 250;
        const angle = Math.random() * Math.PI * 2;
        const projectedRadius = 80 + Math.random() * 340;
        const depthScale = (fov + z) / fov;
        const worldX = Math.cos(angle) * projectedRadius * depthScale;
        const worldY = Math.sin(angle) * projectedRadius * depthScale;

        positions.push({
            product: products[i],
            x: worldX,
            y: worldY,
            z,
            baseSize: 238 + Math.random() * 204,
        });
    }

    return positions;
}

function createPauseController() {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const interacting = { current: false };

    function pause() {
        interacting.current = true;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            interacting.current = false;
        }, 3000);
    }

    return { interacting, pause };
}

export default function SpazioView() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollZRef = useRef(0);
    const targetScrollZRef = useRef(0);
    const animFrameRef = useRef<number>(0);
    const positionsRef = useRef<ProductPosition[]>([]);
    const [, forceUpdate] = useState(0);
    const totalDepth = useRef(0);
    const autoScrollSpeed = 4;
    const pauseCtrl = useRef(createPauseController());
    const router = useRouter();

    // Transition state
    const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
    const [transitionPhase, setTransitionPhase] = useState<"idle" | "fadeOthers" | "zoomSelected" | "navigating">("idle");
    const selectedSlugRef = useRef<string>("");

    useEffect(() => {
        positionsRef.current = generatePositions();
        totalDepth.current =
            Math.max(...positionsRef.current.map((p) => p.z)) + 600;
        forceUpdate((n) => n + 1);
    }, []);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (transitionPhase !== "idle") return;
            e.preventDefault();
            const delta = e.deltaY * 2.5;
            targetScrollZRef.current += delta;
            pauseCtrl.current.pause();
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener("wheel", handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener("wheel", handleWheel);
            }
        };
    }, [transitionPhase]);

    useEffect(() => {
        const animate = () => {
            if (transitionPhase === "idle" && !pauseCtrl.current.interacting.current) {
                targetScrollZRef.current += autoScrollSpeed;
            }

            const easing = 0.08;
            scrollZRef.current +=
                (targetScrollZRef.current - scrollZRef.current) * easing;
            forceUpdate((n) => n + 1);
            animFrameRef.current = requestAnimationFrame(animate);
        };

        animFrameRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animFrameRef.current);
    }, [transitionPhase]);

    // Touch support
    const touchStartRef = useRef(0);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleTouchStart = (e: TouchEvent) => {
            if (transitionPhase !== "idle") return;
            touchStartRef.current = e.touches[0].clientY;
            pauseCtrl.current.pause();
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (transitionPhase !== "idle") return;
            e.preventDefault();
            const delta = (touchStartRef.current - e.touches[0].clientY) * 4;
            touchStartRef.current = e.touches[0].clientY;
            targetScrollZRef.current += delta;
            pauseCtrl.current.pause();
        };

        container.addEventListener("touchstart", handleTouchStart, { passive: false });
        container.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [transitionPhase]);

    const handleProductClick = (productId: string, slug: string) => {
        if (transitionPhase !== "idle") return;

        // Stop auto-scroll
        pauseCtrl.current.interacting.current = true;
        selectedSlugRef.current = slug;
        setSelectedProductId(productId);
        setTransitionPhase("fadeOthers");

        // Phase 2: After others fade, zoom selected product
        setTimeout(() => {
            setTransitionPhase("zoomSelected");
        }, 400);

        // Phase 3: Navigate after zoom animation
        setTimeout(() => {
            setTransitionPhase("navigating");
            router.push(`/prodotti/${slug}`);
        }, 1000);
    };

    const cameraZ = scrollZRef.current;
    const fov = 800;
    const depth = totalDepth.current;

    return (
        <div
            ref={containerRef}
            className="w-full h-full overflow-hidden relative"
            style={{ perspective: `${fov}px`, cursor: transitionPhase === "idle" ? "grab" : "default" }}
        >
            {positionsRef.current.map((item) => {
                if (depth <= 0) return null;

                let relativeZ = item.z - cameraZ;
                relativeZ = ((relativeZ % depth) + depth) % depth;
                if (relativeZ > depth / 2) {
                    relativeZ -= depth;
                }

                const scale = fov / (fov + relativeZ);
                if (scale <= 0 || scale > 8) return null;

                const projectedX = item.x * scale;
                const projectedY = item.y * scale;
                const size = item.baseSize * scale;

                let opacity = 1;
                const farFade = depth * 0.35;
                if (relativeZ > farFade) {
                    opacity = Math.max(0, 1 - (relativeZ - farFade) / (depth * 0.15));
                }
                if (opacity <= 0.01) return null;

                // Transition styles
                const isSelected = item.product.id === selectedProductId;
                const isTransitioning = transitionPhase !== "idle";

                let transitionOpacity = opacity;
                let transitionTransform = "translate(-50%, -50%)";
                let transitionStyle = "";
                let transitionLeft = `calc(50% + ${projectedX}px)`;
                let transitionTop = `calc(50% + ${projectedY}px)`;
                let transitionSize = size;

                if (isTransitioning && !isSelected) {
                    // Other products fade out
                    transitionOpacity = 0;
                    transitionStyle = "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
                }

                if (isSelected && (transitionPhase === "zoomSelected" || transitionPhase === "navigating")) {
                    // Selected product moves to center and scales up
                    transitionLeft = "50%";
                    transitionTop = "45%";
                    transitionSize = Math.min(450, size * 1.8);
                    transitionTransform = "translate(-50%, -50%) scale(1)";
                    transitionStyle = "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
                }

                if (isSelected && transitionPhase === "navigating") {
                    // Final phase: fade out selected product too
                    transitionOpacity = 0;
                    transitionStyle = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
                }

                return (
                    <div
                        key={item.product.id}
                        onClick={(e) => {
                            e.preventDefault();
                            handleProductClick(item.product.id, item.product.slug);
                        }}
                        className="product-item no-underline"
                        style={{
                            left: transitionLeft,
                            top: transitionTop,
                            width: `${transitionSize}px`,
                            height: `${transitionSize}px`,
                            transform: transitionTransform,
                            opacity: transitionOpacity,
                            zIndex: isSelected ? 99999 : Math.round(10000 - relativeZ),
                            transition: transitionStyle,
                            cursor: transitionPhase === "idle" ? "pointer" : "default",
                        }}
                    >
                        <div className="product-svg-wrapper">
                            <Image
                                src={item.product.image}
                                alt={item.product.name}
                                width={Math.round(transitionSize)}
                                height={Math.round(transitionSize)}
                                style={{
                                    objectFit: "contain",
                                    width: "100%",
                                    height: "100%",
                                    pointerEvents: "none",
                                }}
                                priority={relativeZ < 1000}
                            />
                        </div>
                        <span className="product-name-tooltip">{item.product.name}</span>
                    </div>
                );
            })}
        </div>
    );
}
