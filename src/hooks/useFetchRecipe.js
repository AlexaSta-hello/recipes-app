import axios from 'axios';
import { useState } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: {id: '8138'},
  headers: {
    'x-rapidapi-key': 'ce1184107cmsh030389028d9506cp15736bjsn40b3506153ac',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

const useFetchRecipe = () => {
    const [recipe, setRecipe] = useState([]); // null or {}
    const [loading, setLoading] = useState(false); // false or true
    const [error, setError] = useState(''); // null or string
  
    const fetchRecipe = async (id) => {
      setLoading(true);
      setRecipe([]);
      setError('');
      
      try {
        const reqOptions = {...options};
       
        reqOptions.params.id = id;
        
        const response = await axios.request(reqOptions);
       // console.log(response) // to check Structure -> here data. Else data.results
        setRecipe(response.data);
        setLoading(false)
      } catch (error) {
        // console.log(error);
        setError(error.message);
        setLoading(false)
      }
    };

    return [fetchRecipe, { data: recipe, loading, error }]
}

export default useFetchRecipe


/* Alternativ: useReducer() statt useState() zum Management von data, loading und error

import axios from "axios";
import { useReducer } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: { id: "8138" },
  headers: {
    "X-RapidAPI-Key": "30b594a022mshc657030b09147dcp153ad1jsn8b9a863a5527",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const Action = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducer = (_, action) => {
  switch (action.type) {
    case Action.FETCHING_DATA:
      return {
        data: null,
        error: null,
        loading: true,
      };
    case Action.FETCH_SUCCESSFUL:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };
    case Action.FETCH_ERROR:
      return {
        error: action.payload,
        data: null,
        loading: false,
      };
    default:
      return initialState;
  }
};

const useFetchRecipe = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchRecipe = async (id) => {
    dispatch({ type: Action.FETCHING_DATA });

    try {
      const reqOptions = { ...options };
      reqOptions.params.id = id;
      const response = await axios.request(reqOptions);

      dispatch({ type: Action.FETCH_SUCCESSFUL, payload: response.data });
    } catch (err) {
      dispatch({ type: Action.FETCH_ERROR, payload: err.message });
    }
  };

  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe; */