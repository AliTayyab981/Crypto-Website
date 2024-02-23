import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `ubuntu`,
    body: `ubuntu`,
  },
  styles: {
    global: {
      body: {
        bg: '#F3F3F1',
          },
      
    },
  }

})

export default theme