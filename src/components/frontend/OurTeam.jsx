import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  VStack,
  Heading,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { apiUrl, fieUrl } from "../common/https";

export default function OurTeam() {
  const [members, setMembers] = useState([]);
  const fetchLatestMembers = async () => {
    const response = await fetch(apiUrl + "get-members");
    const result = await response.json();

    setMembers(result?.data);
  };

  useEffect(() => {
    fetchLatestMembers();
  }, []);

  return (
    <Container maxW="7xl" py={10}>
      <VStack spacing={3} textAlign="center" mb={10}>
        <Heading as="h2" size="xl">
          Our Team
        </Heading>
        <Text fontSize="md" color="gray.600" maxW="600px">
          We specialize in a wide range of construction services, including
          residential, commercial, and industrial projects.
        </Text>
      </VStack>

      <Flex wrap="wrap" justify="center" gap={6}>
        {members &&
          members?.map((member, index) => (
            <Box
              onClick={() => {
                window.open(member.linkedin, "_blank");
              }}
              key={index}
              w="230px"
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.2s"
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              <Image
                src={`${fieUrl}uploads/members/${member.image}`}
                alt={member.name}
                objectFit="cover"
                h="250px"
                w="100%"
              />
              <Box p={4}>
                <Text fontWeight="bold">{member.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {member.job_title}
                </Text>
                <IconButton
                  mt={3}
                  size="sm"
                  colorScheme="linkedin"
                  icon={<FaLinkedin size={16} color="black" />}
                  aria-label="LinkedIn"
                />
              </Box>
            </Box>
          ))}
      </Flex>
    </Container>
  );
}
