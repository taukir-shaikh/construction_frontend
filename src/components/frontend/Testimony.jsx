import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Shivani",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Rani",
    role: "DEV",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Mohit",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Anita",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Raj",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Engineer",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Vikram",
    role: "Consultant",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
  {
    name: "Sonal",
    role: "Architect",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    review:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
    rating: 5,
  },
];

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // initially show 4 cards
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box py={20} bg="white" position="relative">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="50%"
        bg="pink.50"
        zIndex={0}
        borderBottomLeftRadius="3xl"
        borderBottomRightRadius="3xl"
      />

      <Container maxW="7xl" textAlign="center" position="relative" zIndex={1}>
        <Text
          color="pink.500"
          fontWeight="bold"
          textTransform="uppercase"
          letterSpacing="wide"
        >
          Testimonials
        </Text>
        <Heading my={4} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          What people are saying about us
        </Heading>
        <Text
          maxW="700px"
          mx="auto"
          mb={12}
          color="gray.600"
          fontSize={{ base: "md", md: "lg" }}
        >
          We offer a diverse array of construction services, spanning
          residential, commercial, and industrial projects.
        </Text>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <Box key={index} px={2}>
              <Box
                p={6}
                bg="white"
                rounded="xl"
                shadow="md"
                h="420px"
                display="flex"
                flexDirection="column"
              >
                <Flex mb={4}>
                  {Array(t.rating)
                    .fill("")
                    .map((_, i) => (
                      <Text key={i} color="yellow.400">
                        ★
                      </Text>
                    ))}
                </Flex>
                <Text mb={6} flex="1" overflow="hidden">
                  {t.review}
                </Text>
                <Flex align="center" mt="auto">
                  <Avatar src={t.image} name={t.name} size="md" mr={4} />
                  <Box>
                    <Text fontWeight="bold">{t.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {t.role}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimony;
