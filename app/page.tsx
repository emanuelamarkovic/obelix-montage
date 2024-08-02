import Image from "next/image";

export default function Home() {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              {/* <Image
              src="/images/obelix.png"
              alt="Logo"
              width={118}
              height={70}
              className="object-contain"
            /> */}
            </div>
            <a href="/" className="text-white text-xl">
              Logo
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/"
              className="text-white hover:bg-white hover:text-black px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            {/* Add more links here as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
}
