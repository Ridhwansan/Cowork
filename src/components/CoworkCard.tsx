import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";

interface CoworkCardProps {
  image: string;
  title: string;
  desc: string;
}

const CoworkCard: FC<CoworkCardProps> = ({ image, title, desc }) => {
  return (
    <Card
      maxW={{ base: "xs", md: "sm" }}
      borderRadius="8"
      overflow="hidden"
      display="flex"
      flexDirection="column"
    >
      <CardBody
        textAlign="center"
        flex="1"
        display="flex"
        flexDirection="column"
      >
        <Flex justifyContent="center" alignItems="center" flexShrink={0}>
          <Image src={image} alt="logo planet" width={48} height={48} />
        </Flex>

        <Stack mt="6" spacing="2" flex="1">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CoworkCard;
