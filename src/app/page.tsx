import AccordionComponent from "@/components/AccordionComponent";
import ServiceCard from "@/components/ServiceCard";
import TestimonalCard from "@/components/TestimonalCard";
import { getEntryCowork } from "@/libs/contentful";
import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const revalidate = 30;

export default async function Home() {
  const company = await getEntryCowork();

  // console.log("company", company);
  // console.log("test", services);
  console.log("ini isi dari testimonals", company?.testimonals);

  return (
    <Box h="auto" pt="65px">
      {/* Start Jumbotron */}
      <Container maxW="7xl" py="32px">
        <Flex gap="24px" direction={{ base: "column", md: "row" }}>
          <Flex
            direction="column"
            alignItems={{ base: "center", md: "flex-start" }}
            gap="32px"
            position="relative"
            justifyContent="center"
            flex="1"
          >
            <Text
              fontSize={{ base: "58px", md: "84px" }}
              fontWeight="600"
              letterSpacing="0px"
              lineHeight="1.2"
              position="relative"
              zIndex="2"
              textAlign={{ base: "center", md: "left" }}
            >
              {company?.jumbotitle}
            </Text>
            <Text
              textAlign={{ base: "center", md: "start" }}
              lineHeight="180%"
              left="0"
              top="0"
              width={{ base: "fit-content", md: "540px" }}
              position="relative"
              zIndex="2"
            >
              {company?.jumbodesc}
            </Text>
            <Box
              position="absolute"
              top={{ base: "140px", md: "190px" }}
              left={{ base: "150px", md: "60" }}
              zIndex="1"
              height={{ base: "80px", md: "130px" }}
              width={{ base: "200px", md: "337px" }}
            >
              <Image
                src="/vector.png"
                alt="Gambar vector"
                objectFit="cover"
                fill
              />
            </Box>
            <Button
              borderRadius="42px"
              px="12"
              py="6"
              bg="rgba(29, 30, 28, 1)"
              color="white"
              _hover={{ bg: "rgba(45, 46, 44, 1)" }}
              position="relative"
              zIndex="2"
            >
              Hire Us
            </Button>
          </Flex>
          <Flex flex="1">
            <Box
              position="relative"
              width={{ base: "3500px", md: "100%" }}
              height={{ base: "320px", md: "530px" }}
              overflow="hidden"
              borderRadius="24px"
            >
              <Image
                src={`https:${company?.jumboimage.fields.file.url}`}
                alt="Company Photo"
                objectFit="Cover"
                layout="fill"
              />
            </Box>
          </Flex>
        </Flex>
      </Container>
      {/* End Jumbotron */}

      {/* Start Trusted by companies */}
      <Container
        maxW="7xl"
        py="44px"
        gap="24px"
        display="flex"
        flexDirection="column"
      >
        <Text textAlign="center">Trusted by Leading Companies</Text>
        <Flex
          gap={{ base: "30px", md: "48px" }}
          alignContent="center"
          alignItems={{ base: "center", md: "normal" }}
          justifyContent="center"
          direction={{ base: "column", md: "row" }}
        >
          <Image src="/Logo.png" alt="Logo 1" width={138} height={32} />
          <Image src="/Logo-1.png" alt="Logo 2" width={138} height={32} />
          <Image src="/Logo-2.png" alt="Logo 3" width={138} height={32} />
          <Image src="/Logo-3.png" alt="Logo 4" width={138} height={32} />
          <Image src="/Logo-4.png" alt="Logo 5" width={138} height={32} />
        </Flex>
      </Container>
      {/* End trusted by companies */}

      {/* Start Cowork Overview*/}
      <Container maxW="7xl" py={{ base: "24px", md: "64px" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          gap="24px"
        >
          <Flex direction="column" gap="24px">
            <Flex direction="column" gap="16px" width="100%">
              <Text
                color="#1D1E1C"
                fontSize="12px"
                fontWeight="600"
                textTransform="uppercase"
                lineHeight="18px"
                textAlign={{ base: "center", md: "start" }}
              >
                Cowork Overview
              </Text>
              <Text
                fontSize={{ base: "24px", md: "40px" }}
                color="#1D1E1C"
                fontWeight="700"
                textAlign={{ base: "center", md: "start" }}
              >
                {company?.overviewtitle}
              </Text>
            </Flex>
            <Flex direction="row">
              {/* List 1 */}
              <Flex direction="column" width="100%" gap="8px">
                <Text
                  fontSize="48px"
                  fontWeight="700"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  240%
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  Community Growth
                </Text>
              </Flex>
              {/* List 2 */}
              <Flex direction="column" width="100%" gap="8px">
                <Text
                  fontSize="48px"
                  fontWeight="700"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  99%
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  Technology Uptime
                </Text>
              </Flex>
            </Flex>
            <Flex direction="row">
              {/* List 3 */}
              <Flex direction="column" width="100%" gap="8px">
                <Text
                  fontSize="48px"
                  fontWeight="700"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  50+
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  Happy Members
                </Text>
              </Flex>
              {/* List 4 */}
              <Flex direction="column" width="100%" gap="8px">
                <Text
                  fontSize="48px"
                  fontWeight="700"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  100%
                </Text>
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  Renewable Energy Sources
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Box
            position="relative"
            width={{ base: "100%", md: "80%" }}
            height={{ base: "340px", md: "500px" }}
            overflow="hidden"
            borderRadius="24px"
          >
            <Image
              src={`https:${company?.overviewimage.fields.file.url}`}
              alt="sectionimg"
              objectFit="Cover"
              layout="fill"
            />
          </Box>
        </Flex>
      </Container>
      {/* End Cowork Overview */}

      {/* Start What we provide */}
      <Box bg="rgba(29, 30, 28, 1)" py="54px">
        <Container maxW="7xl" color="white">
          <Flex direction="column" gap="54px">
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              alignItems="center"
              gap="30px"
            >
              <Box
                position="relative"
                width="100%"
                height="300px"
                overflow="hidden"
                borderRadius="24px"
              >
                <Image
                  src={`https:${company?.provideimage.fields.file.url}`}
                  alt="whatweprovide"
                  objectFit="cover"
                  fill
                />
              </Box>
              <Flex direction="column" gap="24px">
                <Heading
                  fontSize={{ base: "24px", md: "48px" }}
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  {company?.providetitle}
                </Heading>
                <Text
                  width={{ base: "full", md: "550px" }}
                  zIndex="2"
                  textAlign={{ base: "center", md: "start" }}
                >
                  {company?.providedesc}
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction="row"
              wrap="wrap"
              justify="space-between"
              rowGap="24px"
            >
              {company?.services.map((company: any, index: number) => {
                return (
                  <ServiceCard
                    key={index}
                    title={company.fields.cardtitle}
                    desc={company.fields.carddesc}
                  />
                );
              })}
            </Flex>
          </Flex>
        </Container>
      </Box>
      {/* End What we provide */}

      {/* Start Testimonals */}
      <Container maxW="7xl" py="64px">
        <Text
          fontSize={{ base: "24px", md: "40px" }}
          fontWeight="600"
          textAlign="center"
        >
          Hear From Our Clients
        </Text>
        <Flex
          justify="space-between"
          mt="60px"
          direction={{ base: "column", md: "row" }}
          gap={{ base: "60px" }}
          alignItems={{ base: "center", md: "start" }}
        >
          {company?.testimonals.map((company: any, index: any) => {
            return (
              <TestimonalCard
                key={index}
                name={company.fields.nametestimonals}
                image={company.fields.profilepicture.fields.file.url}
                job={company.fields.jobtestimonals}
                comment={company.fields.descTestimonals}
              />
            );
          })}
        </Flex>
      </Container>
      {/* End Testimonals */}

      {/* Start FAQ */}
      <Container maxW="7xl" py={{ base: "24px", md: "64px" }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: "48px", md: "32px" }}
        >
          <Flex direction="column" gap="24px" flex="1">
            <Text
              fontSize={{ base: "24px", md: "48px" }}
              fontWeight="700"
              textAlign={{ base: "center", md: "start" }}
            >
              Your Roadmap to Coworking Clarity
            </Text>
            <Text fontWeight="400" textAlign={{ base: "center", md: "start" }}>
              Frequently asked questions ordered by popularity. Remember that if
              the visitor has not committed to the call to action, they may
              still have questions (doubts) that can be answered.
            </Text>
          </Flex>
          <Flex flex="1">
            <AccordionComponent />
          </Flex>
        </Flex>
      </Container>
      {/* End FAQ */}
    </Box>
  );
}
