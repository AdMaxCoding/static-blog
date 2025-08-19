import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath){
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markDownPosts = files.filter(file => file.endsWith('.md'))

    const posts = markDownPosts.map((filename) =>{
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf-8')
        const matterResult = matter(fileContents)
        return{
            title: matterResult.data.title,
            genre: matterResult.data.genre,
            rating: matterResult.data.rating,
            description: matterResult.data.description,
            slug: filename.replace('.md', '')
        }
    })
    return posts

}