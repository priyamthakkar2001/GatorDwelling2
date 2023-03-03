import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const [dwelling, setDwelling] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const fetchDwelling = async () => {
        const res = await fetch(`http://localhost:5000/dwellings/${id}`);
        const data = await res.json();
        setDwelling(data);
        setLoading(false);
    };

    if (loading) {
      fetchDwelling();
    }
  }, []);

  return [dwelling, loading];
};