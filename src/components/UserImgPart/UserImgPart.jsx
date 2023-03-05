import css from './UserImgPart.module.css'

const UserImgPart = ({avatar}) => {
    return (
        <div className={css.imageWrapper}>
            <span className={css.line}></span>
            <img src={avatar} alt='User icon' className={css.userIcon} />
        </div>
    )
}

export default UserImgPart;