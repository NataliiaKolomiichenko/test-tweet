import Logo from '../../images/Logo.svg'
import BGImage from '../../images/picture.png'
import css from './LogoPart.module.css';

const LogoPart = () => {
    return (
        <div className={css.imgBoxWrapper}>
            <img src={Logo} alt='Logo' className={css.logo} />
            <img src={BGImage} alt='Background' className={css.bgImage} />
        </div>
    )
}

export default LogoPart;