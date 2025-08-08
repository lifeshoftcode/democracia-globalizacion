// section.nelson.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionNelson = {
  id: "nelson-valores-fundamentales-democracia",
  participant: { name: "Nelson Rafael Guzmán Gabo", id: "1-23-0631" },
  topic: "Valores fundamentales de la democracia",
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
            title: "Valores fundamentales de la democracia",
            subtitle: "Base ética y social de la convivencia democrática",
            badges: ["Sección 4", "Nelson"],
            image: { src: "/images/cover-valores.jpg", alt: "Símbolos cívicos" },
        },
      ],
    },

    // SLIDE 2 — Introducción + Definición
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué es la democracia?",
          text:
            "La democracia es una forma de gobierno en la que el pueblo tiene el poder de tomar decisiones, ya sea directamente o mediante representantes electos. Todas las personas poseen los mismos derechos, pueden expresar sus ideas libremente y participar en las decisiones que afectan a la sociedad.",
        },
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué son los valores democráticos?",
          text:
            "Son principios éticos y sociales que orientan el funcionamiento de una sociedad democrática. No solo se reflejan en leyes e instituciones, sino también en la cultura política, el comportamiento ciudadano y el respeto por los derechos humanos.",
        },
      ],
    },

    // SLIDE 3 — Valores fundamentales (tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Valores fundamentales de la democracia",
          cards: [
            {
              title: "Libertad",
              content: [
                "Expresarse, reunirse y opinar sin temor a represalias",
                "Incluye libertades de prensa, religiosa y participación política"
              ],
              highlight: "positive",
              icon: "🕊"
            },
            {
              title: "Igualdad",
              content: [
                "Mismos derechos y deberes ante la ley",
                "Igualdad de oportunidades sin discriminación"
              ],
              highlight: "positive",
              icon: "⚖"
            },
            {
              title: "Participación",
              content: [
                "Derecho y deber de involucrarse en la vida pública",
                "Voto, debate, protesta pacífica y servicio público"
              ],
              highlight: "positive",
              icon: "🗳"
            },
            {
              title: "Tolerancia",
              content: [
                "Respeto a ideas y creencias distintas",
                "Clave para convivir en sociedades diversas"
              ],
              highlight: "positive",
              icon: "🕊️"
            },
            {
              title: "Justicia",
              content: [
                "Trato justo y acceso imparcial al sistema legal",
                "Previene abusos y protege derechos humanos"
              ],
              highlight: "positive",
              icon: "⚖️"
            },
            {
              title: "Pluralismo",
              content: [
                "Reconoce diversidad de ideas, culturas y proyectos",
                "Fomenta diálogo y riqueza democrática"
              ],
              highlight: "positive",
              icon: "🔁"
            },
            {
              title: "Estado de derecho",
              content: [
                "Todas las personas y autoridades sometidas a la ley",
                "Garantiza legalidad, transparencia y rendición de cuentas"
              ],
              highlight: "positive",
              icon: "📜"
            }
          ],
        },
      ],
    },

    // SLIDE 4 — Importancia (tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Por qué son importantes?",
          cards: [
            {
              title: "Fortalecen instituciones",
              content: [
                "Hacen reglas claras y estables",
                "Generan confianza pública"
              ],
              highlight: "positive",
              icon: "🏛"
            },
            {
              title: "Fomentan paz social",
              content: [
                "Canalizan conflictos por vías legales",
                "Reducen violencia y arbitrariedad"
              ],
              highlight: "positive",
              icon: "🕊"
            },
            {
              title: "Impulsan ciudadanía activa",
              content: [
                "Forman personas críticas y responsables",
                "Promueven compromiso cívico sostenido"
              ],
              highlight: "positive",
              icon: "👥"
            }
          ],
        },
      ],
    },

    // SLIDE 5 — Cierre
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CONCLUSION,
          title: "Cierre",
          text:
            "Los valores democráticos sostienen la legitimidad institucional y la convivencia pacífica. Defenderlos exige instituciones íntegras y ciudadanía informada, participativa y respetuosa de la diversidad.",
        },
      ],
    },
  ],
};

export default sectionNelson;
