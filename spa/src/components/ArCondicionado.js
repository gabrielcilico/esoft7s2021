import React from 'react'

const limiteMin = 16;
const limiteMax = 28;
const ON = "ON";
const OFF = "OFF";

const styles = {
    container: {
        backgroundColor: '#84e',
        padding: 15,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
    },
    controls: {
        display: 'flex',
        justifyContent: 'center',
    },
    btnOnOff: {
        padding: 20,
        margin: 10,
        borderRadius: "50%",
        border: "none"
    },
    btnMinus: {
        padding: 20,
        border: "none",
        borderRadius: "50% 0 0 50%",
    },
    btnPlus: {
        padding: 20,
        border: "none",
        borderRadius: "0 50% 50% 0",
    },
    display: {
        padding: 20,
        backgroundColor: '#252525',
        margin: 0
    }
}

const ArCondicionado = () => {

    const [valor, setValor] = React.useState(OFF);
    const [btnOnfOff, setBtnOnfOff] = React.useState(ON);

    const onOff = () => {
        if (btnOnfOff === ON) {
            setBtnOnfOff(OFF);
            setValor(limiteMin);
        } else {
            setBtnOnfOff(ON);
            setValor(OFF);
        }
    }

    const incrementa = () => {
        if (btnOnfOff === OFF)
            setValor(valor >= limiteMax ? limiteMax : valor+1);
    };
    const decrementa = () => {
        if (btnOnfOff === OFF)
            setValor(valor <= limiteMin ? limiteMin : valor-1);
    }

    return (
        <div style={styles.container}>
            <h2>AR CONDICIONADO</h2>
            <button style={styles.btnOnOff} onClick={onOff}>{btnOnfOff}</button>
            <div style={styles.controls}>
                <button style={styles.btnMinus} onClick={decrementa}>-</button>
                <h3 style={styles.display}>{valor}{valor === OFF ? '' : '°C'}</h3>
                <button style={styles.btnPlus} onClick={incrementa}>+</button>
            </div>
        </div>
    )
}

export default ArCondicionado;