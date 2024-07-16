"use client";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box boxShadow="base" position="fixed" width="100%" zIndex="999" bg="white">
      <Container
        maxW={{ base: "full", md: "7xl" }}
        py="20px"
        display="flex"
        justifyContent="space-between"
        bg="white"
      >
        <Link href="/">
          <Box
            display="flex"
            width={{ base: "100px", md: "120px" }}
            height="auto"
            alignItems={{ base: "center", md: "none" }}
          >
            <Image
              src="/Coworklogo.png"
              layout="responsive"
              width={120}
              height={24}
              alt="Logo gambar"
            />
          </Box>
        </Link>

        <Flex display={{ base: "none", md: "flex" }} gap="8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/teams">Teams</Link>
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          icon={<GiHamburgerMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </Container>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <Flex direction="column" gap={6} mt="24px">
                <Link href="/" onClick={onClose}>
                  Home
                </Link>
                <Link href="/about" onClick={onClose}>
                  About
                </Link>
                <Link href="/services" onClick={onClose}>
                  Services
                </Link>
                <Link href="/teams" onClick={onClose}>
                  Teams
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Navbar;
