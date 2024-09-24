// components/CareerSection.tsx
"use client";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";

interface CareerEvent {
  date: string;
  title: string;
  description: string;
}

interface CareerSectionProps {
  title: string;
  careerEvents: CareerEvent[];
}

export function CareerSection({ title, careerEvents }: CareerSectionProps) {
  const cardBg = useColorModeValue("white", "gray.800");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box py="12" px="6" bg={sectionBg}>
      <Heading as="h2" size="xl" textAlign="center" mb="8" color={textColor}>
        {title}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="8" maxW="7xl" mx="auto">
        {careerEvents.map((event, index) => (
          <Box
            key={index}
            bg={cardBg}
            shadow="md"
            borderRadius="md"
            p="6"
            _hover={{ shadow: "lg" }}
          >
            <Stack spacing="3">
              <Stack direction="row" align="center">
                <Icon as={FaRegCalendarAlt} color="teal.500" />
                <Text fontWeight="medium" color="teal.500">
                  {event.date}
                </Text>
              </Stack>
              <Heading as="h3" size="md" color={textColor}>
                {event.title}
              </Heading>
              <Text color={textColor}>{event.description}</Text>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
