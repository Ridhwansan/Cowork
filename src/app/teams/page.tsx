"use client";

import TeamsCard from "@/components/TeamsCard";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Teams = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=9");
        const data = await response.json();
        setTeamMembers(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTeamMembers();
  }, []);

  return (
    <Box bg="rgba(29, 30, 28, 1)">
      <Container maxW="7xl" py="84px">
        <Flex direction="column">
          <Text
            textAlign="center"
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight="700"
            py="24px"
            color="white"
          >
            Meet Our Wonderful Staff
          </Text>
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "start" }}
            flexWrap="wrap"
            justify="space-between"
          >
            {teamMembers.map((member, index) => (
              <TeamsCard
                key={index}
                image={member.picture?.large}
                job={member.phone}
                name={`${member.name.first} ${member.name.last}`}
              />
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Teams;
