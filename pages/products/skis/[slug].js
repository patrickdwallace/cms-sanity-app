import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/container'
import SkiHeader from 'components/skis/ski-header'
import SectionSeparator from 'components/section-separator'
import SectionSeparatorNoLine from 'components/section-separator-no-line'
import Layout from 'components/layout'
import { getAllSkis, getSki } from 'lib/api'
import PostTitle from 'components/post-title'
import Head from 'next/head'
import SkiTitleBlurb from 'components/skis/ski-title-blurb'
import SkiBody from 'components/skis/ski-body'
import SupportingImages from 'components/skis/ski-supporting-images'
import ProductSpecifications from 'components/skis/ski-product-specifications'
import SkiTechnologies from 'components/skis/ski-technologies'
import SkiVariants from 'components/skis/ski-variants'
import SkiBuyNow from 'components/skis/ski-buy-now'

export default function Post({ ski, preview }) {
  
  const router = useRouter()
  
if(ski == null ){
  return <ErrorPage statusCode={404} />
}

  if (!router.isFallback && !ski?.slug) {
    return <ErrorPage statusCode={404} />
    
  }
  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {ski.title} 
                </title>
              </Head>
               
              <div>
                <div>
                  {/* <PostTitle>{ski.title}</PostTitle> */}
                  <div class="max-w mx-auto mb-56">
                    <div class="md:flex" >
                      <div class="md:flex-shrink-0 w-4/5 mx-auto">
                        <SkiHeader
                          coverImage={ski.defaultImage}
                        />
                      </div>
                      <div class="pl-5 text-center md:text-left ">
                        <SkiTitleBlurb title={ski.title} blurb={ski.blurb}></SkiTitleBlurb>
                      </div>
                    </div>
                  </div>                                    
                </div>
              </div>
            </article>
            {/* <SectionSeparator />
            {moreSkis.length > 0 && <MoreSkis skis={moreSkis} />} */}
          </>
        )}
      </Container>
      <div>
            {console.log(ski.slug)}
        <SupportingImages images={ski.supportingImages}></SupportingImages>
      </div>
      <SectionSeparatorNoLine></SectionSeparatorNoLine>
      <Container>
        <SkiBuyNow coverImage={ski.defaultImage} title={ski.title} price={ski.price} saleprice={ski.salePrice} variants={ski.variants}></SkiBuyNow>
        <SectionSeparator />
        <SkiVariants variants={ski.variants}></SkiVariants>
        <SectionSeparator />
        <ProductSpecifications rocker={ski.RockerType} core={ski.CoreType} base={ski.BaseType} bindings={ski.Bindings} level={ski.SkiingLevel} ></ProductSpecifications>
        <SectionSeparator />
        <SkiTechnologies technologies={ski.Technologies}></SkiTechnologies>
        <SectionSeparator />
        <div>
          <SkiBody title={ski.title} body={ski.bodyBlock}></SkiBody>
        </div>
        <SectionSeparatorNoLine></SectionSeparatorNoLine> 
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getSki(params.slug, preview)
    console.log(params.slug)
  return {
    props: {
      preview,
      ski: data.ski,
      
    },
  }
}

export async function getStaticPaths() {
  const allSkis = await getAllSkis()
  return {
    paths:
      allSkis.map((ski) => ({
        
        params: {
          slug: ski.slug,
        },
      })) || [],
    fallback: true,
  }
}
