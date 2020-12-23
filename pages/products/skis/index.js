import Container from 'components/container'
//import HeroPost from './components/hero-post'
import MoreSkis from 'components/more-skis'
import Intro from 'components/intro'
import Layout from 'components/layout'
import { getAllSkis } from 'lib/api'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

export default function Index({ allSkis, preview }) {
  //const heroPost = allPosts[0]
  const moreSkis = allSkis
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Skis with {CMS_NAME}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )} */}
          <MoreSkis skis={moreSkis} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allSkis = await getAllSkis(preview)
  return {
    props: { allSkis, preview },
  }
}