import TeamsCard from "@/components/TeamsCard";
import {
  Box,
  Container,
  Flex,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Box pt={{ base: "100px", md: "65px" }}>
      <Container maxW="7xl" gap="40">
        <Flex direction="row" py="24px" justifyContent="center" gap="3">
          <Text fontSize={{ base: "24px", md: "40px" }} fontWeight="600">
            Get To
          </Text>
          <Box
            height={{ base: "30px", md: "60px" }}
            width={{ base: "80px", md: "160px" }}
            position="relative"
            borderRadius="100px"
            overflow="hidden"
          >
            <Image
              src="/Rectangle1.png"
              alt="random gambar"
              objectFit="cover"
              fill
            />
          </Box>

          <Text fontSize={{ base: "24px", md: "40px" }} fontWeight="600">
            Know Us
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Text lineHeight="180%" width="800px" textAlign="center">
            At Cowork, we understand the dynamic needs of modern professionals
            and businesses. Our spaces are more than just offices, they are
            vibrant communities where ideas thrive, and innovation flourishes.
            Whether you are a freelancer, startup, or established enterprise, we
            provide the perfect environment for you to grow, connect, and
            succeed 🚀.
          </Text>
        </Flex>
        <Box width="100%" height="auto" py="54px">
          <Image
            src="/aboutusjumbo.png"
            alt="about us image"
            layout="responsive"
            width={0}
            height={0}
          />
        </Box>
      </Container>

      {/* Start Journey*/}
      <Container maxW="7xl" py={{ base: "32px", md: "64px" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "24px", md: "0px" }}
        >
          <Flex flex="1">
            <Box
              position="relative"
              width={{ base: "100%", md: "80%" }}
              height={{ base: "400px", md: "600px" }}
            >
              <Image
                src="/founder.png"
                alt="founder of cowork"
                objectFit="cover"
                layout="fill"
              />
            </Box>
          </Flex>
          <Flex flex="1" direction="column" gap="24px">
            <Flex gap="12px" direction="column">
              <Text
                fontSize={{ base: "24px", md: "40px" }}
                fontWeight="bold"
                textAlign={{ base: "center", md: "start" }}
              >
                Our Journey
              </Text>
              <Text textAlign={{ base: "center", md: "start" }}>
                Cowork was established in 2017, founded with the mission to
                redefine workspace solutions through flexibility, community, and
                innovation. Since its inception, Cowork has grown from its
                initial location to a network spanning in 19+ cities, providing
                diverse spaces designed to cater to the needs of freelancers,
                startups, and corporations alike.
              </Text>
            </Flex>
            <Flex gap="12px" direction="column">
              <Text
                fontSize={{ base: "24px", md: "40px" }}
                fontWeight="bold"
                textAlign={{ base: "center", md: "start" }}
              >
                Our Culture
              </Text>

              <UnorderedList spacing={4}>
                <ListItem>
                  We believe in the power of teamwork and synergy, encouraging
                  members to share ideas and support one another's growth.
                </ListItem>
                <ListItem>
                  We foster an environment that sparks innovation, where new
                  ideas are welcomed and creativity is nurtured.
                </ListItem>
                <ListItem>
                  Recognizing the diverse needs of our members, we offer
                  flexible workspace solutions that adapt to individual work
                  styles and preferences.
                </ListItem>
                <ListItem>
                  We prioritize building a strong sense of community among our
                  members through networking events, workshops, and shared
                  experiences.
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      {/* End Journey */}

      {/* Start Founder */}
      <Container maxW="7xl" py={{ base: "18px", md: "64px" }}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <Flex flex="1" direction="column" gap="32px">
            <Flex direction="column" gap="12px">
              <Text
                fontWeight="bold"
                fontSize={{ base: "24px", md: "42px" }}
                textAlign={{ base: "center", md: "start" }}
              >
                Ethan Sterling
              </Text>
              <Text
                fontWeight="light"
                fontSize={{ base: "12px", md: "14px" }}
                textAlign={{ base: "center", md: "start" }}
              >
                Founder of Cowork
              </Text>
            </Flex>
            <Text
              fontSize="18px"
              lineHeight="1.5"
              textAlign={{ base: "center", md: "start" }}
            >{`"Imagine a world where work isn't confined to cubicles, but thrives in spaces designed for creativity and collaboration. At Cowork, we're breaking down barriers and redefining how people work together. Our journey is about empowering individuals to pursue their passions and businesses to flourish in an environment that fosters innovation and community. Join us in creating a brighter future where work becomes a source of inspiration and fulfillment."`}</Text>
          </Flex>
          <Flex flex="1" pt={{ base: "18px", md: "0px" }}>
            <Box
              position="relative"
              width={{ base: "100%", md: "80%" }}
              height={{ base: "400px", md: "600px" }}
              margin="auto"
            >
              <Image
                src="/coworkfounder.png"
                alt="founder of cowork"
                objectFit="cover"
                layout="fill"
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
      {/* End Founder */}

      {/* Start Teams */}
      <Box bg="rgba(29, 30, 28, 1)">
        <Container maxW="7xl" py="64px">
          <Flex direction="column">
            <Text
              textAlign="center"
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight="700"
              py="24px"
              color="white"
            >
              Meet Our Departement Manager
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "start" }}
              flexWrap="wrap"
              justify="space-between"
            >
              <TeamsCard
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHNtaWxlfGVufDB8fDB8fHww"
                job="Finance and Administration"
                name="Ava Robinson"
              />
              <TeamsCard
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHNtaWxlfGVufDB8fDB8fHww"
                job="Digital Marketer"
                name="Sarah Johnson"
              />
              <TeamsCard
                image="https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=2551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                job="Membership Services"
                name="Ryan Thompson"
              />
              <TeamsCard
                image="https://images.unsplash.com/photo-1635131902146-6957477a4ff4?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                job="Events and Programming"
                name="Ethan Davis"
              />
              <TeamsCard
                image="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                job="Facilities Management"
                name="Liam Green"
              />
              <TeamsCard
                image="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                job="Technology and Innovation"
                name="Maya Patel"
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* End Teams */}
    </Box>
  );
};

export default About;
