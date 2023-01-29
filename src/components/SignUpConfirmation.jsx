const SignUpConfirmation = () => {
  return (
    <div className="flex justify-center mb-96 border-t-2 border-siennaRed">
      <div className="m-8 space-y-12">
        <h1 className="text-5xl mt-20 text-blue text-center">
          Thank you for signing up for our Minecraft Coding Class!
        </h1>
        <div className="space-y-6 text-3xl text-slateGray text-center">
          <div>A Minecraft Educator will be in touch with you via email.</div>
          <div>
            <b>
              If you have any questions in the meantime please reach out to us
              at jocelynn@marginalentropy.org
            </b>
            <div className="mt-12 text-2xl text-siennaRed hover:underline">
              <a href="/">Return Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpConfirmation;
