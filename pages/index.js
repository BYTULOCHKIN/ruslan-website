import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#c9bbb9', '#4f4443')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m Ruslan Kraisuk. Web developer from 🇺🇦
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant="page-title">
            Ruslan Krasiuk
          </Heading>
          <p>Atlassin developer </p>
        </Box>
        <Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="white.Alpha800"
              borderWidth={2}
              borderStyle="solid"
              src="/images/TB5FQTMNH-U01PX1HDJLV-c11851980fb4-512.jpeg"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              alt="myself"
            />
          </Box>
        </Box>
      </Box>
      <Section delay={0.1}>
        {/* <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>Paragraph</p> */}
      </Section>
    </Container>
  )
}
export default Page
