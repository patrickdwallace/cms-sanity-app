import SkiPreview from 'components/skis/ski-preview'

export default function MoreSkis({ skis }) {
  return (
    
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        All Skis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        
        {skis.map((ski) => (
          <SkiPreview
            slug={ski.slug}
            title={ski.title}
            blurb={ski.blurb}
            defaultImage={ski.defaultImage}
            skiType={ski.skiType}
          />
        ))}
      </div>
    </section>
  )
}
