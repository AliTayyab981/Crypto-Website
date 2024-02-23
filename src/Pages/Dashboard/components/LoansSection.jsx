import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const LoansSection = ({imgurl1}) => {
  return (
    <Box bg="white"  borderRadius="16px"  >
    <Flex
      mx="20px"
      py="10px"
      gap="5px"
   flexDirection="column" 
   align="start"
    bgImage={imgurl1}
    bgSize="cover"
    bgRepeat="no-repeat"  
   h={{
       xl: "130px",
       lg: "130px",
       base: "140px"}}
>
<Tag color="white" bg="#5F00D9" borderRadius="100px" >
    Loans
</Tag>
<Text color="black" fontSize="18px" fontWeight="bold" >
Learn more about our real estate, mortgage, and  corporate account services
</Text>





 </Flex>
</Box>
  )
}

export default LoansSection
