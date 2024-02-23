import {Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

const ProtfolioSection = () => {
    return (
        <HStack justifyContent="space-between" h={{
            xl: "106px",
            lg: "180px",
            base: "300px"
        }} flexDirection={{
            xl: "row",
            lg: "column",
            base: "column"
        }} w="960" bg="white" borderRadius="16px" >
            {/* Section Start */}
            <HStack
                mt={{
                    xl: "0px",
                    lg: "10px",
                    base: "10px"
                }}
                gap={{
                    xl: "64px",
                    lg: "30px",
                    base: "20px"
                }}
                px="30px"
                flexDirection={{
                    base: "column",
                    xl: "row",
                    lg: "row"
                }}
            >
                <Stack>
                    <HStack  >
                        <Text color="#535D66" fontWeight="medium" fontSize="14px">
                            Total Portfolio Value
                        </Text>
                        <Icon as={AiOutlineInfoCircle} />
                    </HStack>
                    <HStack  >
                        <Text color="#171717" fontWeight="medium" fontSize="24px">
                            ₹ 112,312.24
                        </Text>
                    </HStack>

                </Stack>
                <Stack>
                    <Stack>
                        <HStack>
                            <Text color="#535D66" fontWeight="medium" fontSize="14px">
                                Wallet Balances
                            </Text>
                        </HStack>
                        <HStack
                            flexDirection={{

                                base: "column",
                                xl: "row",
                                lg: "row"

                            }}
                        >
                            <Text color="#171717" fontWeight="medium" fontSize="24px">
                                22.39401000
                            </Text>
                            <Tag color="#797E82">BTC</Tag>
                            <HStack  >
                                <Text color="#171717" fontWeight="medium" fontSize="24px">
                                    ₹ 1,300.00
                                </Text>
                                <Tag color="#797E82">in</Tag>
                            </HStack>
                        </HStack>
                    </Stack>

                </Stack>
            </HStack  >
            {/* Section End */}
            {/* Button Start */}
            <HStack px="30px"
                mb={{
                    xl: "0px",
                    lg: "30px",
                    base: "30px"
                }}
            >
                <Button leftIcon={<Icon as={BiUpArrowAlt} />} fontWeight="sm" color="white" bg="#5F00D9"
                    _hover={{
                        bg: "#803bd9"
                    }}
                >
                    Deposit
                </Button>
                <Button leftIcon={<Icon as={BiDownArrowAlt} />} fontWeight="sm" color="white" bg="#5F00D9"
                    _hover={{
                        bg: "#803bd9"
                    }}
                >
                    Withdraw
                </Button>
            </HStack>
            {/* Button End */}
        </HStack>
    )
}

export default ProtfolioSection
