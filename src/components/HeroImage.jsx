export default function HeroImage() {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto"></div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-slateGray sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
              <span className="block xl:inline">Marginal</span>{" "}
              <span className="block text-blue xl:inline">Entropy</span>
            </h1>
            <p className="italic mt-10 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl">
              Lowering the barrier to technology for marginalized communities.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow"></div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
