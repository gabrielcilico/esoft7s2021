import React from 'react'

const Contador = (props) => {

    let {valorMinimo, valorMaximo} = props;
    let [valor, setValor] = React.useState(valorMinimo);

    const incrementa = () => setValor(valor >= valorMaximo ? valorMaximo : valor+1);
    const decrementa = () => setValor(valor <= valorMinimo ? valorMinimo : valor-1);

    return (
        <div style={{backgroundColor: '#84e', padding: "15px", color: '#fff'}}>
            <h2>Valores entre {valorMinimo} e {valorMaximo}</h2>
            <p>Valor atual: {valor}</p>
            <button onClick={incrementa}>+</button>
            <button onClick={decrementa}>-</button>
        </div>
    )
}
export default Contador;