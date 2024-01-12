import style from './button.module.css';

const Button = ({ title, type = 'submit' }) => {
  return (
    <button type={type} className={style.Button}>
      {title}
    </button>
  );
};
export default Button;
