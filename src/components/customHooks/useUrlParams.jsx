import { useState } from "react";

function useUrlParams() {
  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));

  const getParam = (paramName) => {
    return searchParams.get(paramName);
  };

  const setParam = (paramName, paramValue) => {
    searchParams.set(paramName, paramValue);
    setSearchParams(new URLSearchParams(searchParams.toString())); // Update the state
    updateUrl(searchParams);
  };

  const removeParam = (paramName) => {
    searchParams.delete(paramName);
    setSearchParams(new URLSearchParams(searchParams.toString())); // Update the state
    updateUrl(searchParams);
  };

  const updateUrl = (params) => {
    const newSearch = params.toString();
    const newUrl = `${window.location.pathname}?${newSearch}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  return {
    getParam,
    setParam,
    removeParam,
  };
}

export default useUrlParams;
