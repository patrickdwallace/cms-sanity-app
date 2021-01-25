import { imageBuilder } from '../../lib/sanity'
import Link from 'next/link'


export default function SupportingImages({ images }) {
    
    return (
        <div className="sm:mx-0">
            
            
            <div class="grid grid-cols-2">

            {images.map((supportingImage, index) => (
                
                <div id={index} class={index<1 ? 'col-span-2' : ''}>
                
                <img
                    width={2000}
                    height={1000}
                    
                    // className={cn('shadow-small', {
                    // 'hover:shadow-medium transition-shadow duration-200': slug,
                    // })}
                    src={imageBuilder.image(supportingImage).height(1000).width(2000).url()}
                />
                </div>
            ))}
            </div>
        </div>
    )
  }
  