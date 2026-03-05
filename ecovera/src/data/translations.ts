export type Language = "it" | "en";

export interface Translations {
    // Navigation
    nav: {
        products: string;
        history: string;
        authors: string;
        exhibitions: string;
        news: string;
        contact: string;
    };
    // View toggle
    viewToggle: {
        space: string;
        grid: string;
    };
    // Product detail
    product: {
        description: string;
        technicalSheet: string;
        history: string;
        variants: string;
        category: string;
        designer: string;
        year: string;
        material: string;
        materialValue: string;
    };
    // Navigation overlay footer
    navFooter: {
        languageToggle: string;
        newsletter: string;
        privacyPolicy: string;
    };
    // Storia page
    storia: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
        year1966title: string;
        year1966: string;
        year1970title: string;
        year1970: string;
        year1972title: string;
        year1972: string;
        todayTitle: string;
        today: string;
    };
    // Autori page
    autori: {
        title: string;
    };
    // Mostre page
    mostre: {
        title: string;
    };
    // News page
    newsPage: {
        title: string;
    };
    // Contact page
    contatti: {
        title: string;
        headquarters: string;
        contactInfo: string;
        social: string;
        writeToUs: string;
        name: string;
        email: string;
        message: string;
        send: string;
    };
}

export const translations: Record<Language, Translations> = {
    it: {
        nav: {
            products: "PRODOTTI",
            history: "STORIA",
            authors: "AUTORI",
            exhibitions: "MOSTRE",
            news: "NEWS",
            contact: "CONTATTI",
        },
        viewToggle: {
            space: "SPAZIO",
            grid: "GRIGLIA",
        },
        product: {
            description: "DESCRIZIONE",
            technicalSheet: "SCHEDA TECNICA",
            history: "STORIA",
            variants: "VARIANTI",
            category: "Categoria",
            designer: "Designer",
            year: "Anno",
            material: "Materiale",
            materialValue: "Poliuretano espanso flessibile - Guflac®",
        },
        navFooter: {
            languageToggle: "ENGLISH",
            newsletter: "NEWSLETTER",
            privacyPolicy: "PRIVACY E COOKIE POLICY",
        },
        storia: {
            title: "STORIA",
            p1: "ECOVERA è stata fondata nel 1966 a Torino, nel cuore del movimento del design radicale. Fin dall'inizio, il marchio ha sfidato le norme del design convenzionale, trasformando oggetti quotidiani in provocatorie opere d'arte.",
            p2: "L'uso rivoluzionario del poliuretano espanso ha aperto nuove possibilità nel design del mobile, consentendo forme organiche ed estetiche surreali precedentemente impossibili da produrre.",
            p3: "Con pezzi iconici come il CACTUS® (1972), BOCCA (1970) e PRATONE (1971), Ecovera si è affermata come leader del design radicale, influenzando generazioni di designer in tutto il mondo.",
            year1966title: "1966",
            year1966: "Fondazione di Ecovera a Torino dai fratelli Gugliermetto. La rivoluzione del design radicale ha inizio.",
            year1970title: "1970",
            year1970: "Lancio di BOCCA, l'iconico divano a forma di labbra ispirato a Dalí. Un capolavoro pop art entra nel mondo del design.",
            year1972title: "1972",
            year1972: "Introduzione del CACTUS®, progettato da Drocco e Mello. Diventa uno degli oggetti di design più riconosciuti al mondo.",
            todayTitle: "Oggi",
            today: "Ecovera continua a spingersi oltre i confini, collaborando con artisti contemporanei e ampliando la sua collezione di icone del design radicale.",
        },
        autori: {
            title: "AUTORI",
        },
        mostre: {
            title: "MOSTRE",
        },
        newsPage: {
            title: "NEWS",
        },
        contatti: {
            title: "CONTATTI",
            headquarters: "SEDE",
            contactInfo: "CONTATTI",
            social: "SOCIAL",
            writeToUs: "SCRIVICI",
            name: "Nome",
            email: "Email",
            message: "Messaggio",
            send: "INVIA",
        },
    },
    en: {
        nav: {
            products: "PRODUCTS",
            history: "HISTORY",
            authors: "AUTHORS",
            exhibitions: "EXHIBITIONS",
            news: "NEWS",
            contact: "CONTACT",
        },
        viewToggle: {
            space: "SPACE",
            grid: "GRID",
        },
        product: {
            description: "DESCRIPTION",
            technicalSheet: "TECHNICAL SPECS",
            history: "HISTORY",
            variants: "VARIANTS",
            category: "Category",
            designer: "Designer",
            year: "Year",
            material: "Material",
            materialValue: "Flexible expanded polyurethane – Guflac®",
        },
        navFooter: {
            languageToggle: "ITALIANO",
            newsletter: "NEWSLETTER",
            privacyPolicy: "PRIVACY & COOKIE POLICY",
        },
        storia: {
            title: "HISTORY",
            p1: "ECOVERA was founded in 1966 in Turin, Italy, at the heart of the radical design movement. From the very beginning, the brand challenged conventional design norms, transforming everyday objects into provocative works of art.",
            p2: "The company's revolutionary use of polyurethane foam opened up new possibilities in furniture design, enabling organic forms and surreal aesthetics that were previously impossible to manufacture.",
            p3: "With iconic pieces like the CACTUS® (1972), BOCCA (1970), and PRATONE (1971), Ecovera established itself as a leader in radical design, influencing generations of designers worldwide.",
            year1966title: "1966",
            year1966: "Foundation of Ecovera in Turin by the Gugliermetto brothers. The radical design revolution begins.",
            year1970title: "1970",
            year1970: "Launch of BOCCA, the iconic lip-shaped sofa inspired by Dalí. A pop art masterpiece enters the design world.",
            year1972title: "1972",
            year1972: "Introduction of CACTUS®, designed by Drocco and Mello. It becomes one of the most recognized design objects globally.",
            todayTitle: "Today",
            today: "Ecovera continues to push boundaries, collaborating with contemporary artists and expanding its collection of radical design icons.",
        },
        autori: {
            title: "AUTHORS",
        },
        mostre: {
            title: "EXHIBITIONS",
        },
        newsPage: {
            title: "NEWS",
        },
        contatti: {
            title: "CONTACT",
            headquarters: "HEADQUARTERS",
            contactInfo: "CONTACT INFO",
            social: "SOCIAL",
            writeToUs: "WRITE TO US",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "SEND",
        },
    },
};
