import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setstate] = useState({data:null, loading:true, error:null});    

    useEffect(() => {
            isMounted.current = true;
        return () => {
            isMounted.current = false; 
        };
    }, []);

    useEffect(() => {

        setstate({
            data:null,
            loading:true,
            error:null
        });
        console.log(url);
        
        fetch(url).then( resp => resp.json() ).then(data => {
            
                    if (isMounted.current) {
                        setstate({
                            loading: false,
                            error: null,
                            data: data
                        });
    
                        console.log("Estado actualizado");
                    } else {
                        console.log("No se actualizó el estado, componente desmontado");
                    }
                
            
        } );


    }, [url]);


    return state;
    
};

export default useFetch;