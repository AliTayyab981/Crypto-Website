import { Box, Button, Container, HStack, Heading, Icon } from '@chakra-ui/react'
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
const TobBar = ({ onOpen, title }) => {
  return (
    <Box bg="white" boxShadow="sm" >
      <Container maxW="1184px" >
        <HStack mx="auto" justifyContent="space-between" w="100wh" h="64px">
          <Icon as={FaBars} fontSize="30px" mx="20px" onClick={onOpen}
            display={{
              lg: "none",
              base: "block"
            }}
          />
          <Heading fontWeight="medium" >{title}</Heading>
          <Menu>
            <MenuButton fontSize="30px" bg="white" as={Button}>
              <Icon as={CgProfile} />
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Container>
    </Box>
  )
}

export default TobBar
