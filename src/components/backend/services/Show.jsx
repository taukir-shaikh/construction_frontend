import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
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
} from '@chakra-ui/react'
import Sidebar from '../../common/Sidebar'
import { apiUrl, token } from '../../common/https'
import { Navigate, useNavigate } from 'react-router-dom'

const Show = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    const fetchServices = async () => {
      try {
        const response = await fetch(apiUrl + 'services',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token(),
            }
        })
        const data = await response.json();
        console.log(data);
        
       setServices(Array.isArray(data?.data) ? data.data : [])
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    useEffect(() => {
      fetchServices();
    },[])

      const bgCard = useColorModeValue('white', 'gray.800')
      const tableHeadBg = useColorModeValue('gray.100', 'gray.700')
      const hoverRowBg = useColorModeValue('gray.50', 'gray.600')
      const headingColor = useColorModeValue('gray.700', 'white')
    
      const handleCreate = () => {
        navigate('/admin/services/create');
        console.log('Create new service clicked')
      }
    
      const handleEdit = (id) => {
        console.log(`Edit service with ID: ${id}`)
      }
    
      const handleDelete = (id) => {
        console.log(`Delete service with ID: ${id}`)
      }
    
  return (
    <>
    <Header/>
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
                Services/Create
              </Heading>
              <Button
                colorScheme="pink"
                borderRadius="full"
                boxShadow="md"
                _hover={{ boxShadow: 'xl', transform: 'scale(1.05)' }}
                transition="all 0.2s"
                onClick={handleCreate}
              >
                CREATE
              </Button>
            </Flex>

            {Array.isArray(services) && services.length > 0 && (
              <Table variant="striped" colorScheme="gray" borderRadius="md" overflow="hidden">
                <Thead bg={tableHeadBg}>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Title</Th>
                    <Th>Slug</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  { services?.map((service) => (
                    <Tr
                      key={service.id}
                      _hover={{ bg: hoverRowBg }}
                      transition="background 0.2s"
                    >
                      <Td>{service.id}</Td>
                      <Td fontWeight="medium">{service.title}</Td>
                      <Td>{service.slug}</Td>
                      <Td>
                        <Box
                          as="span"
                          px={3}
                          py={1}
                          bg="green.100"
                          color="green.800"
                          fontSize="sm"
                          borderRadius="full"
                        >
                          {(service.status===1)?'Active':'Inactive'}
                        </Box>
                      </Td>
                      <Td>
                        <Flex gap={2}>
                          <Button
                            size="sm"
                            colorScheme="yellow"
                            borderRadius="full"
                            onClick={() => handleEdit(service.id)}
                            _hover={{ transform: 'scale(1.05)' }}
                            transition="all 0.2s"
                          >
                            EDIT
                          </Button>
                          <Button
                            size="sm"
                            colorScheme="red"
                            borderRadius="full"
                            onClick={() => handleDelete(service.id)}
                            _hover={{ transform: 'scale(1.05)' }}
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
    <Footer/>
    </>
  )
}

export default Show
