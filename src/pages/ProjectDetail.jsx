import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { apiUrl, fieUrl } from "../components/common/https";
import Testimony from "../components/frontend/Testimony";
import Footer from "../components/common/Footer";

const ProjectDetail = () => {
  const params = useParams();
  const [project, setProject] = useState(null);
  const fetchService = async () => {
    try {
      const response = await fetch(apiUrl + "get-project/" + params.id);
      const data = await response.json();
      setProject(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchService();
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
            Services
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
        {!project ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent={{ base: "center", md: "space-between" }}
              gap={10}
              maxW="7xl"
              mx="auto"
              px={10}
              py={20}
            >
              <Box w={"30%"} bg="white" boxShadow="md" p={10} borderRadius="md">
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 5,
                  }}
                >
                  <Text fontSize={"3xl"} fontWeight={"bold"}>
                    Insights
                  </Text>
                  <>
                    {project?.location && (
                      <li style={{ borderBottom: "1px solid red" }}>
                        <span>Location</span>
                        <Text fontWeight={"bold"} mb={0}>
                          {project?.location}
                        </Text>
                      </li>
                    )}
                    {project?.construction_type && (
                      <>
                        <li style={{ borderBottom: "1px solid red" }}>
                          <span>Construction Type</span>
                        </li>
                        <Text fontWeight={"bold"} mb={0}>
                          {project?.construction_type}
                        </Text>
                      </>
                    )}
                    {project?.sector && (
                      <>
                        <li style={{ borderBottom: "1px solid red" }}>
                          <span>Sector</span>
                        </li>
                        <Text fontWeight={"bold"} mb={0}>
                          {project?.sector}
                        </Text>
                      </>
                    )}
                  </>
                </ul>
              </Box>
              <Box flex={1} bg="white" boxShadow="md" p={10} borderRadius="md">
                <Image
                  src={
                    project?.image
                      ? `${fieUrl}uploads/projects/large/${project.image}`
                      : "../src/assets/images/construction1.jpg"
                  }
                  alt={project?.title || ""}
                  w="100%"
                  h="300px"
                  objectFit="cover"
                  borderRadius="md"
                />
              </Box>
            </Flex>
            <Text
              px={10}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"bold"}
              mb={5}
            >
              Description
            </Text>
            <Card shadow={"md"}>
              <Text
                px={10}
                textAlign={"center"}
                dangerouslySetInnerHTML={{ __html: project?.content || "" }}
              />
            </Card>
          </>
        )}
      </Box>
      <Testimony />
      <Footer/>
    </>
  );
};

export default ProjectDetail;
