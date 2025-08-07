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

    // SLIDE 3 — Principios Fundamentales Parte 1 (usando TABS)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "Principios Fundamentales - Parte 1",
          tabs: [
            {
              label: "Soberanía y Participación",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Soberanía popular — El poder reside en el pueblo, ejercido directa o indirectamente mediante elecciones libres.",
                    "Participación ciudadana — Derecho de todos a participar en la vida política: voto, postulación, partidos y libre expresión.",
                    "Igualdad ante la ley — Mismos derechos y deberes sin discriminación por raza, género, religión, ideología, condición social u orientación sexual.",
                  ],
                },
              ],
            },
            {
              label: "Estado de Derecho",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Estado de derecho — Todos sometidos a la ley; instituciones independientes que la aplican con justicia, incluidos los gobernantes.",
                    "Respeto a los derechos humanos — Protección de libertades fundamentales: expresión, prensa, asociación, vida, educación y justicia.",
                    "Pluralismo político — Reconocimiento y respeto de partidos, ideologías y puntos de vista diversos; no se impone una sola visión.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 4 — Principios Fundamentales Parte 2 (usando TABS)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "Principios Fundamentales - Parte 2",
          tabs: [
            {
              label: "Transparencia y Cultura",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Elecciones libres y periódicas — Comicios limpios, transparentes y competitivos; garantías para candidatos y respeto al voto.",
                    "Transparencia y rendición de cuentas — Autoridades informan, permiten control ciudadano y responden ante la justicia por abusos.",
                    "Tolerancia y cultura democrática — Convivencia con respeto, diálogo y educación en valores democráticos.",
                  ],
                },
              ],
            },
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
