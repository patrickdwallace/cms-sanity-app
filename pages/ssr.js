import { useRouter } from 'next/router'
import { getAllSkisBySlug, getSkiAndMoreSkis } from 'lib/api'


export default function SSR({ ski, moreSkis, preview }) {
  
  const router = useRouter()
  
  if (!router.isFallback && !ski?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
      <div>
          {ski.title}

      </div>

  )
}

export async function getServerSideProps({ params, preview = false }) {
  const data = await getSkiAndMoreSkis('blaze-94', preview)
  return {
    props: {
      preview,
      ski: data?.ski || null,
      moreSkis: data?.moreSkis || null,
    },
  }
}