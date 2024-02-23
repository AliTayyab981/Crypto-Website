import React from 'react'
import {   Box, Card, CardBody, CardHeader, HStack, Heading, Stack, StackDivider, Tag, Text } from '@chakra-ui/react'
import {tabdata,tabcolour} from './tabdata.js'
const TabCards = () => {

    
  return (
<>{
      tabdata.map((data)=>(
        <Card key={data.id} mt="10px"  >
  <CardHeader>
    <Heading size='md'>ID : {data.id}</Heading>
  </CardHeader>
  <CardBody>
    <Stack>
      <Box>
      <Heading size='md' textTransform='uppercase'>
      <HStack> <Text>Type:</Text> <Text fontSize="15px" >{data.type.currency}</Text><Text fontSize="12px"  color="#797E82"  > {data.type.method}</Text></HStack>
      </Heading>
        <Heading size='md' textTransform='uppercase'>
        <HStack><Text>Data:</Text><Text fontSize="15px" >{data.datetime.date}</Text><Text fontSize="12px"  color="#797E82"  >  {data.datetime.time}</Text></HStack>
        </Heading>
        <Heading size='md' textTransform='uppercase'>
        <HStack><Text>Amount:</Text><Text fontSize="15px"  >{data.amount.amount}</Text></HStack>
        </Heading>
        <Heading m="10px" size='md' textTransform='uppercase'>
        <Tag borderRadius="full" py="5px" px="10px" bg={tabcolour[data.status]} >{data.status}</Tag>
        </Heading>
      </Box>
    </Stack>
  </CardBody>
        </Card>
      ))
    }
    
        </>
    
  )
}

export default TabCards
