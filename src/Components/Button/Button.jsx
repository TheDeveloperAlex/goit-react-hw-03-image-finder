import s from './Button.module.css';

const Button = ({ click }) => {
    return (
        <button type="button" onClick={click} className={s.Button}>Load More</button>
    );
}

export default Button;