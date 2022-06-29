import { useState, useEffect } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  let controller = null

  const callEndpoint = async (service) => {
    if (service.controller) controller = service.controller;
    setLoading(true)
    let result = {}
    try {
      result = await service.call
    } catch (error) {
      console.error(error)
    }
    setLoading(false)
    return result;
  };

  useEffect(() => {
    return () => {
      setLoading(false);
      controller && controller.abort();
    };
  }, [controller]);

  return { loading, callEndpoint };
}

export default useFetch
