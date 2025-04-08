import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

describe('Portfolio MDX Files', () => {
  const portfolioDirectory = path.join(process.cwd(), 'data/portfolio')

  // Ensure all .mdx files in the portfolio directory contain the required keys
  it('Should contain required front matter keys in all portfolio MDX files', () => {
    const files = fs.readdirSync(portfolioDirectory)

    files.forEach((file) => {
      if (file.endsWith('.mdx')) {
        // Read the file contents
        const filePath = path.join(portfolioDirectory, file)
        const fileContents = fs.readFileSync(filePath, 'utf-8')

        // Parse the front matter
        const { data } = matter(fileContents)

        // Check that the necessary keys exist and have the correct values
        expect(data).toHaveProperty('title')
        expect(data).toHaveProperty('date')
        expect(data).toHaveProperty('featuredImgSrc')
        expect(data).toHaveProperty('draft')
        expect(data).toHaveProperty('summary')
        expect(data).toHaveProperty('lead')
        expect(data).toHaveProperty('portfolioClient')
        expect(data).toHaveProperty('portfolioType')
        //expect(data).toHaveProperty('portfolioHref')

        // Check for the correct values
        expect(data.title).toBeTruthy()  // Title should not be empty
        expect(data.date).toMatch(
          /^\d{4}-\d{2}-\d{2}$/ // Date format YYYY-MM-DD
        )
        expect(data.featuredImgSrc).toMatch(/^\/static\/img\/portfolio\/\d{4}\/\d{2}/) // Path to image
        expect(typeof data.draft).toBe('boolean') // draft should be a boolean
        expect(data.summary).toBeTruthy()  // Summary should not be empty
        expect(data.lead).toBeTruthy()  // Lead should not be empty
        expect(data.portfolioClient).toBeTruthy()  // Client should not be empty
        expect(data.portfolioType).toBeTruthy()  // Type should not be empty
        //expect(data.portfolioHref).toMatch(/^https?:\/\//) // portfolioHref should be a valid URL
      }
    })
  })
})
