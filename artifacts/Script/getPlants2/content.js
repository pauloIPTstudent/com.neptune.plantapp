/*
    This code snippet makes an API call within a script, offering options for API requests.
    The parameters 'data' and 'body' can be used interchangeably, with 'body' taking precedence.
    The request is sent using the axios module. You can provide additional configuration to the
    request by using the axiosConfig property. For example: opts.axiosConfig = { responseType: 'arraybuffer' }.
*/
const opts = {
  page: req.params?.page ||"1",
  parameters: {},
  headers: {},
  data: {},
  body: {},
  axiosConfig: {},
};

try {
  // Send api request.
  const response =
    await apis.plantstokenusr6QSnZVaQ6NqREVEmQPW56uG5ZDHDYMvVKowPNufsaspagepage(
      opts
    );
  result = response.data.data.map(item => ({
    id: item.id ? item.id.toString() : "",
    common_name: item.common_name || "",
    slug: item.slug || "",
    scientific_name: item.scientific_name || "",
    year: item.year || "",
    bibliography: item.bibliography || "",
    author: item.author || "",
    status: item.status || "",
    rank: item.rank || "",
    family_common_name: item.family_common_name || "",
    genus: item.genus || "",
    family: item.family || "",
    regular_url: item.image_url || "https://cdn-icons-png.flaticon.com/512/616/616408.png"
  }));
  console.log(result);
} catch (error) {
  log.error("Error in request: ", error);
  return fail();
}

