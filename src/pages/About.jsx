import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import OurTeam from "../components/frontend/OurTeam";
import Testimony from "../components/frontend/Testimony";
import { Box, Text } from "@chakra-ui/react";

const About = () => {
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
            About Us
          </Text>
          <Text
            fontSize={"xl"}
            color="white"
            textShadow="2px 2px 4px black"
            w={"30%"}
          >
            we excel at transforming your vision into reality with exceptional
            craftsmanship
          </Text>
        </Box>
      </Box>
      <OurTeam />
      <Testimony/>
      <Footer />
    </>
  );
};

export default About;
