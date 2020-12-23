import Avatar from '../avatar'
import Date from '../date'
import CoverImage from '../cover-image'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
// import markdownStyles from './markdown-styles.module.css'

export default function SkiPreview({
  slug,
  title,
  blurb,
  body,
  defaultImage,
  skiType
}) {
  return (
    <div>
        <div className="mb-5">
         <CoverImage slug={slug} title={title} url={defaultImage} />
        </div>
        <div>{blurb}</div>
        {/* <div className="max-w-2xl mx-auto">
          <BlockContent blocks={body} className={markdownStyles.markdown}/>
        </div> */}
        <h3 className="text-3xl mb-3 leading-snug">
         <Link as={`skis/${slug}`} href="skis/[slug]">
          <a className="hover:underline">{title}</a>
         </Link>
        </h3>
        <h4>{skiType}</h4>
      {/* <div className="mb-5">
        <CoverImage slug={slug} title={title} url={coverImage} />
      </div> */}
      {/* <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} /> */}
    </div>
  )
}
