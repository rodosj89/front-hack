import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchMyAPI = useCallback(async () => {
    let response = await fetch("../providers.json");
    let licencias = await response.json();
    let licenciaFilter = await licencias.filter((x) => x.id === id);
    console.log(licenciaFilter);
    setData(licenciaFilter);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return <div></div>;
};

export default ItemDetailContainer;