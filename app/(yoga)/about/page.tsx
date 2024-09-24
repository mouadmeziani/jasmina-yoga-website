"use client";
import JasPic from "@/images/Jas.jpeg";
import { BriefBio } from "@/components/BriefBio";
import { CareerSection } from "@/components/CareerSection";

export default function AboutPage() {
  const bio = `Hallo, ich bin Jasmina.

Ich trage ein großes Anliegen in meinem Herzen.

Ich möchte so viele Menschen wie möglich einladen, mit Achtsamkeit und Akzeptanz auf sich selbst und die Welt zu blicken.

Mein Leben bestand ausschließlich aus Aufstehen, Arbeiten, Schlafen und Essen. Und das Ganze wieder von vorne. Bis mein System nicht mehr wollte und ich die Quittung bekam: heftige körperliche Angst und Panikreaktionen, über Jahre hinweg.

Danach habe ich mich auf die Suche nach mir selbst gemacht und wollte wissen, wie ich wieder aus dem Modus Überleben in den Modus Leben zurückfinde.

Ich freue mich darauf, meine Erfahrungen mit dir zu teilen!`;

  const careerEvents = [
    {
      date: "Juli 2022 – Februar 2023",
      title: "Somatische Psychotherapie und Analyse",
      description: "Bodynamic Foundation Training absolviert.",
    },
    {
      date: "Juli 2022",
      title: "Reiki II",
      description: "Fortgeschrittene Reiki-Ausbildung bei Merle Seemann.",
    },
    {
      date: "Seit 2022",
      title: "Dozententätigkeit",
      description:
        "Workshops und Fortbildungen zu traumasensibler Achtsamkeit mit Louisa Domhan.",
    },
    {
      date: "Juli 2021",
      title: "Reiki I",
      description: "Grundlagen der Reiki-Heilung bei Merle Seemann erlernt.",
    },
    {
      date: "März 2020 – März 2021",
      title: "Yin Yoga & Coaching Ausbildung",
      description: "Intensive Ausbildung bei Andrea Huson abgeschlossen.",
    },
    {
      date: "März 2020",
      title: "Thai Yoga Massage Ausbildung",
      description: "Zertifizierung bei Kari Riberau erhalten.",
    },
  ];

  return (
    <>
      <BriefBio name="Jasmina" bio={bio} imageSrc={JasPic.src} />
      <CareerSection title="Mein Werdegang" careerEvents={careerEvents} />
    </>
  );
}
