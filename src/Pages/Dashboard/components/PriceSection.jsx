import { Box, Button, Container, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Time =[
     "7:15 PM",
     "8:15 PM",
     "9:15 PM",
     "10:15 PM",
     "11:15 PM"
]


const PriceSection = () => {
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
    <Container>
        <HStack
    mt="10px"
    px="30px"

      flexDirection={{
        base: "column",
        xl: "column",
        lg: "column",
      }}
>
  <HStack flexDirection={{
    lg : "column",
    xl : "row",
    base : "column"
  }}>
  <Stack   
  >
                   <HStack  >
                        <Text color="#535D66" fontWeight="medium" fontSize="14px">
                        Current Price
                            </Text>
                    </HStack>
                    <HStack  >
                        <Text color="#171717" fontWeight="medium" fontSize="24px">
                        ₹26,670.25
                        </Text>
                       <HStack  color="#059669" fontWeight="medium"  >
                       <Icon fontWeight="600px" as={MdArrowOutward} />
                        <Text   fontSize="14px">
                        0.04%
                        </Text>
                       </HStack>

                    </HStack>

    </Stack>
    {/* Buttons  */}
    <HStack px="30px"
                
            >
                <Button leftIcon={<Icon as={CiCirclePlus} />} fontWeight="sm" color="white" bg="#5F00D9"
                    _hover={{
                        bg: "#803bd9"
                    }}
                >
                    Deposit
                </Button>
                <Button leftIcon={<Icon as={CiCircleMinus} />} fontWeight="sm" color="white" bg="#5F00D9"
                    _hover={{
                        bg: "#803bd9"
                    }}
                    >
                    Withdraw
                </Button>             
    </HStack>
  </HStack>
  <HStack mt="15px"   w="100%" justifyContent="end" >
  <Box bg="#EEEEF4" borderRadius="5px"  p="4px" >
  <Tabs    variant='soft-rounded'>
  <TabList  >
    {
        ["1H","1D","1W","1M"].map((day)=>(
<Tab  _selected={{
  bg : "white"
}} fontSize="sm" mx="3px"  p="1" borderRadius="2px"  >{day}</Tab>
        ))   
         }
  </TabList>
</Tabs>
  </Box>
  </HStack>
    <Image src='./graph.svg'/>
    <HStack justifyContent="space-between"  w="100%"  >
    {
    Time.map((time)=>(
        <Text  color="#797E82" >{time}</Text>
    )
    )
    }
    </HStack>
    </HStack>
   </Container>
    </Flex>
   </Box>
  )
}

export default PriceSection
