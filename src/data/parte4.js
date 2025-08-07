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

    // SLIDE 2 — Introducción + Mapa de valores (en tarjetas)
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
          kind: BlockKinds.CARDS_GRID,
          title: "Valores clave de la democracia",
          cards: [
            {
              title: "Libertad",
              content: [
                "Ejercer derechos sin coacciones externas",
                "Expresarse libremente y tomar decisiones autónomas"
              ],
              highlight: "positive",
              icon: "🕊️"
            },
            {
              title: "Igualdad",
              content: [
                "Mismos derechos y trato para todas las personas",
                "No discriminación por origen, género o condición"
              ],
              highlight: "positive",
              icon: "⚖️"
            },
            {
              title: "Justicia y legalidad",
              content: [
                "Respeto a la ley y aplicación imparcial",
                "Estado de derecho efectivo y accesible"
              ],
              highlight: "positive",
              icon: "🏛️"
            },
            {
              title: "Pluralismo",
              content: [
                "Convivencia de ideas y proyectos diversos",
                "Tolerancia y respeto a la diferencia"
              ],
              highlight: "positive",
              icon: "🌈"
            },
            {
              title: "Participación",
              content: [
                "Involucrarse activamente en la vida pública",
                "Elegir autoridades y representantes"
              ],
              highlight: "positive",
              icon: "🗳️"
            },
            {
              title: "Transparencia",
              content: [
                "Acceso a información pública",
                "Rendición de cuentas y control ciudadano"
              ],
              highlight: "positive",
              icon: "🔍"
            }
          ],
        },
      ],
    },

    // SLIDE 3 — Valores aplicados (instituciones y ciudadanía) en tarjetas
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Cómo se aplican estos valores?",
          cards: [
            {
              title: "Leyes claras y predecibles",
              content: [
                "Marco jurídico transparente y accesible",
                "Jueces independientes e imparciales"
              ],
              highlight: "positive",
              icon: "📜"
            },
            {
              title: "Gestión pública abierta",
              content: [
                "Datos abiertos y procesos transparentes",
                "Contratación pública clara y competitiva"
              ],
              highlight: "positive",
              icon: "🏢"
            },
            {
              title: "Elecciones libres",
              content: [
                "Procesos electorales periódicos y competitivos",
                "Garantías para la participación ciudadana"
              ],
              highlight: "positive",
              icon: "🗳️"
            },
            {
              title: "Protección de derechos",
              content: [
                "Políticas contra la discriminación",
                "Defensa activa de los derechos humanos"
              ],
              highlight: "positive",
              icon: "🛡️"
            },
            {
              title: "Participación ciudadana",
              content: [
                "Votar, informarse y deliberar con respeto",
                "Cabildos, veedurías y presupuestos participativos"
              ],
              highlight: "positive",
              icon: "👥"
            },
            {
              title: "Control ciudadano",
              content: [
                "Exigir cuentas por vías institucionales",
                "Defender pluralismo y rechazar discursos de odio"
              ],
              highlight: "positive",
              icon: "👁️"
            }
          ],
        },
      ],
    },

    // SLIDE 4 — Tensiones y riesgos (en tarjetas)
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
          kind: BlockKinds.CARDS_GRID,
          title: "Riesgos para los valores democráticos",
          cards: [
            {
              title: "Opacidad institucional",
              content: [
                "Falta de transparencia en la gestión pública",
                "Captura de instituciones por élites económicas"
              ],
              highlight: "negative",
              icon: "🔒"
            },
            {
              title: "Desinformación",
              content: [
                "Manipulación del debate público",
                "Noticias falsas que erosionan la confianza"
              ],
              highlight: "negative",
              icon: "📢"
            },
            {
              title: "Discriminación",
              content: [
                "Exclusión de grupos vulnerables",
                "Limitaciones a la participación equitativa"
              ],
              highlight: "negative",
              icon: "🚫"
            },
            {
              title: "Impunidad",
              content: [
                "Debilitamiento del Estado de derecho",
                "Falta de consecuencias por abusos de poder"
              ],
              highlight: "negative",
              icon: "⚖️"
            }
          ],
        },
      ],
    },

    // SLIDE 5 — Cierre (síntesis + acciones en tarjetas)
    {
      layout: SlideLayouts.STACK,
      blocks: [
        {
          kind: BlockKinds.CARDS_GRID,
          title: "¿Cómo fortalecerlos?",
          cards: [
            {
              title: "Transparencia activa",
              content: [
                "Promover más datos abiertos gubernamentales",
                "Fortalecer la contraloría ciudadana"
              ],
              highlight: "positive",
              icon: "📊"
            },
            {
              title: "Educación cívica",
              content: [
                "Alfabetización mediática y pensamiento crítico",
                "Cultura del debate respetuoso y constructivo"
              ],
              highlight: "positive",
              icon: "📚"
            },
            {
              title: "Reglas claras",
              content: [
                "Financiamiento político transparente",
                "Normas sobre conflicto de intereses"
              ],
              highlight: "positive",
              icon: "📋"
            },
            {
              title: "Instituciones fuertes",
              content: [
                "Organismos independientes de control",
                "Sistema de justicia accesible y efectivo"
              ],
              highlight: "positive",
              icon: "🏛️"
            }
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
