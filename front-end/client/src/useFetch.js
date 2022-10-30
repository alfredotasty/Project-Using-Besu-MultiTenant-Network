import { useEffect, useState } from "react";

const useFetch = (url) => {
    // const { id } = useParams()
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const aborCont = new AbortController(); //handle dismount fetch
        setTimeout(() =>{
            fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                setData(data);
                setIsLoading(false);
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }
            })

        },500)

        return () => {
            aborCont.abort()
            console.log('clean up fetch!!')
        }
        
    }, [url]);

    return {data, isLoading}
}
export default useFetch