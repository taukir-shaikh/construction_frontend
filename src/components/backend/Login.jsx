import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  useColorModeValue,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@chakra-ui/react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {useForm} from 'react-hook-form'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { authContext } from "./context/Auth";
import { useContext } from "react";

const Login = () => {
  const {login}= useContext(authContext);
    const {register,handleSubmit,formState:{errors}}=useForm();
  const bg = useColorModeValue("gray.50", "gray.900");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8000/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const result = await res.json();
    if (!result.status) {
      toast.error(result.message);
      return;
    }else{
      const userInfo = {
        id:result.data.id,
        token:result.token
      }
      localStorage.setItem("userInfo",JSON.stringify(userInfo));
      toast.success("Login Success");
      login(userInfo);
      navigate("/admin/dashboard");
    }
    console.log(result);
    
    
  };


  return (
    <>
      <Header />

      <Flex
        minH="100vh"
        justify="center"
        align="center"
        bg={bg}
        px={4}
        py={8}
      >
        <Card
          maxW="md"
          w="full"
          borderRadius="xl"
          boxShadow="2xl"
          bg={useColorModeValue("white", "gray.800")}
        >
          <CardHeader textAlign="center" pb={0}>
            <Heading as="h1" size="lg" color="teal.500">
              Welcome Back
            </Heading>
            <Text fontSize="sm" color="gray.500" mt={2}>
              Please login to your account
            </Text>
          </CardHeader>

          <Divider my={4} />

          <CardBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack spacing={5} align="stretch">
                <Box>
                  <Text fontWeight="semibold" mb={1}>
                    Email
                  </Text>
                  <Input
                  {...register('email',{required:"Email is required",pattern:{
                    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:"Invalid email address"
                  }})}
                    type="email"
                    placeholder="Enter your email"
                    borderRadius="md"
                    focusBorderColor="teal.400"
                  />
                  {errors.email && <p style={{color:"red"}}>{errors.email?.message}</p>}
                </Box>

                <Box>
                  <Text fontWeight="semibold" mb={1}>
                    Password
                  </Text>
                  <Input
                  {...register('password',{required:"Password is required"})}
                    type="password"
                    placeholder="Enter your password"
                    borderRadius="md"
                    focusBorderColor="teal.400"
                  />
                  {errors.password && <p style={{color:"red"}}>{errors.password?.message}</p>}
                </Box>

                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  borderRadius="md"
                >
                  Login
                </Button>
              </VStack>
            </form>
          </CardBody>
        </Card>
      </Flex>

      <Footer />
    </>
  );
};

export default Login;
