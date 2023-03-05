import PropTypes from "prop-types"
import css from './Btn.module.css';

const Btn = ({ title, onClick, bColor }) => {
    return (
        <button type='button' className={css.btn} onClick={onClick} style={{background: `${bColor}`}}>{title}</button>
    )
}

export default Btn;

Btn.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    bColor: PropTypes.string.isRequired,
}