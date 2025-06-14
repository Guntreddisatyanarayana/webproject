import { useEffect, useState } from 'react';

const URL = "https://thecocktaildb.com/api/json/v1/1/search.php?s=";

const UseEffeceExample2 = () => {
  const [drinksdata, setDrinks] = useState([]);
  const [Searchterm, setSearchterm] = useState("");

  const fetched = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      const { drinks } = await response.json();
      setDrinks(Array.isArray(drinks) ? drinks : []); // ✅ fix here
    } catch (error) {
      console.error("Fetch failed", error);
      setDrinks([]); // fallback
    }
  };

  useEffect(() => {
    const modiUrl = `${URL}${Searchterm}`;
    fetched(modiUrl);
  }, [Searchterm]);

  return (
    <>
      <input
        className='searchbar'
        type='text'
        id='data'
        placeholder='Search ur fav drink'
        value={Searchterm}
        onChange={(e) => setSearchterm(e.target.value)}
      />
      <div className="ram">
        {
          drinksdata.length > 0 ? (
            drinksdata.map((eachItem) => {
              const { idDrink, strDrink, strDrinkThumb } = eachItem;
              return (
                <div key={idDrink}>
                  <img className='jk' src={strDrinkThumb} alt={strDrink} />
                  <h3>{strDrink}</h3>
                </div>
              );
            })
          ) : (
            <h4>No drinks found</h4>
          )
        }
      </div>
    </>
  );
};

export default UseEffeceExample2;
``