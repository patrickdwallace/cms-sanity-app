export default function SkiTechnologies({technologies}) {
    return (
      <>
  
          <div class="md:flex md:flex-wrap">
              <div class="w-2/5 text-5xl uppercase font-thin tracking-wider">
                  Technologies
              </div>
              <div class="w-3/5 font-thin tracking-wider grid grid-cols-2">
                {technologies.map((technology, index) => (
                    <div key={index} id={index} class="m-1">
                        {technology}
                    </div>
                ))}
                        
              </div>
          </div>
      </>
    )
  }