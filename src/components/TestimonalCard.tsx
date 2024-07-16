import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface TestimonalCardProps {
  image: string;
  name: string;
  job: string;
  comment: string;
}

const TestimonalCard: FC<TestimonalCardProps> = ({
  image,
  name,
  job,
  comment,
}) => {
  return (
    <Box>
      <Card
        width={{ base: "xs", md: "sm" }}
        borderRadius="12px"
        position="relative"
        minHeight="320px"
      >
        <CardHeader position="relative">
          <Avatar
            src={image}
            position="absolute"
            top="-30px"
            left="50%"
            transform="translateX(-50%)"
            zIndex="1"
            size="lg"
          />
          <Flex
            direction="column"
            alignItems="center"
            justify="center"
            mt={8}
            gap="12px"
          >
            <Text fontSize="18px" fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="14px" fontWeight="400">
              {job}
            </Text>
          </Flex>
        </CardHeader>
        <Stack>
          <CardBody>
            <Text>{comment}</Text>
          </CardBody>
        </Stack>
      </Card>
    </Box>
  );
};

export default TestimonalCard;
