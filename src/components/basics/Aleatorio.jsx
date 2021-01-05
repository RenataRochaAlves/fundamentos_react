
export default (props) => {
    const {min, max} = props;

    return (
        <div>
            <h5>Mínimo: {min}</h5>
            <h5>Máximo: {max}</h5>
            <h4>Aleatório: {parseInt(Math.random() * (max - min) + min)}</h4>
        </div>

    )
};