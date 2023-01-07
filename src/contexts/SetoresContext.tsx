import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import config from "../config";

export const SetoresContext = createContext([]);

type SetoresContextProviderProps = {
  children: React.ReactNode;
};

export const SetoresContextProvider = ({
  children,
}: SetoresContextProviderProps) => {
  const [data, setData] = useState([]);
  const handleFetchData = useCallback(async () => {
    try {
      const dataFetch = await axios(
        config.url + config.slugSuper + config.slugSector + "get",
      );
      setData(dataFetch.data.data);
    } catch (e) {
      alert("Algo saiu errado, entre em contato com o administrador");
    }
  }, []);

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <SetoresContext.Provider value={data}>{children}</SetoresContext.Provider>
  );
};
