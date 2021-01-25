import client, { previewClient } from './sanity'

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}

const getUniqueSkis = (skis) => {
  const slugs = new Set()
  return skis.filter((skis) => {
    if (slugs.has(ski.slug)) {
      return false
    } else {
      slugs.add(ski.slug)
      return true
    }
  })
}

const getUniqueProducts = (products) => {
  const slugs = new Set()
  return products.filter((product) => {
    if (slugs.has(product.slug)) {
      return false
    } else {
      slugs.add(product.slug)
      return true
    }
  })
}

const postFields = `
  name,
  title,
  date,
  excerpt,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`
const skiFields = `
  title,
  'blurb': blurb.en,
  'slug': slug.current,
  'defaultImage': defaultImage.asset->url,
  'skiType': skiType->title,
  body,
  price,
  salePrice,
  bodyBlock,
  supportingImages,
  'RockerType': RockerType->title,
  'CoreType': CoreType->title,
  'SkiingLevel': SkiingLevel->title,
  'Bindings': RecommendedBinding[]->title,
  'BaseType': BaseType->title,
  variants,
  'Technologies': technology[]->title,
`


const getClient = (preview) => (preview ? previewClient : client)

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${postFields}
      content
    }`,
    { slug }
  )
  return data[0]
}

export async function getAllSkisBySlug() {
  const data = await client.fetch(`*[_type == "ski"]{ 'slug': slug.current }`)
  return data
}

export async function getSkisByType() {
  const data = await client.fetch(`*[_type=="skiType"] | 
    order(title asc)
    {
      _id,
      title, 
      description,
      'categoryImage': categoryImage.asset->url,
      'skis': *[_type == "ski" && references(^._id)]{title, slug, price, defaultImage}
    }`)
  return data
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(date desc, _updatedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

export async function getAllSkis(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "ski"] | order(date desc, _updatedAt desc){
      ${skiFields}
    }`)
  return results
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${postFields}
        content,
      }[0...2]`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}
// export async function getSkiAndMoreSkis(slug, preview) {
//   const curClient = getClient(preview)
//   const [ski, moreSkis] = await Promise.all([
//     curClient
//       .fetch(
//         `*[_type == "ski" && slug.current == $slug] | order(_updatedAt desc) {
//         ${skiFields}
        
//       }`,
//         { slug }
//       )
//       .then((res) => res?.[0]),
//     curClient.fetch(
//       `*[_type == "ski" && slug.current != $slug] | order(date desc, _updatedAt desc){
//         ${skiFields}
        
//       }[0...2]`,
//       { slug }
//     ),
//   ])
//   return { ski, moreSkis }
// }

export async function getSki(slug, preview) {
  const curClient = getClient(preview)
  const [ski] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "ski" && slug.current == $slug] | order(_updatedAt desc) {
        ${skiFields}
        
      }`,
        { slug }
      )
      .then((res) => res?.[0])
    
  ])
  return { ski }
}