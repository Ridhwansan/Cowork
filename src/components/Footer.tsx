import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
  return (
    <Box p={{ base: "24px", md: "80px" }}>
      <Container
        maxW="7xl"
        p={{ base: "24px", md: "48px" }}
        bg="rgba(29, 30, 28, 1)"
        borderRadius="40px"
      >
        <Flex direction={{ base: "column", md: "row" }} gap="90px">
          <Flex
            direction="column"
            justifyContent={{ base: "center", md: "flex-start" }}
            alignItems={{ base: "center", md: "flex-start" }}
            width="100%"
            gap="24px"
          >
            <Box
              position="relative"
              width="120px"
              height="24px"
              overflow="hidden"
            >
              <Image
                src="/Headingconew.png"
                alt="logo Cowork"
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <Text color="#FFF" textAlign={{ base: "center", md: "start" }}>
              Join our newsletter to stay up to date on features and releases.
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              gap="30px"
              width="100%"
              alignItems={{ base: "center", md: "start" }}
            >
              <Input flex="1" width="autos" color="#FFF" p={{ base: "12px" }} />
              <Button
                bg="white"
                w="fit-content"
                h="fit-content"
                variant="solid"
                borderRadius="24px"
                py="12px"
                px="18px"
              >
                Subscribe
              </Button>
            </Flex>
            <Text
              color="white"
              textAlign={{ base: "center", md: "start" }}
              fontSize="13px"
            >
              {" "}
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </Text>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "start" }}
            width="100%"
            justify="space-around"
            gap={{ base: "60px", md: "0px" }}
          >
            {/* 1 */}
            <Flex
              direction="column"
              color="white"
              gap="12px"
              textAlign={{ base: "center", md: "start" }}
            >
              <Text fontWeight="600" fontSize="18px">
                Explore More
              </Text>
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Price</Text>
              <Text>Blog</Text>
              <Text>Events</Text>
            </Flex>
            {/* 2 */}
            <Flex
              direction="column"
              color="white"
              gap="12px"
              textAlign={{ base: "center", md: "start" }}
            >
              <Text fontWeight="600" fontSize="18px">
                Stay Connected
              </Text>
              <Text>Subscribe</Text>
              <Text>Member Stories</Text>
              <Text>Location</Text>
              <Text>Write for us</Text>
            </Flex>
            {/* 3 */}
            <Flex
              direction="column"
              color="white"
              gap="12px"
              textAlign={{ base: "center", md: "start" }}
            >
              <Text fontWeight="600" fontSize="18px">
                Follow Us
              </Text>
              <Text>Facebook</Text>
              <Text>Instagram</Text>
              <Text>X</Text>
              <Text>LinkedIn</Text>
              <Text>Youtube</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Container maxW="7xl" mt="32px">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          alignItems={{ base: "center", md: "start" }}
          gap={{ base: "12px", md: "0px" }}
        >
          <Text fontSize="14px" fontWeight="400">
            © 2024 Cowork. All rights reserved.
          </Text>
          <Flex gap={{ base: "12px", md: "24px" }}>
            <Text fontSize={{ base: "12px", md: "14px" }} fontWeight="400">
              Privacy Policy
            </Text>
            <Text fontSize={{ base: "12px", md: "14px" }} fontWeight="400">
              Terms of Service
            </Text>
            <Text fontSize={{ base: "12px", md: "14px" }} fontWeight="400">
              Cookies Settings
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
