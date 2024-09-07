import { useEffect, useState } from "react";

async function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(currency);
    // let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
                const response = await fetch(url);
                let jsonData = await response.json();
                console.log(`JsonData[currency]:`, jsonData[currency]);
                jsonData = JSON.parse(JSON.stringify(jsonData, null, 2));
                setData((data)=> ({...data,...jsonData[currency]}));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currency]);
    
    // useEffect(() => {
    //     fetch(url)
    //     .then((res) => {console.log(res.body);
    //      return res.json()})
    //     .then((res) => setData(res[currency]))
    //     console.log(data);
    // }, [currency])
    console.log(`Data is : `,data);
    return { data, loading, error };
}

export default useCurrencyInfo;