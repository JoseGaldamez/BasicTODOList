import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [state, setstate] = useState({data:null, loading:true, error:null});    

    useEffect(() => {
        
        fetch(url).then( resp => resp.json() ).then(data => {
                
                setstate({
                    loading: false,
                    error: null,
                    data: data
                });
            
        } );



        return () => {
            
        }

    }, [url]);


    return state;
    
};

export default useFetch;