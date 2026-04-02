import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">HiTrace Solutions</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Advanced fleet management, telematics, IoT, and smart home solutions.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/studio" 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open Sanity Studio
        </Link>
      </div>
    </main>
  );
}
