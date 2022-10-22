import { Box, Text } from '@chakra-ui/react'
import React from 'react';
import style from "./HomeStyle.module.css"

const Homepage = () => {
  return (
    <Box className={style.Homecontainer}>
      <Box className={style.homeTopDiscountBanner}><Text fontSize={'sm'}>Assured Gift worth Inr 299/- on purchase above 599/-. Free Delivery on orders more than 499/-</Text></Box>
    </Box>
  )
}

export default Homepage