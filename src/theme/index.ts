import { extendTheme } from '@chakra-ui/react'
import { getColors } from './getColors'
import colorsToken from './color.json'
import { ButtonTheme as Button } from './futura/buttonTheme'
import { HeadingTheme as Heading } from './futura/headingTheme'
import { TextTheme as Text } from './futura/textTheme'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = getColors({ colors: colorsToken.color })

const breakpoints = {
  sm: '320px',
  md: '868px',
  lg: '1160px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({
  breakpoints,
  config,
  colors,
  components: {
    Button,
    Heading,
    Text,
  }
})

export default theme