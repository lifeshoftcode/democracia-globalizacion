// section.sociedad-no-politica.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionSociedadNoPolitica = {
  id: "sociedad-no-politica-avances-democracia",
  participant: { name: "Jonathan Lora", code: "1-23-0430" },
  topic: "Participación de la sociedad no política en los avances de la democracia",
  mainImage: {
    src: "/images/sociedad-civil-democracia.png",
    alt: "Sociedad civil, medios y academia colaborando",
  },
  slides: [
    // SLIDE 1 — Cover (sin intro redundante)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "Sociedad no política y democracia",
          subtitle:
            "Más allá de los partidos: actores sociales que influyen en lo público",
          badges: ["Sección 6"],
          image: { src: "/images/sociedad-civil-democracia.png", alt: "Red cívica" },
        },
      ],
    },

    // SLIDE 2 — ¿Quiénes son? (lista compacta)
    {
      layout: SlideLayouts.GRID2,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué es la sociedad no política?",
          text:
            "Actores que inciden en lo público sin pertenecer a partidos ni ocupar cargos.",
        },
        {
          kind: BlockKinds.BULLETS,
          title: "Actores clave",
          items: [
            "OSC/ONG",
            "Medios y prensa",
            "Academia (universidades/centros)",
            "Gremios y comunidades",
            "Empresas con RSE",
          ],
        },
      ],
    },

    // SLIDE 3 — ¿Cómo inciden? (frases cortas)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "¿Cómo inciden en la democracia?",
          tabs: [
            {
              label: "Transparencia y control",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Vigilancia de gasto y políticas",
                    "Observación electoral independiente",
                    "Denuncias e investigaciones públicas",
                  ],
                },
              ],
            },
            {
              label: "Agenda y deliberación",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Evidencia para mejores leyes",
                    "Foros y presupuestos participativos",
                    "Educación cívica y mediática",
                  ],
                },
              ],
            },
            {
              label: "Movilización y servicios",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Campañas pacíficas por derechos",
                    "Alianzas público–sociales",
                    "Tecnología cívica para participar",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 4 — Impactos (6 tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Impactos en la calidad democrática",
          cards: [
            {
              title: "Transparencia",
              content: ["Más visibilidad del gasto", "Mejor rendición de cuentas"],
              highlight: "positive",
              icon: "🔍",
            },
            {
              title: "Inclusión",
              content: ["Voz a grupos excluidos", "Decisiones más diversas"],
              highlight: "positive",
              icon: "🤝",
            },
            {
              title: "Evidencia",
              content: ["Investigación rigurosa", "Datos para decidir"],
              highlight: "positive",
              icon: "📊",
            },
            {
              title: "Captura/Cooptación",
              content: ["Financiamiento opaco", "Pérdida de independencia"],
              highlight: "negative",
              icon: "⚡",
            },
            {
              title: "Desinformación",
              content: ["Noticias falsas", "Erosión de confianza"],
              highlight: "negative",
              icon: "📢",
            },
            {
              title: "Criminalización",
              content: ["Restricciones a OSC y prensa", "Persecución de defensores"],
              highlight: "negative",
              icon: "🚫",
            },
          ],
        },
      ],
    },

    // SLIDE 5 — Buenas prácticas (1 línea por tarjeta)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Buenas prácticas para potenciar su aporte",
          cards: [
            {
              title: "Leyes claras",
              content: ["Registros y finanzas transparentes"],
              highlight: "positive",
              icon: "📋",
            },
            {
              title: "Protección de defensores",
              content: ["Garantías a periodistas y activistas"],
              highlight: "positive",
              icon: "🛡️",
            },
            {
              title: "Colaboración",
              content: ["Mesas Estado–academia–sociedad civil"],
              highlight: "positive",
              icon: "🤝",
            },
            {
              title: "Datos abiertos",
              content: ["Plataformas y evaluación independiente"],
              highlight: "positive",
              icon: "📊",
            },
            {
              title: "Educación cívica",
              content: ["Formación continua e inclusiva"],
              highlight: "positive",
              icon: "📚",
            },
          ],
        },
      ],
    },

    // SLIDE 6 — Cierre (1 frase)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CONCLUSION,
          title: "Cierre",
          text:
            "La sociedad no política complementa y fortalece a las instituciones con información, participación y control ciudadano.",
        },
      ],
    },
  ],
};

export default sectionSociedadNoPolitica;
