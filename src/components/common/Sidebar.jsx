import React from "react";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { useContext } from "react";
import {
  FaProjectDiagram,
  FaNewspaper,
  FaSignOutAlt,
  FaBlog,
  FaUsers,
  FaQuoteRight,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { authContext } from "../backend/context/Auth";

const Sidebar = () => {
  const { logout } = useContext(authContext);

  // ✅ call hooks here, not inside map
  const bgSidebar = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const linkBg = useColorModeValue("gray.50", "gray.800");
  const linkHoverBg = useColorModeValue("pink.100", "gray.700");
  const logoutBg = useColorModeValue("pink.50", "pink.900");

  const linkItems = [
    { label: "Dashboard", icon: FaBlog, to: "/admin/dashboard" },
    { label: "Articles", icon: FaNewspaper, to: "/admin/articles" },
    { label: "Services", icon: FaProjectDiagram, to: "/admin/services" },
    { label: "Projects", icon: FaProjectDiagram, to: "/admin/projects" },
    { label: "Testimonials", icon: FaQuoteRight, to: "/testimonials" },
    { label: "Members", icon: FaUsers, to: "/members" },
  ];

  return (
    <Box
      bg={bgSidebar}
      borderRight="1px"
      borderColor={borderColor}
      w="250px"
      minH="100vh"
      p={5}
      borderRadius="xl"
      boxShadow="lg"
    >
      <Flex direction="column" justify="space-between" h="full">
        <Flex direction="column" gap={3}>
          {linkItems.map((item) => (
            <RouterLink key={item.to} to={item.to}>
              <Flex
                align="center"
                gap={3}
                p={3}
                bg={linkBg}
                borderRadius="md"
                _hover={{
                  bg: linkHoverBg,
                  transform: "translateX(4px)",
                  boxShadow: "md",
                }}
                transition="all 0.2s"
              >
                <Icon as={item.icon} boxSize={5} color="pink.500" />
                <Text fontSize="md" fontWeight="medium">
                  {item.label}
                </Text>
              </Flex>
            </RouterLink>
          ))}
        </Flex>

        <Flex
          align="center"
          gap={3}
          p={3}
          mt={4}
          cursor="pointer"
          borderRadius="md"
          bg={logoutBg}
          color="pink.600"
          _hover={{
            bg: "pink.100",
            transform: "translateX(4px)",
            boxShadow: "md",
          }}
          transition="all 0.2s"
          onClick={logout}
        >
          <Icon as={FaSignOutAlt} boxSize={5} />
          <Text fontSize="md" fontWeight="medium">
            LOGOUT
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
