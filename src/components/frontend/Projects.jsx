import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Image,
  Heading,
  Text,
  Button,
  Stack,
  Grid,
  Flex,
} from "@chakra-ui/react";
import { apiUrl, fieUrl } from "../common/https";

const Projects = () => {
      const [projects, setProjects] = useState([]);
    const fetchLatestProjects = async () => {
      const response = await fetch(apiUrl + "get-latest-projects?limit=3");
      const result = await response.json();  
      console.log(result?.data);
        
      setProjects(result?.data);
    };
  
    useEffect(() => {
      fetchLatestProjects();
    }, []);

  return (
    <Box w={"100%"} bg="gray.50" py={10}>
      <Container maxW="8xl" textAlign="center">
        <Text color="pink.500" fontWeight="bold" mb={2}>
          OUR Projects
        </Text>
        <Heading mb={4}>Our construction projects</Heading>
        <Text mb={10} maxW="600px" mx="auto" color="gray.600">
          We offer a diverse array of construction projects, spanning
          residential, commercial, and industrial projects.
        </Text>

        <Flex gap={4} justifyContent={"flex-start"} alignItems={"center"}>
          {projects && projects?.map((project, i) => (
            <Box
              key={i}
              position="relative"
              borderRadius="xl"
              overflow="hidden"
              role="group"
              cursor="pointer"
              boxShadow="md"
              _hover={{ transform: "translateY(-5px)" }}
              transition="0.3s ease-in-out"
            >
              {/* Image */}
              <Image
                // src={project.img}
                src={`${fieUrl}uploads/projects/small/${project.image}`}
                alt={project.title}
                objectFit="cover"
                w="100%"
                h="300px"
                transition="0.3s ease-in-out"
              />

              {/* Title */}
              <Text
                position="absolute"
                bottom="4"
                left="4"
                fontWeight="bold"
                fontSize="lg"
                color="white"
              >
                {project.title}
              </Text>

              {/* Hover overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="rgba(0,0,0,0.6)"
                opacity="0"
                transition="0.3s ease-in-out"
                _hover={{ opacity: 1 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={6}
                textAlign="center"
              >
                <Heading size="md" color="white" mb={3}>
                  {project.title}
                </Heading>
                <Text color="gray.200" mb={4} fontSize="sm">
                  {project.desc}
                </Text>
                <Button size="sm" colorScheme="pink">
                  READ MORE
                </Button>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Projects;
