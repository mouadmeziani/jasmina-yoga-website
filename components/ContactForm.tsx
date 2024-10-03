"use client";
import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  Textarea,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box py="12" px="6" maxW="lg" mx="auto">
      <Heading mb="6" textAlign="center">
        Kontakt
      </Heading>
      <Text fontSize="lg" color="gray.700">
        Hast du Fragen oder möchtest du mehr erfahren? Schreib uns eine
        Nachricht!
      </Text>
      <Spacer h="6" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <Input
            placeholder="Dein Name"
            type="text"
            {...register("name", { required: "Name is required" })}
          />
          <Input
            type="email"
            placeholder="Deine E-Mail-Adresse"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          <Textarea
            placeholder="Deine Nachricht"
            {...register("message", { required: "Message is required" })}
          />
          <Button colorScheme="teal" size="lg" type="submit">
            Nachricht senden
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
