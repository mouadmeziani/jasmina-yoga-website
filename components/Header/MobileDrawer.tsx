"use client";

import { ToggleButton } from "@/components/Header/ToggleButton";
import {
  Box,
  BoxProps,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export function MobileDrawer({
  backgroundColor,
  textColor,
  ...props
}: BoxProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const links = [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/about" },
    { label: "Kurse", href: "/classes" },
    { label: "Kontakt", href: "/contact" },
    { label: "Buchung", href: "/booking" },
  ];

  return (
    <Box {...props} zIndex={1000}>
      <ToggleButton aria-label="Open menu" isOpen={isOpen} onClick={onToggle} />
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerContent backgroundColor={backgroundColor}>
          <DrawerBody p="4">
            <Stack spacing={5}>
              <Button
                variant="text"
                leftIcon={<XMarkIcon height={25} />}
                onClick={onClose}
              >
                Close
              </Button>
              {links.map((link) => (
                <Link href={link.href} key={link.label}>
                  <Button variant="text" textColor={textColor}>
                    {link.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
