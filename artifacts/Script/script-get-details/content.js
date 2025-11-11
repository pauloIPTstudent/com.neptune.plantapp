/*
    This code snippet makes an API call within a script, offering options for API requests.
    The parameters 'data' and 'body' can be used interchangeably, with 'body' taking precedence.
    The request is sent using the axios module. You can provide additional configuration to the
    request by using the axiosConfig property. For example: opts.axiosConfig = { responseType: 'arraybuffer' }.
*/

log.debug(req.params.id);
const opts = {
  ID:req.params?.id ||"1",
  parameters: {},
  headers: {},
  data: {},
  body: {},
  axiosConfig: {},
};

try {
  // Send api request.
  const response = await apis.details(opts);
  // Log response data
    result = {
    "id": response.data.data.id,
    "common_name": response.data.data.slug,
    "scientific_name": response.data.data.scientific_name,
    "regular_url": response.data.data.image_url || null
  };
  console.log(result);
} catch (error) {
  log.error("Error in request: ", error);
  return fail();
}
