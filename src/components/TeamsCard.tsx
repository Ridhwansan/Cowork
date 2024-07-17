"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { FC } from "react";

interface TeamsCardProps {
  name: string;
  job: string;
  image: string;
}

const TeamsCard: FC<TeamsCardProps> = ({ name, job, image }) => {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"200px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={220}
            width={222}
            objectFit={"cover"}
            src={image}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {job}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
};

export default TeamsCard;
