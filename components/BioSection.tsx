// components/BioSection.tsx
"use client";
import { Box, Text, Image, Flex, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface BioSectionProps {
  bio: string;
  imageSrc: string;
}

export function BioSection({ bio, imageSrc }: BioSectionProps) {
  return (
    <Box py="12" px="6">
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "1fr 4fr" }}
        alignItems="center"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={imageSrc}
            alt="Foto von Jasmina"
            borderRadius="full"
            boxSize="300px"
            mr={{ md: "8" }}
            mb={{ base: "8", md: "0" }}
          />
        </motion.div>
        <Text fontSize="lg" color="gray.700">
          {bio}
        </Text>
      </SimpleGrid>
    </Box>
  );
}
