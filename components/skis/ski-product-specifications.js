
//const React = require('react')
//const BlockContent = require('@sanity/block-content-to-react')

// const serializers = {
//     types: {
//       code: props => (
//         <pre data-language={props.node.language}>
//           <code>{props.node.code}</code>
//         </pre>
//       )
//     }
//   }

export default function SkiProductSpecifications({ rocker, core, base, bindings, level}) {
  return (
    <>

        <div class="md:flex md:flex-wrap mt-6">
            <div class="w-2/5 text-5xl uppercase font-thin tracking-wider">
                Specifications
            </div>
            <div class="w-3/5 font-thin tracking-wider">
                <div class="md:flex md:flex-wrap">
                    <div class="w-1/2 text-1xl font-bold uppercase font-thin tracking-wider">
                        <div>ROCKER</div>
                    </div>
                    <div class="w-1/2 font-thin tracking-wider">
                        <div>{rocker}</div>
                    </div>
                </div>
                <div class="md:flex md:flex-wrap mt-4">
                    <div class="w-1/2 text-1xl font-bold uppercase font-thin tracking-wider">
                        <div>CORE</div>
                    </div>
                    <div class="w-1/2 font-thin tracking-wider">
                        <div>{core}</div>
                    </div>
                </div>
                <div class="md:flex md:flex-wrap mt-4">
                    <div class="w-1/2 text-1xl font-bold uppercase font-thin tracking-wider">
                        <div>BASE</div>
                    </div>
                    <div class="w-1/2 font-thin tracking-wider">
                        <div>{base}</div>
                    </div>
                </div>
                <div class="md:flex md:flex-wrap mt-4">
                    <div class="w-1/2 text-1xl font-bold uppercase font-thin tracking-wider">
                        <div>RECOMMENDED BINDING</div>
                    </div>
                    <div class="w-1/2 font-thin tracking-wider">
                        {bindings.map((binding, index) => (
                            <div key={index} id={index}>
                                {binding}
                            </div>
                        ))}
                        
                    </div>
                </div>
                <div class="md:flex md:flex-wrap mt-4">
                    <div class="w-1/2 text-1xl font-bold uppercase font-thin tracking-wider">
                        <div>SKIING LEVEL</div>
                    </div>
                    <div class="w-1/2 font-thin tracking-wider">
                        <div>{level}</div>
                    </div>
                </div>

                      
            </div>
        </div>
    </>
  )
}