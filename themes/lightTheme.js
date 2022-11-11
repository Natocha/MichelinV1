import { createTheme, NextUIProvider, Text } from "@nextui-org/react"


export const lightTheme = createTheme({
  type: "dark", 
  theme: {
    colors: {
  
      primaryLight: '$orange200',
      primaryLightHover: '$orange300',
      primaryLightActive: '$orange400',
      primaryLightContrast: '$orangen600',
      primary: '#DD602E',
      primaryBorder: '$orange500',
      primaryBorderHover: '$orange600',
      primarySolidHover: '$orange700',
      primarySolidContrast: '$white',
      primaryShadow: '$orange500',

      gradient: 'linear-gradient(112deg, $blue100 -25%, $yellow500 -10%, $orange500 80%)',
      link: '#000000',


      myColor: '#ffffff'

     
    },
    space: {},
    fonts: {}
  }
})
