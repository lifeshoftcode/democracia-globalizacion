// section.nelson.allcontent.js
import { BlockKinds, SlideLayouts } from "./slides.schema";

const sectionNelson = {
  id: "nelson-valores-fundamentales-democracia",
  participant: { name: "Nelson" },
  topic: "Valores fundamentales de la democracia",
  slides: [
    // SLIDE 1 — Cover
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.COVER,
          title: "Valores fundamentales de la democracia",
          subtitle: "Base ética para instituciones y ciudadanía",
          badges: ["Sección 4"],
          image: { src: "/images/cover-valores.jpg", alt: "Símbolos cívicos" },
        },
      ],
    },

    // SLIDE 2 — Introducción + Mapa de valores (todo en una lámina)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Introducción",
          text:
            "Los valores democráticos orientan el comportamiento de autoridades y ciudadanía. Sostienen la legitimidad, la igualdad y la participación en la vida pública.",
        },
        {
          kind: BlockKinds.BULLETS,
          title: "Valores clave",
          items: [
            "Libertad: ejercer derechos y expresarse sin coacciones.",
            "Igualdad y no discriminación: mismos derechos y trato para todas las personas.",
            "Justicia y legalidad: respeto a la ley y aplicación imparcial (Estado de derecho).",
            "Pluralismo y tolerancia: convivencia de ideas y proyectos diversos.",
            "Participación y representación: involucrarse y elegir autoridades.",
            "Transparencia y rendición de cuentas: información, control y respuesta ante abusos.",
            "Solidaridad y bien común: cooperación y prioridad a la dignidad humana.",
          ],
        },
      ],
    },

    // SLIDE 3 — Valores aplicados (instituciones y ciudadanía) en dos columnas
    {
      layout: SlideLayouts.GRID2,
      blocks: [
        {
          kind: BlockKinds.BULLETS,
          title: "En instituciones",
          items: [
            "Leyes claras y previsibles; jueces independientes.",
            "Gestión abierta de datos y procesos de contratación públicos.",
            "Elecciones libres, periódicas y competitivas.",
            "Políticas contra la discriminación y protección de DD. HH.",
          ],
        },
        {
          kind: BlockKinds.BULLETS,
          title: "En ciudadanía",
          items: [
            "Votar, informarse y deliberar con respeto.",
            "Participar en cabildos, veedurías y presupuestos participativos.",
            "Exigir cuentas sin violencia; usar vías institucionales.",
            "Defender el pluralismo y rechazar discursos de odio.",
          ],
        },
      ],
    },

    // SLIDE 4 — Tensiones y riesgos (para no perder los valores)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.PARAGRAPH,
          title: "Tensiones actuales",
          text:
            "La concentración de poder, la desinformación y las brechas socioeconómicas pueden erosionar libertad, igualdad y confianza pública.",
        },
        {
          kind: BlockKinds.BULLETS,
          title: "Riesgos típicos",
          items: [
            "Opacidad y captura institucional por élites.",
            "Desinformación y manipulación del debate público.",
            "Discriminación y exclusión que limitan la participación.",
            "Impunidad que debilita el Estado de derecho.",
          ],
        },
      ],
    },

    // SLIDE 5 — Cierre (síntesis + acciones)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.BULLETS,
          title: "Cómo fortalecerlos",
          items: [
            "Más datos abiertos y contraloría ciudadana.",
            "Educación cívica, alfabetización mediática y cultura del debate.",
            "Reglas claras de financiamiento político y conflicto de intereses.",
            "Instituciones independientes y justicia accesible.",
          ],
        },
        {
          kind: BlockKinds.CONCLUSION,
          title: "Cierre",
          text:
            "Los valores democráticos son practicables y medibles. Su protección requiere instituciones íntegras y ciudadanía activa, informada y solidaria.",
        },
      ],
    },
  ],
};

export default sectionNelson;
