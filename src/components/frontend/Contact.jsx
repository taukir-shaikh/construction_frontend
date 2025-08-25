import React, { useState } from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Container maxW="7xl" py={10}>
      {/* Heading */}
      <VStack spacing={3} textAlign="center" mb={10}>
        <Heading as="h2" size="xl">
          Contact Us
        </Heading>
        <Text fontSize="md" color="gray.600" maxW="700px">
          Our dedicated experts are here to help you with any of your questions,
          contact us by filling out the form below and we will be in touch
          shortly.
        </Text>
      </VStack>

      {/* Layout */}
      <Flex
        direction={{ base: "column", md: "row" }}
        gap={8}
        align="flex-start"
      >
        {/* Contact Info */}
        <Box
          bg="white"
          p={6}
          borderRadius="2xl"
          boxShadow="lg"
          flex="1"
          minW="250px"
        >
          <Text fontWeight="bold" mb={2}>
            Call Us
          </Text>
          <Text mb={4}>(888-000-0000)</Text>
          <Text mb={4}>(222-123-12345)</Text>

          <Text fontWeight="bold" mb={2}>
            You can write us
          </Text>
          <Text mb={1}>example@example.com</Text>
          <Text mb={4}>info@example.com</Text>

          <Text fontWeight="bold" mb={2}>
            Address
          </Text>
          <Text>B-18X, Rajaji Puram</Text>
          <Text>Lucknow, Uttar Pradesh, 226017</Text>
          <Text>0522400XXXX</Text>
        </Box>

        {/* Contact Form */}
        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          p={6}
          borderRadius="2xl"
          boxShadow="lg"
          flex="2"
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Subject</FormLabel>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </FormControl>
          </SimpleGrid>

          <FormControl mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />
          </FormControl>

          <Button
            type="submit"
            mt={4}
            colorScheme="pink"
            px={6}
            borderRadius="md"
          >
            SUBMIT
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}
