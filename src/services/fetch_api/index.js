import axios from "axios";
const baseUrl = "https://kamarku-test.herokuapp.com/api/v1";
export async function getAllCity() {
  const response = await axios.get(`${baseUrl}/cities`);
  return response.data;
}
