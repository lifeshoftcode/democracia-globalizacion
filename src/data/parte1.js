// section.scarlin.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionScarlin = {
  id: "scarlin-democracia-globalizacion",
  participant: { name: "Scarlin" },
  topic: "Democracia y Globalización",
  mainImage: {
    src: "/images/democracia-globalizacion.jpg",
    alt: "Mundo interconectado y urna",
  },
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "Democracia y Globalización",
          subtitle: "Relación, ventajas, desafíos y adaptación",
          badges: ["Sección 1"],
          image: { src: "/images/democracia-globalizacion.jpg", alt: "Mapa y urnas" },
        },
      ],
    },

    // SLIDE 2 — Definiciones (dos columnas en la misma lámina)
    {
      layout: SlideLayouts.GRID2,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué es democracia?",
          text:
            "Sistema político en el que el poder reside en el pueblo, ejercido directa o indirectamente a través de representantes elegidos.",
          // Doc: L9
        },
        {
          kind: BlockKinds.BULLETS,
          items: [
            "Sufragio universal",
            "División de poderes",
            "Estado de derecho",
            "Respeto a los derechos humanos",
            "Participación ciudadana",
          ],
          // Doc: L11-L19
        },

        {
          kind: BlockKinds.PARAGRAPH,
          title: "¿Qué es globalización?",
          text:
            "Proceso de integración mundial en aspectos económicos, tecnológicos, culturales, sociales y políticos.",
          // Doc: L25
        },
        {
          kind: BlockKinds.BULLETS,
          items: [
            "Interdependencia económica (comercio, inversiones)",
            "Avances tecnológicos y de comunicación",
            "Movilidad internacional de personas, capitales e información",
            "Difusión cultural e ideológica",
          ],
          // Doc: L27-L33
        },
      ],
    },

    // SLIDE 3 — Impacto (usando TABS para mejor navegación)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "Relación democracia–globalización",
          tabs: [
            {
              label: "Aspectos Positivos",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "La globalización ha facilitado la expansión de valores democráticos y ha creado nuevos mecanismos de participación ciudadana.",
                },
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Difusión de valores democráticos (organismos, medios, internet)",
                    "Mayor presión por transparencia, DD. HH. y elecciones libres",
                    "Participación ciudadana global (redes, ONG)",
                  ],
                  // Doc: L47-L51
                },
              ],
            },
            {
              label: "Aspectos Negativos",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "Sin embargo, la globalización también presenta desafíos significativos para la autonomía democrática nacional.",
                },
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Pérdida de soberanía frente a actores globales (FMI, OMC, mercados)",
                    "Decisiones económicas clave fuera del voto popular",
                    "Desigualdad, populismo y nacionalismo como reacción",
                  ],
                  // Doc: L57-L63
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 4 — Efectos detallados (usando TABS para mejor organización)
    {
      layout: SlideLayouts.TABS,
      blocks: [
        {
          kind: BlockKinds.TABS,
          title: "Efectos de la globalización sobre la democracia",
          tabs: [
            {
              label: "Ventajas",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "La globalización fortalece la democracia al mejorar el acceso a la información y crear redes de apoyo internacional.",
                },
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Mayor acceso a la información ciudadana",
                    "Fomento de reformas en contextos autoritarios por presión internacional",
                    "Redes de solidaridad y cooperación que fortalecen sociedad civil",
                  ],
                  // Doc: L69-L74
                },
              ],
            },
            {
              label: "Desventajas",
              blocks: [
                {
                  kind: BlockKinds.PARAGRAPH,
                  text:
                    "Al mismo tiempo, genera nuevas formas de concentración de poder y exclusión que debilitan la participación democrática.",
                },
                {
                  kind: BlockKinds.BULLETS,
                  items: [
                    "Concentración de poder en grandes empresas y élites",
                    "Desigualdades que afectan la igualdad de participación",
                    "Debilitamiento de los estados nacionales",
                    "Desafección ciudadana (decisiones lejanas a sus intereses)",
                  ],
                  // Doc: L79-L85
                },
              ],
            },
          ],
        },
      ],
    },

    // SLIDE 5 — Adaptación + Cierre (dos bloques en la misma lámina)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.BULLETS,
          title: "Democracia en tiempos de globalización",
          items: [
            "Más participación y transparencia",
            "Reforzar instituciones nacionales y supranacionales",
            "Nuevos espacios de representación y deliberación",
            "Economía global más justa y sostenible",
          ],
          // Doc: L95-L103
        },
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Conclusión",
          text:
            "La globalización trae oportunidades y desafíos. El reto es construir una democracia más global, inclusiva y adaptada a los nuevos tiempos, sin perder su esencia participativa y ciudadana.",
          // Doc: (Conclusión)
        },
        // Puedes añadir una QUOTE si quieres remate
        // { kind: BlockKinds.QUOTE, text: "La democracia se renueva cuando...", cite: "Síntesis" },
      ],
    },
  ],
};

export default sectionScarlin;
