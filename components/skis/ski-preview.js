
import CoverImage from 'components/skis/ski-cover-image'
import Link from 'next/link'


export default function SkiPreview({slug, title, blurb, defaultImage}) {
  return (
    <div>
        <h3 className="uppercase font-semibold text-lg mb-3 text-center">
         <Link as={`skis/${slug}`} href="skis/[slug]">
          <a className="text-justify">{title}</a>
         </Link>
        </h3>
        <div className="mb-5">
         <CoverImage slug={slug} title={title} url={defaultImage} />
        </div>
        
        
    </div>
  )
}
