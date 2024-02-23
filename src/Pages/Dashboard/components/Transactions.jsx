import {  Box, Button, Container, Divider, Flex, Grid, HStack, Stack, Text} from '@chakra-ui/react'
import React from 'react'
import { BiSolidDollarCircle } from "react-icons/bi";

import { PiCurrencyBtcFill } from "react-icons/pi";


const Transactions = () => {
    const Transactions = [{
        id : 1 ,
        icon : <PiCurrencyBtcFill />
        ,
        text : "INR Deposit",
        price : "+ ₹81,123.10",
        data : "2022-06-09 7:06 PM"
    },
    {   
        id : 2 ,
        icon : <BiSolidDollarCircle />
        ,
        text : "BTC Sell",
        price : "- 12.48513391 BTC",
        data : "2022-06-09 7:06 PM"
    },
    {   id : 3,
        icon : <PiCurrencyBtcFill />
        ,
        text : "INR Deposit",
        price : "+ ₹81,123.10",
        data : "2022-06-09 7:06 PM"
    }
]
  return (
 <Box>
     <Flex
    flexDirection="column" 
    align="start"
    bg="white" borderRadius="16px" 
    h={{
        xl: "300px",
        lg: "400px",
        base: "350px"}}

       
>
  <Container  mt="10px" px="30px" >
    <Text fontSize="14px"   color="#535D66"  fontWeight="medium" >
    Recent Transactions
    </Text>
    {
        Transactions.map((transaction)=>(
           <>
           <Flex  gap="20px" mt="20px" >
             <Grid  placeItems="Center" borderRadius="full" bg ="#F3F3F7" h="40px" w="40px" >
            {transaction.icon}
           </Grid>
            <Flex  flexDirection={{
              xl : "row",
              lg : "column",
              base : "row"
            }} w="full" justifyContent="space-between"  >
            <Stack spacing="0" >
            <Text fontSize="16px" >
            {transaction.text}
            </Text>
            <Text  fontSize="14px" color="#797E82" >
            {transaction.data}
            </Text>
            </Stack>
            <Text>{transaction.price}</Text>
           </Flex>
           </Flex>
           <Divider/>
           </>
        ))

    }
    <Button mt="20px" w="full" >
            View All
    </Button>
 </Container>
  </Flex>
 </Box>
  )
}

export default Transactions
