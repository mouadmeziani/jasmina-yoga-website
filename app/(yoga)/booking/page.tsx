import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function BookingPage() {
  return (
    <>
      <Box py="12" px="6" maxW="7xl" mx="auto">
        <Heading mb="6">Buchung</Heading>
        <Text fontSize="lg" color="gray.700" mb="8">
          Wähle deinen gewünschten Kurs und buche jetzt deinen Platz!
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          <Stack spacing="4" p="6" bg="gray.50" borderRadius="md">
            <Heading size="md">Hatha Yoga</Heading>
            <Text color="gray.700">Montags und Mittwochs, 18:00 - 19:30 Uhr</Text>
            <Button colorScheme="teal">Jetzt buchen</Button>
          </Stack>
          <Stack spacing="4" p="6" bg="gray.50" borderRadius="md">
            <Heading size="md">Yin Yoga</Heading>
            <Text color="gray.700">Dienstags und Donnerstags, 20:00 - 21:30 Uhr</Text>
            <Button colorScheme="teal">Jetzt buchen</Button>
          </Stack>
          <Stack spacing="4" p="6" bg="gray.50" borderRadius="md">
            <Heading size="md">(Trauma) Sensibles Yoga</Heading>
            <Text color="gray.700">Freitags, 17:00 - 18:30 Uhr</Text>
            <Button colorScheme="teal">Jetzt buchen</Button>
          </Stack>
        </SimpleGrid>
      </Box>
    </>
  );
}
