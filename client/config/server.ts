export const serverURL =
  process.env.NODE_ENV === 'production'
    ? 'https://your-server-url.com' // TODO Change this to your website
    : 'http://localhost:4000'
