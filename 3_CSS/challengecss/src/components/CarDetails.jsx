import styles from './CarDetails.module.css';

const CarDetails = ({car}) => {
    return(
        <div >
            <ul className={styles.carDetails}>
                <ol>Marca:{car.marca}</ol>
                <ol>Ano: {car.ano}</ol>
                <ol>Km: {car.km}</ol>
            </ul>
        </div>
    )
}

export default CarDetails;