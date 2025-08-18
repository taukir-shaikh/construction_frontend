import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Avatar,
  Flex,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Shivani",
    role: "CTO",
    avatar: "/avatars/shivani.jpg",
    feedback:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
  },
  {
    name: "Rani",
    role: "DEV",
    avatar: "/avatars/rani.jpg",
    feedback:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
  },
  {
    name: "Mohit",
    role: "Developer",
    avatar: "/avatars/mohit.jpg",
    feedback:
      "We recently partnered with SAASA for our construction project, and the experience was outstanding. Their team demonstrated exceptional professionalism, attention to detail, and commitment to quality. From planning to execution.",
  },
  {
    name: "Ankit",
    role: "Engineer",
    avatar: "/avatars/ankit.jpg",
    feedback:
      "SAASA's professionalism and work quality were exceptional from start to finish. Highly recommended!",
  },
  {
    name: "Priya",
    role: "Architect",
    avatar: "/avatars/priya.jpg",
    feedback:
      "Outstanding attention to detail and client service. SAASA made our project stress-free.",
  },
];

const Testimony = () => {
  const cardsPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - cardsPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - cardsPerView : prevIndex - 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <Box py={20} bg="white" position="relative">
      {/* Decorative background */}
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
        <Text color="pink.500" fontWeight="bold" textTransform="uppercase" letterSpacing="wide">
          Testimonials
        </Text>
        <Heading my={4} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          What people are saying about us
        </Heading>
        <Text maxW="700px" mx="auto" mb={12} color="gray.600" fontSize={{ base: "md", md: "lg" }}>
          We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.
        </Text>

        {/* Custom slider controls */}
        <Flex justify="center" mb={6}>
          <Box 
            as="button"
            onClick={prevSlide}
            mx={2}
            p={3}
            borderRadius="full"
            bg="white"
            boxShadow="md"
            _hover={{ bg: "pink.100" }}
            aria-label="Previous slide"
          >
            ←
          </Box>
          <Box 
            as="button"
            onClick={nextSlide}
            mx={2}
            p={3}
            borderRadius="full"
            bg="white"
            boxShadow="md"
            _hover={{ bg: "pink.100" }}
            aria-label="Next slide"
          >
            →
          </Box>
        </Flex>

        {/* Testimonial cards */}
        <Flex 
          justify="center"
          wrap="wrap"
          mx={-4}
          transition="transform 0.5s ease"
        >
          {visibleTestimonials.map((t, idx) => (
            <Box
              key={idx}
              p={8}
              borderRadius="2xl"
              boxShadow="lg"
              bg="white"
              minH="320px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              textAlign="left"
              w={{ base: "100%", md: `calc(100%/${cardsPerView} - 32px)` }}
              mx={4}
              mb={8}
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-5px)"
              }}
              border="1px solid"
              borderColor="gray.100"
            >
              {/* Rating Stars */}
              <HStack mb={4} spacing={1}>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <FaStar key={i} color="#F6AD55" size={18} />
                  ))}
              </HStack>

              {/* Feedback Text */}
              <Text
                color="gray.700"
                fontSize={{ base: "sm", md: "md" }}
                mb={6}
                lineHeight="tall"
              >
                "{t.feedback}"
              </Text>

              {/* Footer with Avatar */}
              <Box borderTop="1px solid" borderColor="gray.100" pt={4}>
                <Flex align="center">
                  <Avatar size="md" src={t.avatar} name={t.name} mr={3} bg="pink.100" />
                  <Box>
                    <Text fontWeight="bold" fontSize="lg">{t.name}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {t.role}
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>

        {/* Dots indicator */}
        <Flex justify="center" mt={4}>
          {testimonials.map((_, idx) => (
            <Box
              key={idx}
              as="button"
              onClick={() => setCurrentIndex(Math.min(idx, testimonials.length - cardsPerView))}
              w="12px"
              h="12px"
              bg={idx >= currentIndex && idx < currentIndex + cardsPerView ? "pink.500" : "gray.200"}
              borderRadius="full"
              mx={1}
              _hover={{ bg: "pink.400" }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimony;