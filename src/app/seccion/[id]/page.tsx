import { SeccionPageClient } from '@/components/SeccionPageClient';

const sections = [
  { 
    id: 'principios-democracia', 
    title: 'Principios de la Democracia',
    author: 'Rosanny Ramos Medina',
  }
  // Agregar más investigaciones aquí
];

// Generate static params for static export
export function generateStaticParams() {
  return sections.map((section) => ({
    id: section.id,
  }));
}

export default function SeccionPage() {
  return <SeccionPageClient />;
}
