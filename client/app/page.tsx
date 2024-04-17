import { serverURL } from '@/config/server'

// * GET data from Node.js server
async function getData() {
  const res = await fetch(`${serverURL}/api/data`)
  const data = await res.json()
  return data
}

export default async function Home() {
  const { message, name } = await getData()

  return (
    <>
      <h1 className='text-xl'>
        {message} {name}
      </h1>
      <p>This data comes from the Node.js API server</p>
    </>
  )
}
