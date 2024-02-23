import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { LuArrowDownUp } from 'react-icons/lu'
import { BiSupport } from 'react-icons/bi'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/"
        },
        {
            icon: LuArrowDownUp,
            text: "Transactions",
            link: "/transactions"
        }
    ]
    return (
        <Stack bg="white"
            h="100vh"
            justifyContent="space-between" w={{
                base: "full",
                lg: "256px"
            }}
            boxShadow={{
                lg: "xl",
                base: "none"
            }}
        >

            <Box>
                <Heading ml="28px" mt="54px" pb="12px" fontsize="18px">@TMCRIPTO</Heading>
                {
                    navLinks.map((nav) =>
                        <Link key={nav.text} to={nav.link}>
                            <Box mx="12px" >
                                <HStack fontWeight="medium" padding="12px 16px 12px 16px" gap="16px" cursor="pointer" color="#797E82"
                                    _hover={{
                                        "backgroundColor": "#EEEEF4",
                                        "borderRadius": "10px",
                                        "color": "#171717"
                                    }}
                                >
                                    <Icon as={nav.icon} />
                                    <Text>{nav.text}</Text>
                                </HStack>
                            </Box>
                        </Link>
                    )}
            </Box>
            <Link to="/support" >
                <Box mb="20px" mx="12px">
                    <HStack padding="12px 16px 12px 16px" gap="16px" cursor="pointer" color="#797E82"
                        _hover={{
                            "backgroundColor": "#EEEEF4",
                            "borderRadius": "10px",
                            "color": "#171717"
                        }}
                    >
                        <Icon as={BiSupport} />
                        <Text>Support</Text>
                    </HStack>
                </Box></Link>

        </Stack>)
}

export default SideBar
