import Container from 'components/container'
//import HeroPost from 'components/hero-post'
import Layout from 'components/layout'
import { getSkisByType } from 'lib/api'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'
import SkiListByType from 'components/skis/ski-list-by-type'

export default function Index({ allSkiTypes, preview }) {
  
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Skis with {CMS_NAME}</title>
        </Head>
        <Container>
          <section>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
              All Skis
            </h2>
            
              {allSkiTypes.map((skiType) =>
                <SkiListByType skiType= {skiType}></SkiListByType>
              )}
          </section>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allSkiTypes = await getSkisByType(preview)
  return {
    props: { allSkiTypes, preview },
  }
}
