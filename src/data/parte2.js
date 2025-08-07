// section.johany.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionJohany = {
  id: "johany-modelos-democracia-influencia",
  participant: { name: "Johany De Jesús Castillo", code: "1-23-8053" },
  topic: "Modelos de la Democracia e Influencia en el mundo globalizado",
  mainImage: {
    src: "/images/modelos-democracia.jpg",
    alt: "Iconos cívicos y globo interconectado",
  },
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "Modelos de la Democracia",
          subtitle: "Y su influencia en el mundo globalizado de hoy",
          badges: ["Sección 2"],
          image: { src: "/images/modelos-democracia.jpg", alt: "Símbolos democráticos" },
        },
      ],
    },

    // SLIDE 2 — Modelos (agrupados en TABS para compactar; puedes mostrarlos estáticos)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "Modelos de la Democracia",
          // behavior: "static", // si quieres mostrarlos todos sin clics
          tabs: [
            {
              label: "Representativa",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "Modelo más extendido: la ciudadanía elige representantes (legisladores, presidentes) que deciden en su nombre.",
                },
              ],
            },
            {
              label: "Directa",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "La ciudadanía participa de forma directa en decisiones públicas mediante referéndums, plebiscitos o asambleas.",
                },
              ],
            },
            {
              label: "Participativa",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "Amplía la intervención ciudadana entre elecciones: presupuestos participativos, cabildos abiertos, consejos y consultas.",
                },
              ],
            },
            {
              label: "Deliberativa",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "Enfatiza el diálogo público informado y la argumentación racional entre ciudadanía y autoridades antes de decidir.",
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 3 — Influencias positivas de la globalización
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Influencias positivas de la globalización",
          text:
            "La globalización ha creado nuevas oportunidades para fortalecer y expandir los valores democráticos a nivel mundial.",
        },
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Cómo beneficia la globalización a la democracia?",
          cards: [
            {
              title: "Expansión democrática",
              content: [
                "Difusión global de valores democráticos",
                "Fortalecimiento de redes pro-derechos humanos"
              ],
              highlight: "positive",
              icon: "🌍"
            },
            {
              title: "Democratización digital",
              content: [
                "Internet facilita fiscalización ciudadana",
                "Redes sociales permiten mejor organización cívica"
              ],
              highlight: "positive",
              icon: "💻"
            },
            {
              title: "Interdependencia global",
              content: [
                "Decisiones nacionales repercuten mundialmente",
                "Cooperación internacional en temas comunes"
              ],
              highlight: "positive",
              icon: "🔗"
            },
            {
              title: "Acceso a información",
              content: [
                "Mayor transparencia en procesos políticos",
                "Ciudadanía mejor informada para decidir"
              ],
              highlight: "positive",
              icon: "📡"
            }
          ],
        },
      ],
    },

    // SLIDE 4 — Desafíos de la globalización
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Desafíos de la globalización",
          text:
            "Junto a los avances, emergen retos significativos que tensionan la representación, las instituciones y la calidad del debate democrático.",
        },
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Qué amenazas presenta la globalización?",
          cards: [
            {
              title: "Crisis de representación",
              content: [
                "Creciente desconfianza hacia partidos tradicionales",
                "Brecha entre élites políticas y ciudadanía"
              ],
              highlight: "negative",
              icon: "🏛️"
            },
            {
              title: "Populismo y autoritarismo",
              content: [
                "Concentración excesiva de poder ejecutivo",
                "Debilitamiento de instituciones democráticas"
              ],
              highlight: "negative",
              icon: "⚡"
            },
            {
              title: "Desigualdad social",
              content: [
                "Beneficios asimétricos de la globalización",
                "Tensiones que afectan estabilidad democrática"
              ],
              highlight: "negative",
              icon: "📊"
            },
            {
              title: "Ciberpolítica tóxica",
              content: [
                "Desinformación y manipulación digital",
                "Bots y algoritmos distorsionan debate público"
              ],
              highlight: "negative",
              icon: "🤖"
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
            "Los modelos democrático–representativo, directo, participativo y deliberativo coexisten y se reconfiguran en la globalización. El reto es equilibrar participación informada, instituciones robustas y equidad para sostener legitimidad y eficacia democrática.",
        },
      ],
    },
  ],
};

export default sectionJohany;
