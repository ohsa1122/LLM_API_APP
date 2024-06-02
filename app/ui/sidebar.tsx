import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="h-screen flex bg-black text-white">
      <div className="flex flex-col w-64 px-4 py-6 bg-purple-600 space-y-4">
        <Link
          className="flex h-24 items-center justify-start rounded-lg bg-purple-500 p-6 hover:bg-purple-700 transition duration-300 ease-in-out"
          href="/"
        >
          <p className="text-lg font-semibold">
            Home
          </p>
        </Link>
        
        <Link
          className="flex h-24 items-center justify-start rounded-lg bg-purple-500 p-6 hover:bg-purple-700 transition duration-300 ease-in-out"
          href="/button"
        >
          <p className="text-lg font-semibold">
            Increment/Decrement Button
          </p>
        </Link>
        
        <Link
          className="flex h-24 items-center justify-start rounded-lg bg-purple-500 p-6 hover:bg-purple-700 transition duration-300 ease-in-out"
          href="/LLM"
        >
          <p className="text-lg font-semibold">
            Use LLM
          </p>
        </Link>
      </div>
      <div className="flex-grow p-6">
        {/* Page content goes here */}
      </div>
    </div>
  );
}
