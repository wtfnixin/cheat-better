"use client";
import { useLanguage } from "@/context/LanguageContext";

interface ViewToggleProps {
    activeView: "spazio" | "griglia";
    onToggle: (view: "spazio" | "griglia") => void;
}

export default function ViewToggle({ activeView, onToggle }: ViewToggleProps) {
    const { t } = useLanguage();

    return (
        <div className="view-toggle">
            <button
                className={`view-toggle-btn ${activeView === "spazio" ? "active" : ""}`}
                onClick={() => onToggle("spazio")}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle
                        cx="8"
                        cy="8"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    />
                    <circle
                        cx="8"
                        cy="8"
                        r="7"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                    />
                </svg>
                {t.viewToggle.space}
            </button>
            <button
                className={`view-toggle-btn ${activeView === "griglia" ? "active" : ""}`}
                onClick={() => onToggle("griglia")}
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="1" y="1" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="9" y="1" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="1" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="9" y="9" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                {t.viewToggle.grid}
            </button>
        </div>
    );
}
