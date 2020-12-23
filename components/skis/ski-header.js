import CoverImage from 'components/cover-image'

export default function SkiHeader({ title, coverImage }) {
  return (
    <>
      <CoverImage title={title} url={coverImage} />
    </>
  )
}
