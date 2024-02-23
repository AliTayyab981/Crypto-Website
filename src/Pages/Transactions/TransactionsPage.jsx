import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { Box, Button, Card, Flex, Icon, Tag } from '@chakra-ui/react'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TabTable from './components/TabTable';
import TabCards from './components/TabCards';



const TransactionsPage = () => {




  return (
    <DashboardLayout title="Transactions" >
      <Box h="580px"  >
        <Flex justifyContent="end" >
          <Button leftIcon={<Icon as={IoCloudDownloadOutline} />} fontWeight="sm" color="white" bg="#5F00D9"
            _hover={{
              bg: "#803bd9"
            }}
          >
            Export CSV
          </Button>
        </Flex>
        <Card mt="20px" display={{
          xl: "block",
          lg: "none",
          base: "none"
        }} >
          <Tabs>
            <TabList display="flex" gap="20px" mt="15px" mx="20px"  >
              <Tab>All <Tag borderRadius="full" ml="10px" >349</Tag></Tab>
              <Tab>Deposit<Tag borderRadius="full" ml="10px"  >114</Tag></Tab>
              <Tab>Withdraw<Tag borderRadius="full" ml="10px"  >213</Tag></Tab>
              <Tab>Trade<Tag borderRadius="full" ml="10px"  >22</Tag></Tab>
            </TabList>
            <TabPanels>
              <TabPanel  >
                {/* Tab Tabel  */}
                <TabTable />
              </TabPanel>
              <TabPanel>
                <TabTable />
              </TabPanel>
              <TabPanel>
                <TabTable />
              </TabPanel>
              <TabPanel>
                <TabTable />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
        <Box mt="20px" display={{
          xl: "none",
          lg: "block",
          base: "block"
        }} >
          {/* Tab Card  */}
          <TabCards />
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default TransactionsPage
