"use client";
import { Box, Text, Image } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import image from "@/images/backgroundimage.jpg";

export function AboveTheFold() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -300]);

  return (
    <Box position="relative" height="100vh" overflow="hidden">
      <motion.div style={{ y }}>
        <Image
          src={image.src}
          alt="Hintergrundbild"
          objectFit="cover"
          width="100%"
          height="110vh"
        />
      </motion.div>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        textAlign="center"
      >
        <Text fontSize="6xl" fontWeight="bold">
          Willkommen bei Jasminas Yoga-Studio
        </Text>
      </Box>
    </Box>
  );
}
