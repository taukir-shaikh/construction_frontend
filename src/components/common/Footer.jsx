import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

const Footer = () => {
  const bg = useColorModeValue("#1a1d1a", "#1a1d1a"); // dark background
  const textColor = useColorModeValue("gray.300", "gray.300");
  const headingColor = "orange.400";

  return (
    <Box bg={bg} color={textColor} pt={12}>
      <Container maxW="7xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          wrap="wrap"
          gap={10}
        >
          {/* Brand & Description */}
          <Box flex="1" minW="200px">
            <Heading as="h4" fontSize="lg" color={headingColor} mb={3}>
              UrbanEdge Constructions
            </Heading>
            <Text fontSize="sm">
              Our post-construction services gives you peace of mind knowing
              that we are still here for you even after.
            </Text>
          </Box>

          {/* Our Services */}
          <Box flex="1" minW="200px">
            <Heading as="h4" fontSize="lg" color={headingColor} mb={3}>
              Our Services
            </Heading>
            <Stack spacing={2}>
              <Link href="#">Specialty Construction</Link>
              <Link href="#">Specialty Construction</Link>
              <Link href="#">Specialty Construction</Link>
              <Link href="#">Specialty Construction</Link>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box flex="1" minW="200px">
            <Heading as="h4" fontSize="lg" color={headingColor} mb={3}>
              Quick Links
            </Heading>
            <Stack spacing={2}>
              <Link href="#">About Us</Link>
              <Link href="#">Services</Link>
              <Link href="#">Projects</Link>
              <Link href="#">Blogs</Link>
              <Link href="#">Contact us</Link>
            </Stack>
          </Box>

          {/* Contact Us */}
          <Box flex="1" minW="200px">
            <Heading as="h4" fontSize="lg" color={headingColor} mb={3}>
              Contact Us
            </Heading>
            <Stack spacing={1} fontSize="sm">
              <Text>(888-000-0000)</Text>
              <Text>info@example.com</Text>
              <Text>B-18X, Rajaji Puram</Text>
              <Text>Lucknow, Uttar Pradesh, 226017</Text>
              <Text>0522400XXXX</Text>
            </Stack>
          </Box>
        </Flex>

        {/* Divider */}
        <Divider borderColor="gray.600" my={6} />

        {/* Bottom Copyright */}
        <Text fontSize="sm" textAlign="center" pb={4}>
          Copyright © {new Date().getFullYear()} UrbanEdge Constructions. All
          Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
