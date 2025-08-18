import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

const posts = [
  {
    title: "One of the defining characteristics of civil construction",
    image: "../src/assets/images/construction8.jpg",
    link: "#",
  },
  {
    title: "Key Elements of Civil Construction within the construction",
    image: "../src/assets/images/construction9.jpg",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="7xl" textAlign="center">
        <Text
          color="pink.500"
          fontWeight="bold"
          textTransform="uppercase"
          mb={2}
        >
          Blog & News
        </Text>
        <Heading mb={3}>Articles & blog posts</Heading>
        <Text maxW="700px" mx="auto" mb={12} color="gray.600">
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {posts.map((post, idx) => (
            <Box
              key={idx}
              bg="white"
              borderRadius="2xl"
              overflow="hidden"
              boxShadow="md"
              _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
              transition="all 0.3s ease"
              textAlign="left"
            >
              <Image
                src={post.image}
                alt={post.title}
                w="100%"
                h="220px"
                objectFit="cover"
              />
              <Box p={6}>
                <Text fontSize="lg" fontWeight="medium" mb={4}>
                  {post.title}
                </Text>
                <Button
                  size="sm"
                  bg="pink.500"
                  color="white"
                  _hover={{ bg: "pink.600" }}
                  borderRadius="md"
                >
                  Read More
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Blogs;
