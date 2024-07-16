import { Box, Card, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface FacilitiesCardProps {
  image: string;
  facilities: string;
}

const FacilitiesCard: FC<FacilitiesCardProps> = ({ image, facilities }) => {
  return (
    <Card maxW="sm" borderRadius="12px" overflow="hidden">
      <Image src={image} alt="Facility Image" />

      <Box
        bg="rgba(0,0,0,0.5)"
        color="white"
        py="2"
        px="4"
        pos="absolute"
        bottom="0"
        left="0"
        width="100%"
      >
        <Text fontSize="md" fontWeight="semibold">
          {facilities}
        </Text>
      </Box>
    </Card>
  );
};

export default FacilitiesCard;
