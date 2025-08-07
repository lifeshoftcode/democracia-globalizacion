// deck.cover.js (fragmento)
import { code } from "framer-motion/client";
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
          code: "1-25-1114",
          topic: "Democracia y Globalización"
        },
        {
          name: "Johany De Jesús Castillo",
          code: "1-23-8053",
          topic: "Modelos e influencia"
        },
        {
          name: "Rosanny Ramos Medina",
          code: "1-22-2812",
          topic: "Principios de la democracia"
        },
        {
          name: "NELSON RAFAEL GUZMAN GABO",
          code: "1-23-0631",
          topic: "Valores fundamentales"
        },
        {
          name: "Christopher Díaz",
          code: "1-23-2894",
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
