import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

describe('Blog MDX Files', () => {
  const blogDirectory = path.join(process.cwd(), 'data/blog')

  // Ensure all .mdx files in the blog directory contain the required keys
  it('Should contain required front matter keys in all blog MDX files', () => {
    const files = fs.readdirSync(blogDirectory)

    files.forEach((file) => {
      if (file.endsWith('.mdx')) {
        // Read the file contents
        const filePath = path.join(blogDirectory, file)
        const fileContents = fs.readFileSync(filePath, 'utf-8')

        // Parse the front matter
        const { data } = matter(fileContents)

        // Check that the necessary keys exist and have the correct values
        expect(data).toHaveProperty('title')
        expect(data).toHaveProperty('authors')
        expect(data).toHaveProperty('date')
        expect(data).toHaveProperty('tags')
        expect(data).toHaveProperty('draft')
        //expect(data).toHaveProperty('featuredImgSrc')
        expect(data).toHaveProperty('summary')

        // Check for the correct values
        expect(data.title).toBeTruthy()  // Title should not be empty
        expect(Array.isArray(data.authors)).toBe(true)  // Authors should be an array
        expect(data.authors.length).toBeGreaterThan(0)  // Authors array should not be empty
        expect(data.date).toMatch(
          /^\d{4}-\d{2}-\d{2}$/ // Date format YYYY-MM-DD
        )
        expect(Array.isArray(data.tags)).toBe(true)  // Tags should be an array
        expect(data.tags.length).toBeGreaterThan(0)  // Tags array should not be empty
        expect(typeof data.draft).toBe('boolean') // draft should be a boolean
        //expect(data.featuredImgSrc).toMatch(/^\/static\/img\/blog\/\d{4}\/\d{2}/) // Path to image
        expect(data.summary).toBeTruthy()  // Summary should not be empty
      }
    })
  })
})
