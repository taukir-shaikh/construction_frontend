import React from "react";
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
import { useForm } from "react-hook-form";
import { apiUrl } from "../common/https";
import { toast } from "react-toastify";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch(apiUrl + "contact-now", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!result.status) {
      alert(result.message);
      return;
    }
    toast.success(result.message);
    reset();
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
          onSubmit={handleSubmit(onSubmit)}
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
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p style={{ color: "red" }}>{errors.name?.message}</p>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email?.message}</p>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                placeholder="Phone No."
                {...register("phone")}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Subject</FormLabel>
              <Input
                name="subject"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p style={{ color: "red" }}>{errors.subject?.message}</p>
              )}
            </FormControl>
          </SimpleGrid>

          <FormControl mt={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              rows={5}
            />
            {errors.message && (
              <p style={{ color: "red" }}>{errors.message?.message}</p>
            )}
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
