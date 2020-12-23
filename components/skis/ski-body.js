
const React = require('react')
const BlockContent = require('@sanity/block-content-to-react')

const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

export default function SkiBody({ title, body }) {
  return (
    <>

        <div class="md:flex md:flex-wrap">
            <div class="w-2/5 text-5xl uppercase font-thin tracking-wider">
                {title}
            </div>
            <div class="w-3/5 font-thin tracking-wider">
                <div><BlockContent className="space-y-3" blocks={body} serializers={serializers} /></div>
            </div>
        </div>
    </>
  )
}