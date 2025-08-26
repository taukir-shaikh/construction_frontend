import React, { useEffect, useState } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import {
  Box,
  Container,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Sidebar from "../../common/Sidebar";
import { apiUrl, token } from "../../common/https";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Show = () => {
  const [testimonials, setTestimonials] = useState([]);
  const navigate = useNavigate();

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(apiUrl + "testimonials", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token(),
        },
      });
      const data = await response.json();

      setTestimonials(Array.isArray(data?.data) ? data.data : []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const bgCard = useColorModeValue("white", "gray.800");
  const tableHeadBg = useColorModeValue("gray.100", "gray.700");
  const hoverRowBg = useColorModeValue("gray.50", "gray.600");
  const headingColor = useColorModeValue("gray.700", "white");

  const handleCreate = () => {
    navigate("/admin/testimonials/create");
  };

  const handleEdit = (id) => {
    navigate(`/admin/testimonials/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      const response = await fetch(apiUrl + "testimonials" + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token(),
        },
      });
      const res = await response.json();

      if (res.status == true) {
        const filteredServices = testimonials.filter(
          (testimonial) => testimonial.id !== id
        );
        setTestimonials(filteredServices);
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    }
  };

  return (
    <>
      <Header />
      <Container maxW="container.xl" p={4}>
        <Flex gap={6}>
          <Box w="250px">
            <Sidebar />
          </Box>

          <Box
            flex={1}
            p={6}
            bg={bgCard}
            borderRadius="xl"
            boxShadow="lg"
            transition="all 0.3s ease"
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Heading size="md" fontWeight="semibold" color={headingColor}>
                Testimonials/Create
              </Heading>
              <Button
                colorScheme="pink"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                transition="all 0.2s"
                onClick={handleCreate}
              >
                CREATE
              </Button>
            </Flex>

            {Array.isArray(testimonials) && testimonials.length > 0 && (
              <Table
                variant="striped"
                colorScheme="gray"
                borderRadius="md"
                overflow="hidden"
              >
                <Thead bg={tableHeadBg}>
                  <Tr>
                    <Th>ID</Th>
                    <Th>testimonial</Th>
                    <Th>Citation</Th>
                    <Th>Designation</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {testimonials?.map((testimonial) => (
                    <Tr
                      key={testimonial.id}
                      _hover={{ bg: hoverRowBg }}
                      transition="background 0.2s"
                    >
                      <Td>{testimonial.id}</Td>
                      <Td fontWeight="medium">{testimonial.testimonial}</Td>
                      <Td>{testimonial.citation}</Td>
                      <Td>{testimonial.designation}</Td>
                      <Td>
                        <Box
                          as="span"
                          px={3}
                          py={1}
                          bg={
                            testimonial.status === 1 ? "green.100" : "red.100"
                          }
                          color="green.800"
                          fontSize="sm"
                          borderRadius="full"
                        >
                          {testimonial.status === 1 ? "Active" : "Inactive"}
                        </Box>
                      </Td>
                      <Td>
                        <Flex gap={2}>
                          <Button
                            size="sm"
                            colorScheme="yellow"
                            borderRadius="full"
                            onClick={() => handleEdit(testimonial.id)}
                            _hover={{ transform: "scale(1.05)" }}
                            transition="all 0.2s"
                          >
                            EDIT
                          </Button>
                          <Button
                            size="sm"
                            colorScheme="red"
                            borderRadius="full"
                            onClick={() => handleDelete(testimonial.id)}
                            _hover={{ transform: "scale(1.05)" }}
                            transition="all 0.2s"
                          >
                            DELETE
                          </Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

export default Show;
