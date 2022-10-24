import codeEditor from "./Coding_Desktop.png";

export default function Programs() {
  return (
    <div className="mt-6 relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto w-full max-w-7xl pt-16 text-center lg:py-48 lg:text-left">
          <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 className="text-4xl font-bold tracking-tight text-slateGray sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Free Minecraft</span>{" "}
              <span className="block text-blue xl:inline">Coding Bootcamp</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              We want to give children the opportunity to be exposed to
              technology, without cost being a barrier to entry.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue px-8 py-3 text-base font-medium text-white hover:bg-slateGray md:py-4 md:px-10 md:text-lg">
                  Sign Up
                </button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={codeEditor}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
