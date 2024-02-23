import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import ProtfolioSection from './components/ProtfolioSection'
import PriceSection from './components/PriceSection'
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import Transactions from './components/Transactions'
import LoansSection from './components/LoansSection'
import ContactSection from './components/ContactSection'

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title="Dashboard" >
        <Box h={{
          lg: "590px"
        }} >
          <Grid
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
            }}
            gap="16px"
          >
            <GridItem colSpan={2} >
              <ProtfolioSection />
            </GridItem>
            <GridItem colSpan={{
              xl: 1,
              lg: 1,
              base: 2
            }} >
              <PriceSection />
            </GridItem>
            <GridItem colSpan={{
              xl: 1,
              lg: 1,
              base: 2
            }} >
              <Transactions />
            </GridItem>
            <GridItem colSpan={{
              xl: 1,
              lg: 1,
              base: 2
            }} >
              <LoansSection imgurl1="/dot_bg.svg" />
            </GridItem>
            <GridItem colSpan={{
              xl: 1,
              lg: 1,
              base: 2
            }} >
              <ContactSection imgurl2="/grid_bg.svg" />
            </GridItem>
          </Grid>
        </Box>
      </DashboardLayout>
    </div>
  )
}

export default Dashboard
