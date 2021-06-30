import { getAllCity } from "services/fetch_api";
import { getCities } from "state_management/action/cities/getCities";
import {
  GET_ALL_CITIES,
  GET_ALL_CITIES_LOADING,
  getCitiesLoading,
} from "state_management/action/cities/getCities";

const initialState = {
  isLoading: false,
  cities: [],
};

export const getAllCitiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CITIES:
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    case GET_ALL_CITIES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};

export const fetchCities = () => async (dispatch) => {
  dispatch(getCitiesLoading());
  const cities = await getAllCity();
  dispatch(getCities(cities.data));
};
