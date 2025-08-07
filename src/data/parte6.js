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

    // SLIDE 4 — Impactos típicos (positivos y riesgos) en tarjetas
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Impactos en la calidad democrática",
          cards: [
            {
              title: "Transparencia y rendición de cuentas",
              content: [
                "Mayor visibilidad del gasto público y decisiones gubernamentales",
                "Mecanismos de control ciudadano más efectivos"
              ],
              highlight: "positive",
              icon: "🔍"
            },
            {
              title: "Inclusión de grupos excluidos",
              content: [
                "Voz a minorías y sectores históricamente marginados",
                "Representación más diversa en la toma de decisiones"
              ],
              highlight: "positive",
              icon: "🤝"
            },
            {
              title: "Alertas tempranas",
              content: [
                "Detección temprana de abusos de poder",
                "Prevención de retrocesos democráticos"
              ],
              highlight: "positive",
              icon: "⚠️"
            },
            {
              title: "Evidencia para políticas",
              content: [
                "Investigación académica para mejores leyes",
                "Datos objetivos para la toma de decisiones"
              ],
              highlight: "positive",
              icon: "📊"
            },
            {
              title: "Captura y cooptación",
              content: [
                "Riesgo de financiamiento opaco por élites",
                "Pérdida de independencia e integridad"
              ],
              highlight: "negative",
              icon: "⚡"
            },
            {
              title: "Desinformación",
              content: [
                "Propagación de noticias falsas",
                "Erosión de la confianza pública en instituciones"
              ],
              highlight: "negative",
              icon: "📢"
            },
            {
              title: "Fragmentación",
              content: [
                "Duplicidad de esfuerzos entre organizaciones",
                "Falta de coordinación y coherencia"
              ],
              highlight: "negative",
              icon: "🔀"
            },
            {
              title: "Criminalización",
              content: [
                "Restricciones legales a OSC y prensa libre",
                "Persecución de defensores de derechos humanos"
              ],
              highlight: "negative",
              icon: "🚫"
            }
          ],
        },
      ],
    },

    // SLIDE 5 — Buenas prácticas (en tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "Buenas prácticas para potenciar su aporte",
          cards: [
            {
              title: "Marcos normativos claros",
              content: [
                "Registros transparentes para OSC con transparencia financiera obligatoria"
              ],
              highlight: "positive",
              icon: "📋"
            },
            {
              title: "Protección de defensores",
              content: [
                "Garantías legales para periodistas y defensores de DD. HH."
              ],
              highlight: "positive",
              icon: "🛡️"
            },
            {
              title: "Espacios de colaboración",
              content: [
                "Mesas mixtas Estado–academia–OSC para co-crear políticas"
              ],
              highlight: "positive",
              icon: "🤝"
            },
            {
              title: "Ecosistemas de datos",
              content: [
                "Plataformas de datos abiertos y sistemas de evaluación independiente"
              ],
              highlight: "positive",
              icon: "📊"
            },
            {
              title: "Educación cívica",
              content: [
                "Formación cívica continua y participación inclusiva"
              ],
              highlight: "positive",
              icon: "📚"
            }
          ],
        },
      ],
    },

    // SLIDE 6 — Cierre
    {
      layout: SlideLayouts.STACK,
      blocks: [
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
