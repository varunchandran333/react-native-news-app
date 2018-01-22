import { _apiKey, _endpoints } from '../config/restconfig'
import { orderBy } from 'lodash'

// async function getSourcesByCategory(category) {
//     try {
//         let sources = await fetch(`${_endpoints.sources}?language=en&category=${category}`),
//             result = await sources.json()
//         sources = null
//         return result.sources
//     } catch (error) {
//         throw error
//     }
// }

// async function getArticlesBySource(source_id) {
//     try {
//         let articles = await fetch(`${_endpoints.articles}?source=${source_id}`, { headers: { 'X-Api-Key': _apiKey } })
//         result = await articles.json()
//         articles = null
//         return result.articles
//     } catch (error) {
//         throw error
//     }
// }

// export async function getSources() {
//     try {
//         let sources = await fetch(_endpoints.sources),
//             results = await sources.json()
//         sources = null
//         return esults.sources
    
//     } catch (error) {
//         throw error
//     }
// }

// export class getArticles {
//     constructor(id) {
//         this.id = id
//         return this._init()
//     }

//     _init() {
//         return getSourcesByCategory(this.id).then(this._sourceMap)
//     }

//     _sourceMap(sources) {
//         let articles = [],
//             promises = []

//         forEach(sources, ({ name, id }) => {
//             return promises.push(getArticlesBySource(id).then((articleMap) => {
//                 let articlesMap = map(articleMap, (article) => {
//                     return { ...article, source: name }
//                 })
//                 articles = [...articles, ...articlesMap]
//             }))
//         })
//         return Promise.all(promises).then(() => { return orderBy(articles, 'publishedAt', 'desc') })
//     }
// }

export async function getArticlesBySource(categoryId) {
        try {
            let articles = await fetch(`${_endpoints.articles}?category=${categoryId}&country=us&pageSize=50`, { headers: { 'X-Api-Key': _apiKey } })
            result = await articles.json()
            articles = null
            return orderBy(result.articles, 'publishedAt', 'desc')
        } catch (error) {
            throw error
        }
    }