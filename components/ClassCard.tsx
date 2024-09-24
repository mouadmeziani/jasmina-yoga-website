"use client";
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ClassCardProps {
  title: string;
  description: string;
  schedule: string;
  buttonText: string;
}

export function ClassCard({
  title,
  description,
  schedule,
  buttonText,
}: ClassCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Stack spacing="4" p="6" bg="white" shadow="md" borderRadius="md">
        <Heading size="md">{title}</Heading>
        <Text color="gray.700">{description}</Text>
        <Text fontWeight="bold">Zeitplan: {schedule}</Text>
        <Button colorScheme="teal">{buttonText}</Button>
      </Stack>
    </motion.div>
  );
}
