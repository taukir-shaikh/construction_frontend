import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl, fieUrl } from "../components/common/https";

const latestBlogs = [
  {
    id: 1,
    title: "Dummy article new",
    img: "https://via.placeholder.com/80x60",
  },
  {
    id: 2,
    title:
      "The Benefits of Modular Construction Efficiency, Flexibility, and Sustainability",
    img: "https://via.placeholder.com/80x60",
  },
  {
    id: 3,
    title: "Challenges and Solutions in Commercial Construction Projects",
    img: "https://via.placeholder.com/80x60",
  },
  {
    id: 4,
    title: "Residential Construction Trends: What Homebuyers Are Looking For",
    img: "https://via.placeholder.com/80x60",
  },
  {
    id: 5,
    title: "Smart Technology in Construction: Transforming How We Build",
    img: "https://via.placeholder.com/80x60",
  },
];
const BlogDetail = () => {
    const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const params = useParams();
  const fetchBlog = async () => {
    try {
      const response = await fetch(apiUrl + "get-article/" + params.id);
      const data = await response.json();
      setBlog(data?.data);
    } catch (error) {
      console.error(error);
    }
  };
    const fetchBlogs = async () => {
      try {
        const response = await fetch(apiUrl + "get-articles");
        const data = await response.json();
        setBlogs(data?.data);
      } catch (error) {
        console.error(error);
      }
    };
  useEffect(() => {
    fetchBlogs();
    fetchBlog();
  }, [params.id]);
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
            Blog & News
          </Text>
        </Box>

        <Flex w="100%" p={10} gap={10} align="flex-start">
          {/* Left Section */}
          <Box flex="3">
            <Text fontSize="3xl" fontWeight="bold" mb={2}>
              {blog?.title}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={4}>
              by {blog?.author|| "User"} {blog?.created_at}
            </Text>

            {blog?.image && (
              <Image
                src={`${fieUrl}uploads/articles/small/${blog.image}`}
                width={"100%"}
                height={"400px"}
                alt="Blog Image"
                borderRadius="md"
                mb={4}
              />
            )}

            <Text fontSize="md" color="gray.700">
              {/* You can add blog content here */}
              {blog?.content}
            </Text>
          </Box>

          {/* Right Section (Sidebar) */}
          <Box
            flex="1"
            bg="white"
            p={5}
            borderRadius="lg"
            boxShadow="md"
            h="fit-content"
          >
            <Text fontSize="lg" fontWeight="bold" mb={4}>
              Latest Blogs
            </Text>

            <VStack align="stretch" spacing={4}>
              {blogs.map((blog, idx) => (
                <Box _hover={{ bg: "gray.50" }} key={blog.id} cursor={"pointer"} onClick={() => navigate(`/blog/${blog.id}`)}>
                  <HStack align="flex-start" spacing={3}>
                    <Image
                      src={`${fieUrl}uploads/articles/small/${blog.image}`}
                      alt={blog.title}
                      boxSize="60px"
                      objectFit="cover"
                      borderRadius="md"
                    />
                    <Text fontSize="sm" fontWeight="medium" noOfLines={3}>
                      {blog.title}
                    </Text>
                  </HStack>
                  {idx !== latestBlogs.length - 1 && (
                    <Divider borderColor="gray.200" mt={3} />
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default BlogDetail;
