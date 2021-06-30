export const GET_ALL_CITIES = "GET_ALL_CITIES";
export const GET_ALL_CITIES_LOADING = "GET_ALL_CITIES_LOADING";
export const GET_ALL_CITIES_SUCCESS = "GET_ALL_CITIES_SUCCESS";

export const getCities = (cities) => ({
  type: GET_ALL_CITIES,
  payload: cities,
});

export const getCitiesLoading = () => ({
  type: GET_ALL_CITIES_LOADING,
});
