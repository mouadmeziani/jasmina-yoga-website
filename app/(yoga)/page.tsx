'use client';
import { AboveTheFold } from '@/components/AboveTheFold';
import { BioSection } from '@/components/BioSection';
import { OfferingsSection } from '@/components/OfferingsSection';
import { FaLeaf, FaHeart, FaSpa } from 'react-icons/fa';
import JasPic from '@/images/Jas.jpeg';
import { IconType } from 'react-icons';

export type Offering = {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
};
export default function HomePage() {
  const bio = `Hallo, ich bin Jasmina.

Ich trage ein großes Anliegen in meinem Herzen.

Ich möchte so viele Menschen wie möglich einladen, mit Achtsamkeit und Akzeptanz auf sich selbst und die Welt zu blicken.

Mein Leben bestand ausschließlich aus Aufstehen, Arbeiten, Schlafen und Essen. Und das Ganze wieder von vorne. Bis mein System nicht mehr wollte und ich die Quittung bekam: heftige körperliche Angst und Panikreaktionen, über Jahre hinweg.

Danach habe ich mich auf die Suche nach mir selbst gemacht und wollte wissen, wie ich wieder aus dem Modus Überleben in den Modus Leben zurückfinde.

Ich freue mich darauf, meine Erfahrungen mit dir zu teilen!`;

  const offerings = [
    {
      title: 'Hatha Yoga',
      description:
        'Klassisches Yoga zur Stärkung von Körper und Geist durch Asanas und Atemübungen.',
      icon: FaLeaf,
      iconColor: 'teal.500',
    },
    {
      title: 'Yin Yoga',
      description:
        'Sanfte Übungen zur Entspannung und zum Loslassen tiefliegender Verspannungen.',
      icon: FaHeart,
      iconColor: 'pink.500',
    },
    {
      title: '(Trauma) Sensibles Yoga',
      description:
        'Speziell entwickeltes Yoga für Menschen mit traumatischen Erfahrungen.',
      icon: FaSpa,
      iconColor: 'purple.500',
    },
  ];

  return (
    <>
      <AboveTheFold />
      <BioSection bio={bio} imageSrc={JasPic.src} />
      <OfferingsSection offerings={offerings} />
    </>
  );
}
