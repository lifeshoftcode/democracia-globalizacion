// section.rosanny.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionRosanny = {
  id: "rosanny-principios-democracia",
  participant: { name: "Rosanny Ramos Medina", code: "1-22-2812" },
  topic: "Principios de la Democracia",
  mainImage: {
    src: "/images/principios-democracia.jpg",
    alt: "Símbolos democráticos y ciudadanía",
  },
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "Principios de la Democracia",
          subtitle: "Fundamentos para un sistema justo, libre y participativo",
          badges: ["Sección 3"],
          image: { src: "/images/principios-democracia.jpg", alt: "Balanza y urna" },
        },
      ],
    },

    // SLIDE 2 — Introducción
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Introducción",
          text:
            "Los principios de la democracia son los fundamentos que garantizan el funcionamiento justo, libre y participativo de un sistema democrático.",
        },
      ],
    },

    // SLIDE 3 — Principios Fundamentales (en tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Principios Fundamentales de la Democracia",
          cards: [
            {
              title: "Soberanía popular",
              content: [
                "El poder reside en el pueblo",
                "Ejercido directa o indirectamente mediante elecciones libres"
              ],
              highlight: "positive",
              icon: "👑"
            },
            {
              title: "Participación ciudadana",
              content: [
                "Derecho de todos a participar en la vida política",
                "Voto, postulación, partidos y libre expresión"
              ],
              highlight: "positive",
              icon: "🗳️"
            },
            {
              title: "Igualdad ante la ley",
              content: [
                "Mismos derechos y deberes para todos",
                "Sin discriminación por raza, género, religión o condición social"
              ],
              highlight: "positive",
              icon: "⚖️"
            },
            {
              title: "Estado de derecho",
              content: [
                "Todos sometidos a la ley, incluidos los gobernantes",
                "Instituciones independientes que aplican justicia"
              ],
              highlight: "positive",
              icon: "🏛️"
            },
            {
              title: "Derechos humanos",
              content: [
                "Protección de libertades fundamentales",
                "Expresión, prensa, asociación, vida, educación y justicia"
              ],
              highlight: "positive",
              icon: "🛡️"
            },
            {
              title: "Pluralismo político",
              content: [
                "Reconocimiento de partidos e ideologías diversas",
                "No se impone una sola visión política"
              ],
              highlight: "positive",
              icon: "🌈"
            }
          ],
        },
      ],
    },

    // SLIDE 4 — Principios Operativos (en tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Principios Operativos para la Democracia",
          cards: [
            {
              title: "Elecciones libres",
              content: [
                "Comicios limpios, transparentes y competitivos",
                "Garantías para candidatos y respeto al voto"
              ],
              highlight: "positive",
              icon: "🗳️"
            },
            {
              title: "Transparencia",
              content: [
                "Autoridades informan sobre sus decisiones",
                "Acceso ciudadano a información pública"
              ],
              highlight: "positive",
              icon: "🔍"
            },
            {
              title: "Rendición de cuentas",
              content: [
                "Control ciudadano sobre las autoridades",
                "Responden ante la justicia por abusos"
              ],
              highlight: "positive",
              icon: "📊"
            },
            {
              title: "Cultura democrática",
              content: [
                "Convivencia con respeto y diálogo",
                "Educación en valores democráticos"
              ],
              highlight: "positive",
              icon: "🤝"
            }
          ],
        },
      ],
    },

    // SLIDE 5 — Síntesis y Reflexión
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CONCLUSION,
          title: "Síntesis",
          text:
            "Estos principios sostienen la legitimidad y eficacia del sistema democrático; aplicarlos de forma coherente asegura participación, igualdad y protección de derechos en una sociedad democrática moderna.",
        },
      ],
    },
  ],
};

export default sectionRosanny;
