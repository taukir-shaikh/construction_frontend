import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect, useState } from "react";
import { apiUrl, fieUrl } from "../components/common/https";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const response = await fetch(apiUrl + "get-projects");
    const result = await response.json();

    setProjects(result?.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <>
      <Header />
      <Box w="100%">
        <Box
          backgroundImage={`linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url('../src/assets/images/hero.jpg')`}
          minH="400px"
          backgroundSize="cover"
          backgroundPosition="center"
          display="flex"
          alignItems="left"
          justifyContent="flex-start"
          flexDirection="column"
          px={10}
          py={20}
        >
          <Text
            fontSize={"3xl"}
            fontWeight={"bold"}
            color="gold"
            textShadow="2px 2px 4px black"
            w={"30%"}
          >
            Quality Integrity Value
          </Text>
          <Text
            fontSize={"5xl"}
            fontWeight={"bold"}
            color="white"
            textShadow="2px 2px 4px black"
            w={"30%"}
          >
            Projects
          </Text>
          <Text
            fontSize={"xl"}
            color="white"
            textShadow="2px 2px 4px black"
            w={"30%"}
          >
            we excel at transforming your vision into reality with exceptional
            craftsmanship
          </Text>
        </Box>
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
              {projects &&
                projects?.map((project, i) => (
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
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
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
                      <Button size="sm" colorScheme="pink" onClick={() => navigate(`/project/${project.id}`)}>
                        READ MORE
                      </Button>
                    </Box>
                  </Box>
                ))}
            </Flex>
          </Container>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ProjectPage;
