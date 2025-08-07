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

    // SLIDE 2 — ¿Qué es la corrupción? (definición + formas en tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué es la corrupción?",
          text:
            "Uso indebido del poder público para obtener beneficios personales o de grupo; tiene efectos profundos y duraderos en la sociedad.",
        },
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Formas más frecuentes",
          cards: [
            {
              title: "Sobornos",
              content: [
                "Pagos ilegales para obtener favores",
                "Alteración de procesos de licitación"
              ],
              icon: "💰"
            },
            {
              title: "Malversación",
              content: [
                "Uso indebido de fondos públicos",
                "Desvío de recursos para beneficio personal"
              ],
              icon: "🏦"
            },
            {
              title: "Tráfico de influencias",
              content: [
                "Uso de posición para beneficiar terceros",
                "Aprovechamiento de contactos y redes"
              ],
              icon: "🤝"
            },
            {
              title: "Nepotismo",
              content: [
                "Favoritismo hacia familiares y allegados",
                "Contrataciones basadas en relaciones personales"
              ],
              icon: "👥"
            }
          ],
        },
      ],
    },

    // SLIDE 3 — ¿Por qué amenaza la democracia? (los 4 impactos en tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Por qué la corrupción amenaza la democracia?",
          cards: [
            {
              title: "Erosiona la confianza ciudadana",
              content: [
                "Debilita la confianza en instituciones públicas",
                "Desmoviliza la participación cívica y electoral"
              ],
         
              icon: "🏛️"
            },
            {
              title: "Aumenta la desigualdad",
              content: [
                "Recursos estatales se distribuyen de forma injusta",
                "Favorece a grupos privilegiados con conexiones"
              ],
              highlight: "negative",
              icon: "⚖️"
            },
            {
              title: "Erosiona el Estado de derecho",
              content: [
                "Leyes aplicadas de manera desigual y selectiva",
                "Impunidad para quienes tienen poder o influencias"
              ],
              highlight: "negative",
              icon: "📜"
            },
            {
              title: "Frena el desarrollo",
              content: [
                "Desalienta la inversión nacional e internacional",
                "Reduce la calidad de servicios públicos esenciales"
              ],
              highlight: "negative",
              icon: "📉"
            }
          ],
        },
      ],
    },

    // SLIDE 4 — Evidencia y ejemplos (en tarjetas)
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
          kind: BlockKinds.CARDS_GRID,
          title: "Casos relevantes",
          cards: [
            {
              title: "Caso Odebrecht",
              content: [
                "Red corrupta de gran escala en Latinoamérica",
                "Sobornos a funcionarios de múltiples países"
              ],
              highlight: "negative",
              icon: "🌎"
            },
            {
              title: "Papeles de Pandora",
              content: [
                "Revelación de paraísos fiscales y evasión",
                "Involucra líderes políticos a nivel mundial"
              ],
              highlight: "negative",
              icon: "📄"
            },
            {
              title: "República Dominicana",
              content: [
                "Demandas ciudadanas de transparencia",
                "Exigencias de mayor rendición de cuentas"
              ],
              highlight: "positive",
              icon: "🇩🇴"
            },
            {
              title: "Impacto social",
              content: [
                "Protestas masivas contra la corrupción",
                "Crisis de legitimidad institucional"
              ],
              highlight: "negative",
              icon: "👥"
            }
          ],
        },
      ],
    },

    // SLIDE 5 — ¿Qué podemos hacer? (acciones en tarjetas) + cierre
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Qué podemos hacer?",
          cards: [
            {
              title: "Exigir transparencia",
              content: [
                "Demandar transparencia activa del gobierno",
                "Promover el acceso a datos abiertos públicos"
              ],
              icon: "🔍"
            },
            {
              title: "Fortalecer instituciones",
              content: [
                "Apoyar instituciones independientes de control",
                "Respaldar un sistema de justicia autónomo"
              ],
              icon: "🏛️"
            },
            {
              title: "Defender la prensa libre",
              content: [
                "Proteger la libertad de prensa independiente",
                "Apoyar la investigación periodística de calidad"
              ],
              icon: "📰"
            },
            {
              title: "Promover educación cívica",
              content: [
                "Fomentar la educación cívica y participación",
                "Desarrollar una cultura de integridad pública"
              ],
              icon: "📚"
            }
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
