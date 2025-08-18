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

const teamMembers = [
  {
    name: "Yaw Doe",
    role: "Hahaya",
    image: "https://via.placeholder.com/300x300.png?text=Shield+Icon",
  },
  {
    name: "Mark Doe",
    role: "Senior Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mark Doe",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "John Doe",
    role: "Team Lead",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Mohit Singh",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

export default function OurTeam() {
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
        {teamMembers.map((member, index) => (
          <Box
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
              src={member.image}
              alt={member.name}
              objectFit="cover"
              h="250px"
              w="100%"
            />
            <Box p={4}>
              <Text fontWeight="bold">{member.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {member.role}
              </Text>
              <IconButton
                mt={3}
                size="sm"
                colorScheme="linkedin"
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
              />
            </Box>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
