const SignUpConfirmation = () => {
  return (
    <div className="flex justify-center mb-96 border-t-2 border-siennaRed">
      <div>
        <h1 className="text-5xl mt-20 text-blue text-center mx-12">
          Thank you for signing up for our Minecraft Coding Class!
        </h1>
        {/* <div className="text-3xl text-slateGray text-center"> */}
        <div className="text-3xl text-slateGray text-center mx-12 mt-12">
          A Minecraft Educator will be in touch with you via email.
        </div>
        <div className="mx-12 text-2xl mt-12 text-center text-blue">
          <b>
            If you have any questions in the meantime please reach out to us at
            contact@marginalentropy.org
          </b>
          <div className="mt-12 text-2xl text-siennaRed hover:underline">
            <a href="/">Return Home</a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SignUpConfirmation;
