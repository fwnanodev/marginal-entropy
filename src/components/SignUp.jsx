export default function SignUp() {
  return (
    <>
      <div className="bg-white border border-t-blue flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-blue">
            Register for Free Minecraft Coding Class
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
            <form className="space-y-6" method="POST" action="https://getform.io/f/352db9a4-b2d3-431a-a80c-7ef89153cbab
">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Parent or Student Email Address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-siennaRed focus:outline-none focus:ring-2 focus:ring-siennaRed focus:ring-offset-2"
                >
                  Request Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
