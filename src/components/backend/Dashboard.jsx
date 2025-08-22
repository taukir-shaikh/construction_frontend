import {
  Box,
  Container,
  Flex,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'

const Dashboard = () => {
  const bgCard = useColorModeValue('white', 'gray.800')




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
            <Text fontSize="xl" fontWeight="bold" mb={6} textAlign={"center"}>Welcome to Admin Dashboard</Text>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
