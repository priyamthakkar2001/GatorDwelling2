import { useState, useEffect } from 'react';

export default () => {
  const [dwellings, setDwellings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDwellings = async () => {
        const res = await fetch('http://localhost:5000/dwellings');
        const data = await res.json();
        console.log(data);
        setDwellings(data);
        setLoading(false);
    };

    if (loading) {
      fetchDwellings();
    }
  }, []);

  return [dwellings, loading];
};