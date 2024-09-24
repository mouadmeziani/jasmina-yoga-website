"use client";
import {
  Box,
  Text,
  Image,
  Flex,
  SimpleGrid,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface BriefBioProps {
  name: string;
  bio: string;
  imageSrc: string;
}

export function BriefBio({ name, bio, imageSrc }: BriefBioProps) {
  return (
    <Box py="12" px="6">
      <SimpleGrid
        gridTemplateColumns={{ base: "1fr", md: "1fr 4fr" }}
        alignItems="center"
        px={150}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={imageSrc}
            alt={`Foto von ${name}`}
            borderRadius="full"
            boxSize="300px"
            mr={{ md: "8" }}
            mb={{ base: "8", md: "0" }}
          />
        </motion.div>
        <Text fontSize="lg" color="gray.700" px={50}>
          {bio}
        </Text>
      </SimpleGrid>
    </Box>
  );
}
