// section.sociedad-no-politica.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionSociedadNoPolitica = {
  id: "sociedad-no-politica-avances-democracia",
  participant: { name: "Jonathan Lora", code: "1-23-0430" },
  topic: "Participación de la sociedad no política en los avances de la democracia",
  mainImage: {
    src: "/images/sociedad-civil-democracia.jpg",
    alt: "Sociedad civil, medios y academia colaborando",
  },
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "Sociedad no política y democracia",
          subtitle: "Cómo influyen la sociedad civil, medios, academia y sector social",
          badges: ["Sección 6"],
          image: { src: "/images/cover-sociedad-civil.jpg", alt: "Red cívica" },
        },
      ],
    },

    // SLIDE 2 — ¿Quiénes son? (mapa de actores + ejemplos, todo en una lámina)
    {
      layout: SlideLayouts.GRID2,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué entendemos por sociedad no política?",
          text:
            "Conjunto de actores sociales que inciden en lo público sin formar parte directa de partidos, campañas o cargos estatales.",
        },
        {
          kind: BlockKinds.BULLETS,
          title: "Actores clave",
          items: [
            "Organizaciones de la sociedad civil (OSC) y ONG",
            "Medios de comunicación y prensa independiente",
            "Academia y centros de investigación",
            "Gremios, sindicatos y asociaciones comunitarias",
            "Iglesias y organizaciones de base",
            "Empresas con agendas de responsabilidad social",
            "Movimientos sociales y plataformas ciudadanas",
          ],
        },
      ],
    },

    // SLIDE 3 — Mecanismos de incidencia (transparencia, control, agenda)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "¿Cómo inciden en la democracia?",
          // behavior: "static", // <- descomenta para mostrar todo sin clics
          tabs: [
            {
              label: "Transparencia y control",
              blocks: [
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Monitoreo de políticas públicas y gasto.",
                    "Observación electoral y veedurías.",
                    "Litigio estratégico y denuncias de corrupción.",
                    "Datos abiertos, periodismo de investigación.",
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
                    "Investigación y evidencia para mejores leyes.",
                    "Foros, cabildos, presupuestos participativos.",
                    "Educación cívica y alfabetización mediática.",
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
                    "Campañas y movilización pacífica por derechos.",
                    "Alianzas público–sociales para entregar servicios.",
                    "Innovación cívica y tecnología para participación.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 4 — Impactos típicos (positivos y riesgos) en split
    {
      layout: SlideLayouts.SPLIT,
      blocks: [
        {
          kind: BlockKinds.SPLIT,
          title: "Impactos en la calidad democrática",
          left: {
            heading: "Aportes",
            items: [
              "Más transparencia y rendición de cuentas.",
              "Mayor inclusión de grupos históricamente excluidos.",
              "Alertas tempranas ante abusos o retrocesos.",
              "Mejor evidencia para decidir (investigación/academia).",
            ],
          },
          right: {
            heading: "Riesgos / límites",
            items: [
              "Captura o cooptación por élites y financiamiento opaco.",
              "Desinformación y pérdida de confianza pública.",
              "Fragmentación y duplicidad de esfuerzos.",
              "Criminalización o restricciones a OSC y prensa.",
            ],
          },
        },
      ],
    },

    // SLIDE 5 — Buenas prácticas + Cierre (todo en una lámina)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.BULLETS,
          title: "Buenas prácticas para potenciar su aporte",
          items: [
            "Registros y normas claras para OSC, con transparencia financiera.",
            "Protección a periodistas y defensores de DD. HH.",
            "Mesas mixtas Estado–academia–OSC para co-crear políticas.",
            "Ecosistemas de datos abiertos y evaluación independiente.",
            "Formación cívica continua y participación inclusiva.",
          ],
        },
        {
          kind: BlockKinds.CONCLUSION,
          title: "Cierre",
          text:
            "La sociedad no política fortalece la democracia cuando promueve información de calidad, participación pacífica y control ciudadano efectivo, sin sustituir a la representación ni a las instituciones.",
        },
      ],
    },
  ],
};

export default sectionSociedadNoPolitica;
