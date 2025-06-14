import { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const UseEffectExample = () => {
  const [datay, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading
  const [isError, setError] = useState(false);  // No error initially

  const fetchdata = async (apiurl) => {
    try {
      const response = await fetch(apiurl);
      const data = await response.json();
      setData(data);
      setLoading(false);  // Done loading
      setError(false);
    } catch (error) {
      setLoading(false);
      setError(true);     // Something went wrong
    }
  };

  useEffect(() => {
    fetchdata(URL);
  }, []);

  // Show loading
  if (loading) {
    return <h1>Loading....</h1>;
  }

  // Show error message
  if (isError) {
    return <h1>Something Went Wrong</h1>;
  }

  // Show data
  return (
    <div>
      {
        datay.map((eachItem) => {
          const { id, name, username } = eachItem;
          return (
            <div key={id}>
              <ul>
                <li>{name}</li>
                <li>{username}</li>
              </ul>
            </div>
          );
        })
      }
    </div>
  );
};

export default UseEffectExample;
