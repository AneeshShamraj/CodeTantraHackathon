import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [meet, setMeet] = useState(null);
    const [isPending, setIsPending] = useState(true);
  
    useEffect(() => {
        fetch(url)
        .then(res => {
          return res.json();
        })
        .then((data) => {
          setMeet(data.event);
          setIsPending(false)
        })
    }, [url])

    return {meet, isPending}
}

export default useFetch;