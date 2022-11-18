import React, { useEffect, useState } from 'react';

const useGetData = (url) => {
    const [ data, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
  
    useEffect( () => {
      const abortCont = new AbortController();

      // setTimeout( () => {
        fetch(url, { signal:abortCont.signal })
          .then( (response) => {
              if(!response.ok) {
                throw Error('Désolé, une erreur s\'est produite... ');
              }
              return response.json();
          })
          .then( (data) => { 
              setData(data);
              setIsLoading(false);
              setError(null);
            })
            .catch( err => { 
              if( err.name === "AbortError" ) {
                console.log("La requête a été stopée");
              }else{
                // console.log(err.message);
                setError(err.message);
                setIsLoading(false);
              }
          })
      // }, 2000)

      return () => abortCont.abort();

    }, [url]);

  return {data, isLoading, error};
}

export default useGetData
