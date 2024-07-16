import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { FaCheckCircle } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  desc: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, desc }) => {
  return (
    <Card width="sm" borderRadius="12px">
      <CardHeader>
        <Flex direction="row" alignItems="center" justify="space-between">
          <Text fontSize="18px" fontWeight="bold">
            {title}
          </Text>
          <Box color="green.400">
            <FaCheckCircle size="24px" />
          </Box>
        </Flex>
      </CardHeader>
      <Stack>
        <CardBody>
          <Text>{desc}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ServiceCard;
