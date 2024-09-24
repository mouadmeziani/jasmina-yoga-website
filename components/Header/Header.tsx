"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const links = [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/about" },
    { label: "Kurse", href: "/classes" },
    { label: "Kontakt", href: "/contact" },
    { label: "Buchung", href: "/booking" },
  ];

  return (
    <Box as="header" bg="bg.surface" position="relative">
      <Box p="4" paddingRight="3em">
        <Flex justify="space-between" align="center">
          <HStack spacing="6">
            <MobileDrawer />
            <Link href="/">
              <Logo />
            </Link>
          </HStack>
          <ButtonGroup
            size="lg"
            variant="link"
            spacing="6"
            display={{ base: "none", lg: "flex" }}
          >
            {links.map((link) => (
              <Link href={link.href} key={link.label}>
                <Button colorScheme="white">{link.label}</Button>
              </Link>
            ))}
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
}
