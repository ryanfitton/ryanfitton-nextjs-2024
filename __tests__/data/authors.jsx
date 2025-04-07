import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

describe('Author MDX Files', () => {
  const authorDirectory = path.join(process.cwd(), 'data/authors')

  // Ensure all .mdx files in the author directory contain the required keys
  it('Should contain required front matter keys in all author MDX files', () => {
    const files = fs.readdirSync(authorDirectory)

    files.forEach((file) => {
      if (file.endsWith('.mdx')) {
        // Read the file contents
        const filePath = path.join(authorDirectory, file)
        const fileContents = fs.readFileSync(filePath, 'utf-8')

        // Parse the front matter
        const { data } = matter(fileContents)

        // Check that the necessary keys exist and have the correct values
        expect(data).toHaveProperty('name')
        expect(data).toHaveProperty('avatar')
        expect(data).toHaveProperty('occupation')
        expect(data).toHaveProperty('email')
        expect(data).toHaveProperty('facebook')
        expect(data).toHaveProperty('youtube')
        expect(data).toHaveProperty('github')
        expect(data).toHaveProperty('x')
        expect(data).toHaveProperty('instagram')
        expect(data).toHaveProperty('threads')
        expect(data).toHaveProperty('mastodon')
        expect(data).toHaveProperty('bluesky')
        expect(data).toHaveProperty('linkedin')
        expect(data).toHaveProperty('keybase')

        // Check that these fields are non-empty
        expect(data.name).toMatch(/\S+/)  // Ensures the name is a non-empty string
        expect(data.avatar).toMatch(/\S+/)  // Ensures the avatar is a non-empty string (URL or path)
        expect(data.occupation).toMatch(/\S+/)  // Ensures occupation is a non-empty string
        expect(data.email).toMatch(/\S+/)  // Ensures email is a non-empty string

        // Check for valid URLs
        expect(data.facebook).toMatch(/^https:\/\/www\.facebook\.com\/\w+/)  // Valid Facebook URL
        expect(data.youtube).toMatch(/^https:\/\/www\.youtube\.com\/(?:@[\w.-]+|[\w.-]+)$/)  // Valid YouTube URL
        expect(data.github).toMatch(/^https:\/\/github\.com\/\w+/)  // Valid GitHub URL
        expect(data.x).toMatch(/^https:\/\/x\.com\/\w+/)  // Valid X (formerly Twitter) URL
        expect(data.instagram).toMatch(/^https:\/\/www\.instagram\.com\/\w+/)  // Valid Instagram URL
        expect(data.threads).toMatch(/^https:\/\/www\.threads\.net\/(?:@[\w.-]+|[\w.-]+)$/)  // Valid Threads URL
        expect(data.mastodon).toMatch(/^https:\/\/mastodon\.social\/(?:@[\w.-]+|[\w.-]+)$/)  // Valid Mastodon URL
        expect(data.bluesky).toMatch(/^https:\/\/bsky\.app\/profile\/\w+/)  // Valid Bluesky URL
        expect(data.linkedin).toMatch(/^https:\/\/uk\.linkedin\.com\/in\/\w+/)  // Valid LinkedIn URL
        expect(data.keybase).toMatch(/^https:\/\/keybase\.io\/\w+/)  // Valid Keybase URL
      }
    })
  })
})
