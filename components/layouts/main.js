import Head from 'next/head'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Navbar from '../navbar'
import VoxelProtester from '../voxel-protester'
import NoSsr from '../no-ssr'
const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
        <title>Krasiuk Ruslan DEV</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1599px-Flag_of_Ukraine.svg.png?20100406171642"
          type="image/x-icon"
        />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={100}>
        {children}
        <NoSsr>
          <VoxelProtester />
        </NoSsr>
        <div>
          <iframe
            width="100%"
            height={300}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1233484273&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
          <div
            style={{
              fontSize: '10px',
              color: '#cccccc',
              lineBreak: 'anywhere',
              wordBreak: 'normal',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontFamily:
                'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
              fontWeight: 100
            }}
          >
            <a
              href="https://soundcloud.com/musical-chef"
              title="Musical Chef"
              target="_blank"
              style={{ color: '#cccccc', textDecoration: 'none' }}
              rel="noreferrer"
            >
              Musical Chef
            </a>
            ·
            <a
              href="https://soundcloud.com/musical-chef/national-anthem-of-ukraine-shche-ne-vmerla-ukrani-shche-ne-vmerla-ukrainy-free-sheet-music"
              title="National Anthem of Ukraine - Ще Не Вмерла України (Shche Ne Vmerla Ukrainy) || FREE SHEET MUSIC"
              target="_blank"
              style={{ color: '#cccccc', textDecoration: 'none' }}
              rel="noreferrer"
            >
              National Anthem of Ukraine - Ще Не Вмерла України (Shche Ne Vmerla
              Ukrainy) || FREE SHEET MUSIC
            </a>
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Layout
