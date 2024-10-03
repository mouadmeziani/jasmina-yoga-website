// components/OfferingsSection.tsx
"use client";
import { Offering } from "@/app/(yoga)/page";
import { Box, Heading, Text, SimpleGrid, Stack, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function OfferingsSection({ offerings }: { offerings: Offering[] }) {
  return (
    <Box py="12" px="6" bg="gray.50">
      <Box maxW="7xl" mx="auto" textAlign="center">
        <Heading mb="6">Unser Angebot</Heading>
        <Text fontSize="lg" color="gray.700" mb="12">
          Entdecke unsere vielfältigen Yoga-Kurse und Workshops, die dir helfen,
          Körper, Geist und Seele in Einklang zu bringen.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Stack
                spacing="4"
                p="6"
                bg="white"
                shadow="md"
                borderRadius="md"
                align="center"
              >
                <Icon
                  as={offering.icon}
                  w={10}
                  h={10}
                  color={offering.iconColor}
                />
                <Heading size="md">{offering.title}</Heading>
                <Text color="gray.600">{offering.description}</Text>
              </Stack>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
