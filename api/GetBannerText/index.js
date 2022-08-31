module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const responseMessage =
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.";

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};
