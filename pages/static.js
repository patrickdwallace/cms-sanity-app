import { useRouter } from 'next/router'
import { getSki } from 'lib/api'
import ErrorPage from 'next/error'


export default function Static({ ski, preview }) {
  
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

export async function getStaticProps({ params, preview = false }) {
  const data = await getSki('blaze-94', preview)
  return {
    props: {
      preview,
      ski: data?.ski || null,
      
    },
  }
}

