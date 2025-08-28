import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { apiUrl, fieUrl } from "../components/common/https";
import Testimony from "../components/frontend/Testimony";
import Footer from "../components/common/Footer";

const ServiceDetail = () => {
  const params = useParams();
  const [service, setService] = useState(null);
  const [services, setServices] = useState(null);
  const fetchService = async () => {
    try {
      const response = await fetch(apiUrl + "get-service/" + params.id);
      const data = await response.json();
      setService(data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchServices = async () => {
    try {
      const response = await fetch(apiUrl + "get-services");
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchServices();
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
        {!service ? (
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
                  <Text fontSize={"3xl"} fontWeight={"bold"}>Services</Text>
                  {services?.map((service, i) => (
                    <li key={i}>
                      <Link
                        to={`/services/${service.id}`}
                        style={{
                          textDecoration: "none",
                          borderBottom: "2px solid gold",
                        }}
                      >
                        <Text
                          fontWeight={"semibold"}
                        >
                          {service?.title || ""}
                        </Text>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Box>
              <Box flex={1} bg="white" boxShadow="md" p={10} borderRadius="md">
                <Image
                  src={
                    service?.image
                      ? `${fieUrl}uploads/services/large/${service.image}`
                      : "../src/assets/images/construction1.jpg"
                  }
                  alt={service?.title || ""}
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
                dangerouslySetInnerHTML={{ __html: service?.content || "" }}
              />
            </Card>
          </>
        )}
      </Box>
      <Testimony/>
      <Footer/>
    </>
  );
};

export default ServiceDetail;
