"use client"

import { ChakraProvider } from "@chakra-ui/react"
import React from "react"

export type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <ChakraProvider>{children}</ChakraProvider>
}
