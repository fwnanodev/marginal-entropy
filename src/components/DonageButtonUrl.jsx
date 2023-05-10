export const DonateButtonUrl = () => {
  return (
    <div className="bg-siennaRed">
      <div className="px-6 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Donate to Marginal Entropy.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            All proceeds go directly into running and operating our free classes. Donations help
            ensure there are enough laptops for each student to use for class .
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=9WD47FSBYCV3N"
              className="rounded-md bg-blue px-16 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blueLight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
