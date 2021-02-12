import React from 'react'
import axios from 'axios'

const Hello = () => {
    let [hello, setHello] = React.useState("Hello component!");

    const get = async () => {
        let response = await axios.get('/api/hello')
        console.log(response)
        setHello(response.data)
    }

    React.useEffect(() => {
        get()
    }, [])

    return (
        <div>
            <p>Resposta: {hello}</p>
        </div>
    );
}

export default Hello;