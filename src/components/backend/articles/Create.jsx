import React, { useState, useRef, useMemo } from "react";
import Sidebar from "../../common/Sidebar";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Box, Container, Flex, Button, Heading } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../common/https";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import PropTypes from "prop-types";

const Create = ({ placeholder }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [imageId, setImageId] = useState(null);
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Type here...",
    }),
    [placeholder]
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const bgCard = useColorModeValue("white", "gray.800");
  const headingColor = useColorModeValue("gray.700", "white");

  const onSubmit = async (data) => {
    const newData = { ...data, content: content, imageId: imageId };
    const response = await fetch(apiUrl + "articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token(),
      },
      body: JSON.stringify(newData),
    });
    const res = await response.json();
    if (!res.status) {
      toast.error(res.message);
      return;
    } else {
      toast.success(res.message);
      navigate("/admin/articles");
    }
  };

  const handleFile = async (e) => {
    const formData = new FormData();
    const file = e.target.files[0];
    formData.append("image", file);
    await fetch(apiUrl + "temp-images", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token(),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setIsDisabled(true);
        if (res.status == false) {
          toast.error(res.errors.image[0]);
          setIsDisabled(false);
        } else {
          setImageId(res.data.id);
          setIsDisabled(false);
        }
        setIsDisabled(false);
      });
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
                Articles/Create
              </Heading>
              <Button
                colorScheme="pink"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                transition="all 0.2s"
                onClick={() => window.history.back()}
              >
                Back
              </Button>
            </Flex>
            <hr />
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={5} align="stretch">
                <FormControl>
                  <FormLabel>Title</FormLabel>
                  <Input
                    {...register("title", {
                      required: "Service Title is required",
                    })}
                    type="text"
                    placeholder="Enter service name"
                  />
                  {errors.title && (
                    <p style={{ color: "red" }}>{errors.title?.message}</p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Slug</FormLabel>
                  <Input
                    {...register("slug", { required: "Slug is required" })}
                    type="text"
                    placeholder="Enter slug"
                  />
                  {errors.slug && (
                    <p style={{ color: "red" }}>{errors.slug?.message}</p>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel>Author</FormLabel>
                  <Input
                    {...register("author", { required: "Author is required" })}
                    type="text"
                    placeholder="Enter author"
                  />
                  {errors.author && (
                    <p style={{ color: "red" }}>{errors.author?.message}</p>
                  )}
                </FormControl>

                {/* <FormControl>
                  <FormLabel>Short Description</FormLabel>
                  <Textarea
                    {...register("short_desc", {
                      required: "Short Description is required",
                    })}
                    placeholder="Enter short description"
                  />
                  {errors.short_desc && (
                    <p style={{ color: "red" }}>
                      {errors.short_desc?.message}
                    </p>
                  )}
                </FormControl> */}

                <FormControl>
                  <FormLabel>Content</FormLabel>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) => setContent(newContent)}
                  />
                  {errors.content && (
                    <p style={{ color: "red" }}>{errors.content?.message}</p>
                  )}
                </FormControl>

                <FormControl>
                  <FormLabel>Image</FormLabel>
                  <Input onChange={handleFile} type="file" />
                </FormControl>

                <FormControl>
                  <FormLabel>Status</FormLabel>
                  <Select
                    {...register("status", { required: "Status is required" })}
                    placeholder="Select status"
                  >
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </Select>
                  {errors.status && (
                    <p style={{ color: "red" }}>{errors.status?.message}</p>
                  )}
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="pink"
                  borderRadius="full"
                  size="lg"
                  fontWeight="bold"
                  _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
                  transition="all 0.2s"
                  isDisabled={isDisabled}
                >
                  SUBMIT
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  );
};

Create.propTypes = {
  placeholder: PropTypes.string,
};

export default Create;
