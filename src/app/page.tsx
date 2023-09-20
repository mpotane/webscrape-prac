
import Image from 'next/image'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/example.png" alt='screenshot' width={750} height={1334}/>
    </main>
  )
}
