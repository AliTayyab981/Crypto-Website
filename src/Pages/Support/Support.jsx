import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { Box, Button, Card, Checkbox, Flex, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import { GrMail } from "react-icons/gr";



const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Box h="580px">
        <Flex gap="50px" flexDirection={{
          lg: "column",
          xl: "row",
          base: "column"
        }} >
          <Stack  >
            <Icon boxSize="30px" color="#5F00D9" as={GrMail} />
            <Text fontSize="32px" fontWeight="bold" >Contact us</Text>
            <Text color="#535D66"  >Have a question or just want to know more? Feel free to  <br />
              reach out to us.</Text>
          </Stack >
          <Card flexGrow={1} p="20px" display="flex" gap="20px">
            <Text>
              You will receive response within 24 hours of time of submit.
            </Text>
            <HStack flexDirection={{
              lg: "row",
              xl: "row",
              base: "column"
            }} >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input placeholder='Enter Name' />
              </FormControl>
              <FormControl>
                <FormLabel>Surname</FormLabel>
                <Input placeholder='Enter Surname' />
              </FormControl>
            </HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Enter Email' />
            </FormControl>
            <FormControl>
              <FormLabel>Text</FormLabel>
              <Textarea rows={5} placeholder='Your Message' />
            </FormControl>
            <Checkbox defaultChecked>I agree with <Box as="span" color='#5F00D9' >Terms & Conditions.</Box> </Checkbox>
            <Button>Send a Message</Button>
            <Button _hover={{
              color: "black",
              bg: "white"
            }} bg="#5F00D9" color="white" >Book a Meeting</Button>
          </Card>
        </Flex>
      </Box>

    </DashboardLayout>
  )
}

export default Support
