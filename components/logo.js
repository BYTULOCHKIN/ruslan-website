import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 60px;
  line-height: 20px;
  padding: 10px;
  ${({ colorMode }) =>
    colorMode === 'dark'
      ? `
  &:hover img {
    filter: brightness(0) saturate(100%) invert(75%) sepia(64%) saturate(1746%) hue-rotate(354deg) brightness(95%) contrast(90%);
  }
  `
      : `&:hover img {
    filter: invert(72%) sepia(95%) saturate(1895%) hue-rotate(199deg)
      brightness(91%) contrast(102%);
  }`}
`

const Logo = () => {
  const tridentUaImg = `/public/images/trident-ua${useColorModeValue(
    '-yellow',
    '-blue'
  )}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox colorMode={useColorModeValue('ligth', 'dark')}>
          <Image src={tridentUaImg} width={30} height={49} alt={'logo'} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M Plus Rounded 1c"
            fontWeight="bold"
            fontSize={20}
            ml={3}
          >
            Ruslan Krasiuk
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
