import Image from 'next/image';
import Link from 'next/link';
import TonePlay from './components/TonePlay';
import Sample from './components/Sample';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pb-3">
        <h1 className="self-start text-xl font-bold">Tone Reactor</h1>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex pb-2">
        <Link className="text-lg font-bold hover:text-gray-600" href="about">About</Link>
        <TonePlay />
      </div>
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <h2 className="pb-2">Can we get 3 random images to show up here?</h2>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left grid-cols-3 min-h-40 pb-3">
        <Sample />
        <Sample />
        <Sample />
      </div>
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <h2 className="pb-2">Here's an example of an image that shows up fine:</h2>
        <Image 
          className='lg:w-full'
          src="https://user-images.githubusercontent.com/19648700/284762217-de5b3c2a-108e-4f2f-b4d7-6f9b292c8d75.png"
          height={902}
          width={2096}
          alt="Design spec showing four interactivity states of this app"
        />
      </div>
    </main>
  )
}
