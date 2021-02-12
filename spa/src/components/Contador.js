import React from 'react'

const styles = {
    container: {
        backgroundColor: '#84e', 
        padding: "15px", 
        color: '#fff', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around',
        alignItems: 'center', 
    },
    controller: {
        display: 'flex', 
        justifyContent: 'space-between'
    },
    value: {
        margin: "0 10px"
    }
}

const Contador = (props) => {

    let {valorMinimo, valorMaximo} = props;
    let [valor, setValor] = React.useState(valorMinimo);

    const incrementa = () => setValor(valor >= valorMaximo ? valorMaximo : ++valor);
    const decrementa = () => setValor(valor <= valorMinimo ? valorMinimo : --valor);

    return (
        <div style={styles.container}>
            <h2>Valores entre {valorMinimo} e {valorMaximo}</h2>
            <div style={styles.controller}>
                <button onClick={decrementa}>-</button>
                <h3 style={styles.value}>Valor atual: {valor}</h3>
                <button onClick={incrementa}>+</button>
            </div>
        </div>
    )
}
export default Contador;