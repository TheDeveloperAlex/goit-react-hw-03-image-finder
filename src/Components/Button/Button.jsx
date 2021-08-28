import s from './Button.module.css';

const Button = ({ click, page }) => {
  page !== 2 && window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
    return (
        <button type="button" onClick={click} className={s.Button}>Load More</button>
    );
}

export default Button;