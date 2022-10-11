import Image from 'next/image'

export default function Index() {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-[75vh] justify-center">
      <main>
        <h1 className="font-mono text-xl code">
          Welcome to <span className="text-purple-700">Nextjs</span>, <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
        </h1>
      </main>
    </div>
  )
}