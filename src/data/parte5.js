// section.christopher.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionChristopher = {
  id: "christopher-corrupcion-amenaza-democracia",
  participant: { name: "Christopher Diaz", code: "1-23-2894" },
  topic: "La corrupción como amenaza a la democracia",
  mainImage: {
    src: "/images/corrupcion-democracia.jpg",
    alt: "Sellos oficiales, manos y urna",
  },
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "La corrupción como amenaza a la democracia",
          subtitle: "Definición, impactos, ejemplos y qué hacer",
          badges: ["Sección 5"],
          image: { src: "/images/corrupcion-democracia.jpg", alt: "Símbolos de integridad pública" },
        },
      ],
    },

    // SLIDE 2 — ¿Qué es la corrupción? (definición + formas)
    {
      layout: SlideLayouts.GRID2,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué es la corrupción?",
          text:
            "Uso indebido del poder público para obtener beneficios personales o de grupo; tiene efectos profundos y duraderos en la sociedad.",
        },
        {
          kind: BlockKinds.BULLETS,
          title: "Formas frecuentes",
          items: [
            "Sobornos y malversación de fondos",
            "Tráfico de influencias",
            "Nepotismo y favoritismos",
          ],
        },
      ],
    },

    // SLIDE 3 — ¿Por qué amenaza la democracia? (los 4 impactos)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.BULLETS,
          title: "Impactos clave",
          items: [
            "Debilita la confianza en instituciones y desmoviliza la participación cívica.",
            "Aumenta la desigualdad: recursos estatales se distribuyen de forma injusta.",
            "Erosiona el Estado de derecho: leyes aplicadas de manera desigual y selectiva.",
            "Frena el desarrollo económico y social: desalienta inversión y reduce calidad de servicios.",
          ],
        },
      ],
    },

    // SLIDE 4 — Evidencia y ejemplos (todo junto)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Evidencia y ejemplos",
          text:
            "La corrupción ha provocado protestas masivas, crisis institucionales e incluso golpes de Estado en distintos países.",
        },
        {
          kind: BlockKinds.BULLETS,
          items: [
            "Casos internacionales: Odebrecht y Papeles de Pandora exhiben redes corruptas de gran escala.",
            "En República Dominicana: la sociedad demanda mayor transparencia y rendición de cuentas.",
          ],
        },
      ],
    },

    // SLIDE 5 — ¿Qué podemos hacer? (acciones) + cierre
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.BULLETS,
          title: "Acciones prioritarias",
          items: [
            "Exigir transparencia activa y datos abiertos.",
            "Apoyar instituciones independientes de control y justicia.",
            "Defender la libertad de prensa y la investigación periodística.",
            "Promover educación cívica y cultura de integridad.",
          ],
        },
        {
          kind: BlockKinds.CONCLUSION,
          title: "Cierre",
          text:
            "Combatir la corrupción es tarea compartida entre Estado y ciudadanía. Fortalecer controles, informar y participar protege la legitimidad y eficacia de la democracia.",
        },
      ],
    },
  ],
};

export default sectionChristopher;
