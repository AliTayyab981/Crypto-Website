import { Box, Container, Flex, calc, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideBar from './SideBar'
import TopBar from './TobBar'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box display={{
        base: "none",
        lg: "flex"
      }}  >
        <SideBar />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1} >
        <TopBar onOpen={onOpen} title={title} />
        <Container overflowX="hidden" overflowY="auto" h="calc(100vh-64px)" mt="20px" maxW="1184px" >
          {children}
        </Container>
      </Box>
    </Flex>
  )
}

export default DashboardLayout
