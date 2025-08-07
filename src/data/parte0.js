// deck.cover.js (fragmento)
import { BlockKinds, SlideLayouts } from "./slides.schema";

export const deckCover = {
  layout: SlideLayouts.STACK,
  blocks: [
    {
      kind: BlockKinds.COVER,
      title: "Democracia y Globalización",
      subtitle: "Síntesis, principios y desafíos en un mundo interconectado",
      badges: ["Universidad Tecnológica de Santiago", "8 de agosto 2025"],
    },
    {
      kind: BlockKinds.PARTICIPANTS_GRID,
      title: "Participantes",
      participants: [
        {
          name: "Scarlin",
          topic: "Democracia y Globalización"
        },
        {
          name: "Johany De Jesús Castillo",
          topic: "Modelos e influencia"
        },
        {
          name: "Rosanny Ramos Medina",
          topic: "Principios de la democracia"
        },
        {
          name: "Nelson",
          topic: "Valores fundamentales"
        },
        {
          name: "Christopher Díaz",
          topic: "Corrupción y democracia"
        },
        {
          name: "Jonathan Lora",
          code: "1-23-0430",
          topic: "Sociedad no política y avances"
        },
      ],
    },
  ],
};

export default deckCover;
