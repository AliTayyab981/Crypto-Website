import React from 'react'
import { tabdata, tabcolour } from './tabdata.js'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Text,
  Stack,
  Tag,
  Card,
  CardBody,
  Box,
} from '@chakra-ui/react'
const TabTable = () => {


  return (
    <TableContainer  >
      <Table variant='simple'>

        <Thead >
          <Tr >
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color="#171717" fontWeight="medium" >
          {tabdata.map((tabdata) =>

            <Tr>
              <Td> {tabdata.id}    </Td>
              <Td><Stack><Text>{tabdata.datetime.date}</Text><Text fontSize="12px" color="#797E82"  >  {tabdata.datetime.time}</Text></Stack></Td>
              <Td><Stack><Text>{tabdata.type.currency}</Text><Text fontSize="12px" color="#797E82"  > {tabdata.type.method}</Text></Stack></Td>
              <Td><Stack><Text>{tabdata.amount.amount}</Text><Text fontSize="12px" color="#797E82"  > {tabdata.amount.subamount}</Text></Stack></Td>
              <Td  ><Tag borderRadius="full" py="5px" px="10px" bg={tabcolour[tabdata.status]} >{tabdata.status}</Tag></Td>
            </Tr>


          )
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TabTable
