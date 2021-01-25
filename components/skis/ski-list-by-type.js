import SkiPreview from 'components/skis/ski-preview'
import { imageBuilder } from '../../lib/sanity'

export default function SkiListByType({skiType}) 
{
    var divStyle = {
        backgroundImage: 'url(' + imageBuilder.image(skiType.categoryImage).url() + ')',
        backgroundSize: '100% 400px',
        height: '400px'
    }
    return (
    <>
      <div>
        <div className="mb-8" style={divStyle}>
            <div className="p-8 uppercase text-4xl font-extrabold tracking-wider">{skiType.title}</div>
            <div className="pl-8 text-xl tracking-wider font-light width w-2/5">{skiType.description}</div>
                <div className="mt-20 ml-8 font-semibold uppercase">
                    <a href="/en-us/products/skis/racing/" className="bg-yellow p-4">All {skiType.title} Skis</a>
                    <a href="/en-us/translate-to-english-race/" className="bg-yellow p-4 ml-8">{skiType.title} World</a>
                </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-5 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-16 mb-16">

        {skiType.skis.map((ski) => 
            <SkiPreview 
                      slug={ski.slug.current}
                      title={ski.title}
                      blurb={ski.blurb}
                      defaultImage={ski.defaultImage}
                      
                    />
            )  
        }
        </div>   
      </div>
      </>
    )
  }