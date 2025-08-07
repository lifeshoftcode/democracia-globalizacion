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

    // SLIDE 3 — Influencia y Desafíos (usando TABS)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "Democracia en el mundo globalizado",
          tabs: [
            {
              label: "Influencia",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "La globalización difunde principios democráticos, multiplica redes y acelera flujos de información que impactan la política.",
                },
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Expansión de valores democráticos y fortalecimiento de redes pro-DD. HH.",
                    "Democratización de la información: internet/redes facilitan fiscalización y organización.",
                    "Interdependencia política y económica: decisiones de un país repercuten globalmente.",
                  ],
                },
              ],
            },
            {
              label: "Desafíos",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "Junto a los avances, emergen retos que tensionan la representación, las instituciones y la calidad del debate público.",
                },
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Crisis de representación: desconfianza hacia partidos tradicionales.",
                    "Populismo y autoritarismo: concentración de poder y debilitamiento institucional.",
                    "Desigualdad social: beneficios asimétricos que afectan la estabilidad democrática.",
                    "Ciberpolítica: desinformación, bots y manipulación digital de percepciones.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 4 — Cierre
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
