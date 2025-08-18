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
import { apiUrl } from "../common/https";

// const services = [
//   {
//     title: "Specialty Construction",
//     img: "../src/assets/images/construction2.jpg",
//     desc: "Specialty construction services tailored to unique projects.",
//   },
//   {
//     title: "Industrial Construction",
//     img: "../src/assets/images/construction3.jpg",
//     desc: "Large-scale industrial building solutions for factories and plants.",
//   },
//   {
//     title: "Building Construction",
//     img: "../src/assets/images/construction5.jpg",
//     desc: "Building construction is a broad and essential sector within the construction industry that focuses on the creation of structures designed for human occupancy and use.",
//   },
//   {
//     title: "Residential Construction",
//     img: "../src/assets/images/construction6.jpg",
//     desc: "Custom and large-scale housing projects for all needs.",
//   },
// ];

const Services = () => {
    const [services, setServices] = useState([]);
  const fetchLatestServices = async () => {
    const response = await fetch(apiUrl + "get-latest-services?limit=3");
    const result = await response.json();    
    setServices(result);
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);
  
  return (
    <Box w={"100%"} bg="gray.50" py={10}>
      <Container maxW="8xl" textAlign="center">
        <Text color="pink.500" fontWeight="bold" mb={2}>
          OUR SERVICES
        </Text>
        <Heading mb={4}>Our construction services</Heading>
        <Text mb={10} maxW="600px" mx="auto" color="gray.600">
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </Text>

        <Flex gap={4} justifyContent={"space-between"} alignItems={"center"}>
          {services?.map((service, i) => (
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
                src={service.image|| "../src/assets/images/construction1.jpg"}
                alt={service.title}
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
                {service.title}
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
                  {service.title}
                </Heading>
                <Text color="gray.200" mb={4} fontSize="sm">
                  {service.short_desc}
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

export default Services;
