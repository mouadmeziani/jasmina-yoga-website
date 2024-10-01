// Footer.jsx
"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Logo } from "@/components/Logo";
import Link from "next/link";

export function Footer() {
   const links = [
    {
      title: "Unternehmen",
      links: [
        { label: "Über mich", href: "/about" },
        { label: "Karriere", href: "/careers" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Angebot",
      links: [
        { label: "Kurse", href: "/classes" },
        { label: "Preise", href: "/pricing" },
        { label: "Workshops", href: "/workshops" },
        { label: "Privatstunden", href: "/private-sessions" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "AGB", href: "/terms" },
        { label: "Datenschutz", href: "/privacy" },
        { label: "Impressum", href: "/impressum" },
        { label: "Kontakt", href: "/contact" },
      ],
    },
  ];
  
  return (
    <Box bg="bg.accent.default" color="on-accent">
      <Stack
        justify="space-around"
        align="start"
        direction={{ base: "column", lg: "row" }}
        py={{ base: "12", md: "16" }}
        spacing="8"
        padding={5}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Logo />
          <Text color="fg.accent.muted">
            Entdecke innere Ruhe und Ausgeglichenheit mit unserem Yoga-Angebot.
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          gap="8"
          justifySelf="end"
          width={{ base: "full", lg: "auto" }}
        >
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="fg.accent.subtle"
              >
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Link key={idx} href={link.href}>
                    <Button variant="text.accent">{link.label}</Button>
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Divider borderColor="bg.accent.subtle" />
      <Stack
        pt="8"
        pb="12"
        justify="center"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
        padding={5}
      >
        <Text fontSize="sm" color="fg.accent.subtle">
          &copy; {new Date().getFullYear()} Dein Yoga-Studio. Alle Rechte
          vorbehalten.
        </Text>
        <ButtonGroup variant="tertiary.accent">
          <Link href="https://www.facebook.com/yourpage">
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              variant="ghost"
            />
          </Link>
          <Link href="https://www.instagram.com/yourpage">
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
            />
          </Link>
          <Link href="https://www.youtube.com/yourchannel">
            <IconButton
              aria-label="YouTube"
              icon={<FaYoutube />}
              variant="ghost"
            />
          </Link>
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
