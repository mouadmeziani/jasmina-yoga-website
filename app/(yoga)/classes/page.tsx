// app/kurse/page.tsx
"use client";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { ClassCard } from "@/components/ClassCard";

interface ClassData {
  title: string;
  description: string;
  schedule: string;
  buttonText: string;
}

export default function ClassesPage() {
  const classesData: ClassData[] = [
    {
      title: "Hatha Yoga",
      description:
        "Dieser Kurs ist ideal für Anfänger und Fortgeschrittene, die ihre körperliche Fitness und geistige Klarheit verbessern möchten.",
      schedule: "Montags und Mittwochs, 18:00 - 19:30 Uhr",
      buttonText: "Mehr erfahren",
    },
    {
      title: "Yin Yoga",
      description:
        "Ein sanfter Kurs zur Tiefenentspannung und zum Stressabbau, geeignet für alle Level.",
      schedule: "Dienstags und Donnerstags, 20:00 - 21:30 Uhr",
      buttonText: "Mehr erfahren",
    },
    {
      title: "(Trauma) Sensibles Yoga",
      description:
        "Ein spezieller Kurs für Menschen, die einen behutsamen Zugang zum Yoga suchen.",
      schedule: "Freitags, 17:00 - 18:30 Uhr",
      buttonText: "Mehr erfahren",
    },
  ];

  return (
    <Box py="12" px="6" maxW="7xl" mx="auto">
      <Heading mb="6">Unsere Kurse</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8">
        {classesData.map((classItem, index) => (
          <ClassCard
            key={index}
            title={classItem.title}
            description={classItem.description}
            schedule={classItem.schedule}
            buttonText={classItem.buttonText}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
