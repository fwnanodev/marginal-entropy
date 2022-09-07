const url = "/api/GetBannerText";

const options = {
  method: "GET",
  headers: {},
};

const getBannerText = async () =>
  fetch(url, options).then((response) => response.json());

export default getBannerText;
