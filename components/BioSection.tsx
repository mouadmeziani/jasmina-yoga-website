// components/BioSection.tsx
"use client";
import { Box, Text, Image, Flex, SimpleGrid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface BioSectionProps {
  bio: string;
  imageSrc: string;
}

export function BioSection({ bio, imageSrc }: BioSectionProps) {
  const pathname = usePathname();
  return (
    <Box
      maxW="7xl"
      mx="auto"
      mb="4em"
      textAlign="center"
      mt={pathname === "/about" ? "5em" : "0"}
    >
      {pathname === "/" && <Heading mb="6">Biographie</Heading>}
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "3fr 5fr" }}
        alignItems="center"
        justifyItems="center"
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
        <Text fontSize="lg" color="gray.700" textAlign="left" ml="15">
          {bio}
        </Text>
      </SimpleGrid>
    </Box>
  );
}
