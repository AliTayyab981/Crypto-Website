import { Box, Flex, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const ContactSection = ({imgurl2}) => {
  return (
    <Box bg="#5F00D9"  borderRadius="16px"  >
    <Flex
    mx="20px"
    py="10px"
    gap="5px"
   flexDirection="column" 
   align="start"
    bgImage={imgurl2}
    bgSize="cover"
    bgRepeat="no-repeat"  
   h={{
       xl: "130px",
       lg: "130px",
       base: "140px"}}
>
<Tag color="#5F00D9" borderRadius="100px" >
    Contact 
</Tag>
<Text color="White" fontSize="18px" fontWeight="bold" >
Learn more about our real estate, mortgage, and  corporate account services
</Text>



 </Flex>
</Box>
  )
}

export default ContactSection
