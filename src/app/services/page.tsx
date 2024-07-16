import CoworkCard from "@/components/CoworkCard";
import FacilitiesCard from "@/components/FacilitiesCard";
import PricingCard from "@/components/PricingCard";
import { getEntryFacilitiesCard } from "@/libs/contentful";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default async function Services() {
  const facilities = await getEntryFacilitiesCard();
  console.log("ini isi facilities", facilities);

  return (
    <Box pt="65px">
      {/* Start Join Cowork Today */}
      <Container pt="64px" maxW="7xl">
        <Flex direction="column" gap="18px" alignItems="center">
          <Flex gap={{ base: "12px", md: "24px" }}>
            <Text fontSize={{ base: "24px", md: "64px" }} fontWeight="600">
              Seize
            </Text>
            <Box
              height={{ base: "40px", md: "100px" }}
              width={{ base: "120px", md: "240px" }}
              position="relative"
              borderRadius="100px"
              overflow="hidden"
            >
              <Image
                src="/Rectangle2.png"
                alt="random gambar"
                objectFit="cover"
                fill
              />
            </Box>
            <Text fontSize={{ base: "24px", md: "64px" }} fontWeight="600">
              The Moment
            </Text>
          </Flex>
          <Text fontSize={{ base: "24px", md: "64px" }} fontWeight="600">
            Join Cowork Today
          </Text>
          <Text
            textAlign="center"
            w={{ base: "100%", md: "700px" }}
            lineHeight="1.5"
          >
            Uncover the transformative power of Cowork as echoed by those who've
            made it their professional haven. This is more than finding a desk,
            it's discovering a community that fuels your journey to success.
          </Text>
          <Button
            mt="40px"
            borderRadius="42px"
            height="fit-content"
            width="fit-content"
            px="8"
            py="5"
            bg="rgba(29, 30, 28, 1)"
            color="white"
            _hover={{ bg: "rgba(45, 46, 44, 1)" }}
            position="relative"
            zIndex="2"
          >
            Claim Your Spot
          </Button>
        </Flex>
      </Container>
      {/* End Join Cowork Today */}

      {/* Start Why Choose Cowork */}
      <Container maxW="7xl">
        <Flex direction="column" mt={{ base: "0px", md: "50px" }}>
          <Flex direction="row" justifyContent="center" py="24px">
            <Text fontSize={{ base: "24px", md: "40px" }} fontWeight="600">
              Why Choose Cowork
            </Text>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            alignItems={{ base: "center", md: "start" }}
            gap={{ base: "18px", md: "8px" }}
          >
            <CoworkCard
              image="/planet.png"
              title="Flexible Spaces"
              desc="Whether you're a solopreneur, startup, or an established enterprise, our flexible office solutions cater to your evolving working needs."
            />
            <CoworkCard
              image="/CreditCard.png"
              title="Transparent Pricing"
              desc="Choose a plan that suits your budget and business objectives, and experience the value of a premium coworking space without breaking the bank."
            />
            <CoworkCard
              image="/UserList.png"
              title="Tailored Memberships"
              desc="Whether you prefer the flexibility of a hot desk or the exclusivity of a private office, Cowork offers tailored solutions to suit every working style."
            />
          </Flex>
        </Flex>
      </Container>
      {/* End Why Choose Cowork */}

      {/* Start Facilities */}
      <Container maxW="7xl" py={{ base: "24px", md: "64px" }}>
        <Flex direction="column" gap="24px">
          <Text
            fontSize={{ base: "24px", md: "40px" }}
            fontWeight="600"
            textAlign="center"
          >
            Our Facilities
          </Text>
          <Flex flexWrap="wrap" justify="space-between" rowGap="24px">
            {facilities?.map((facility, index) => {
              return (
                <FacilitiesCard
                  key={index}
                  image={facility.facilitiesimage.fields.file.url}
                  facilities={facility.facilitiesname}
                />
              );
            })}
          </Flex>
        </Flex>
      </Container>
      {/* End Facilities */}

      {/* Start Pricing */}
      <Container maxW="7xl" py={{ base: "24px", md: "64px" }}>
        <Flex direction="column" gap="24px">
          <Text
            fontSize={{ base: "24px", md: "40px" }}
            fontWeight="600"
            textAlign="center"
          >
            Plans that fit your need
          </Text>
          <Text
            fontSize={{ base: "14px", md: "24px" }}
            color={"gray.500"}
            textAlign="center"
          >
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </Text>
          <PricingCard />
        </Flex>
      </Container>
      {/* End Pricing */}
    </Box>
  );
}
