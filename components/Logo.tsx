import { AspectRatio, Flex, Text } from "@chakra-ui/react"
import ImageLogo from "@/images/logo/websiteLogo.webp"
import Image from "next/image"

export function JasminaLogo() {
  return (
    <AspectRatio ratio={80 / 51} w="80px">
      <Image src={ImageLogo} alt="logo of the website" width={80} height={51} />
    </AspectRatio>
  )
}

export function Logo() {
  return (
    <>
      <Flex align="center">
        <JasminaLogo />
        <Text fontWeight="bolder" fontSize="lg">
          Yoga Jasmina
        </Text>
      </Flex>
    </>
  )
}
