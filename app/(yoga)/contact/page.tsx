"use client";
import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <>
      <Box py="12" px="6" maxW="lg" mx="auto">
        <Heading mb="6" textAlign="center">
          Kontakt
        </Heading>
        <Stack spacing="4">
          <Text fontSize="lg" color="gray.700">
            Hast du Fragen oder möchtest du mehr erfahren? Schreib uns eine
            Nachricht!
          </Text>
          <Input placeholder="Dein Name" />
          <Input type="email" placeholder="Deine E-Mail-Adresse" />
          <Textarea placeholder="Deine Nachricht" />
          <Button colorScheme="teal" size="lg">
            Nachricht senden
          </Button>
        </Stack>
      </Box>
    </>
  );
}
