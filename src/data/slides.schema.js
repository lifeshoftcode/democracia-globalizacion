// slides.schema.js
/**
 * Modelo compacto para presentaciones:
 * - Un "slide" puede contener VARIOS "blocks" (paragraph, bullets, split, tabs, image, quote, cover).
 * - Así puedes combinar en la misma lámina párrafos, listas, columnas, etc.
 *
 * Recomendación de layouts:
 *  - STACK  : bloques apilados (uno debajo del otro)
 *  - GRID2  : dos columnas equilibradas (ideal para dos listas o lista + párrafo)
 *  - SPLIT  : bloque único de tipo split (left/right)
 *  - TABS   : pestañas (puede mostrarse sin interacción con behavior: "static")
 */

export const BlockKinds = {
  COVER: "cover",        // { title, subtitle?, badges?[], image?{src,alt} }
  PARAGRAPH: "paragraph",// { title?, text }
  BULLETS: "bullets",    // { title?, items: string[] }
  SPLIT: "split",        // { title?, left:{heading?, items[]}, right:{heading?, items[]} }
  TABS: "tabs",          // { title?, behavior?: 'static'|'tabs'|'accordion'|'steps', tabs: [{ label, blocks: Block[] }], autoCycleMs? }
  IMAGE: "image",        // { title?, caption?, src, alt }
  QUOTE: "quote",        // { text, cite? }
  CONCLUSION: "conclusion", // { title?, text, highlight? } - Para cierres y conclusiones especiales
  PARTICIPANTS_GRID: "participants_grid", // { title?, participants: [{name, topic, code?}] }
  CARDS_GRID: "cards_grid", // { title?, cards: [{title, content, highlight?, icon?}] }
};

export const SlideLayouts = {
  STACK: "stack",    // bloques uno debajo del otro
  GRID2: "grid-2",   // dos columnas equilibradas
  SPLIT: "split-2",  // left/right (usa típicamente BlockKinds.SPLIT)
  TABS: "tabs",      // contenedor de pestañas
};

/** =========================================
 * Shapes (JSDoc) para autocompletado opcional
 * ========================================= */

/**
 * @typedef {Object} CoverBlock
 * @property {'cover'} kind
 * @property {string} title
 * @property {string=} subtitle
 * @property {string[]=} badges
 * @property {{src:string, alt:string}=} image
 */

/**
 * @typedef {Object} ParagraphBlock
 * @property {'paragraph'} kind
 * @property {string=} title
 * @property {string} text
 */

/**
 * @typedef {Object} BulletsBlock
 * @property {'bullets'} kind
 * @property {string=} title
 * @property {string[]} items
 */

/**
 * @typedef {Object} SplitBlock
 * @property {'split'} kind
 * @property {string=} title
 * @property {{heading?:string, items:string[]}} left
 * @property {{heading?:string, items:string[]}} right
 */

/**
 * @typedef {Object} TabsBlock
 * @property {'tabs'} kind
 * @property {string=} title
 * @property {'static'|'tabs'|'accordion'|'steps'=} behavior  // 'static' = sin clics
 * @property {number=} autoCycleMs  // opcional: rotación automática si usas 'tabs' o 'steps'
 * @property {{label:string, blocks:Array<Block> }[]} tabs
 */

/**
 * @typedef {Object} ImageBlock
 * @property {'image'} kind
 * @property {string=} title
 * @property {string=} caption
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} QuoteBlock
 * @property {'quote'} kind
 * @property {string} text
 * @property {string=} cite
 */

/**
 * @typedef {Object} CardsGridBlock
 * @property {'cards_grid'} kind
 * @property {string=} title
 * @property {{title:string, content:string[], highlight?:string, icon?:string}[]} cards
 */

/**
 * @typedef {CoverBlock|ParagraphBlock|BulletsBlock|SplitBlock|TabsBlock|ImageBlock|QuoteBlock|CardsGridBlock} Block
 */

/**
 * @typedef {Object} Slide
 * @property {'stack'|'grid-2'|'split-2'|'tabs'} layout
 * @property {Block[]} blocks
 */

/**
 * @typedef {Object} Section
 * @property {string} id
 * @property {{name:string, code?:string}} participant
 * @property {string} topic
 * @property {{src:string, alt:string}=} mainImage
 * @property {Slide[]} slides
 */

/** Ejemplo mínimo de sección (referencia):
const exampleSection = {
  id: "ejemplo",
  participant: { name: "Nombre Apellido" },
  topic: "Tema de ejemplo",
  mainImage: { src: "/images/example.jpg", alt: "Descripción" },
  slides: [
    {
      layout: SlideLayouts.STACK,
      blocks: [
        { kind: BlockKinds.COVER, title: "Título", subtitle: "Subtítulo" },
        { kind: BlockKinds.PARAGRAPH, title: "Intro", text: "Texto..." },
      ],
    },
  ],
};
*/

const slidesSchema = {};
export default slidesSchema;
