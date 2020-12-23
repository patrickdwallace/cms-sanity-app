export default function SkiVariants({variants}) {
    return (
      <>
  
          <div class="md:flex md:flex-wrap">
              <div class="w-2/5 text-5xl uppercase font-thin tracking-wider">
                  Variants
              </div>
              <div class="w-3/5">
                <div class="grid grid-cols-5 text-1xl font-bold uppercase font-thin tracking-wider">
                    <div>LENGTH</div>
                    <div>RADIUS</div>
                    <div>SIDECUT</div>
                    <div>WEIGHT<p class="font-normal lowercase text-xs italic">without binding</p></div>
                    <div>WEIGHT<p class="font-normal lowercase text-xs italic">with binding</p></div>
                </div>
                <div class="grid grid-cols-5 font-thin">
                {variants.map((variant, index) => (  
                    <>
                    <div class={index % 2 ==0 ? 'bg-gray-400' : ''}>{variant.title}</div>
                    <div class={index % 2 ==0 ? 'bg-gray-400' : ''}>{variant.radius}</div>
                    <div class={index % 2 ==0 ? 'bg-gray-400' : ''}>{variant.sidecut}</div>
                    <div class={index % 2 ==0 ? 'bg-gray-400' : ''}>{variant.weight}</div>
                    <div class={index % 2 ==0 ? 'bg-gray-400' : ''}>{variant.weightWithBinding}</div>
                    </>
                ))}
                </div>
                        
              </div>
          </div>
      </>
    )
  }