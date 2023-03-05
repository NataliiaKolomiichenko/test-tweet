import css from './OneCard.module.css'
import UserImgPart from '../UserImgPart/UserImgPart';
import Content from '../Content/Content'
import LogoPart from '../LogoPart/LogoPart';
import PropTypes from "prop-types"

const OneCard = ({ id, name, tweets, followers, avatar, handleBtnClick, state }) => {

    return (
        <li className={css.boxWrapper}>
            <LogoPart />
            <UserImgPart avatar={avatar} />
            <Content id={id} followers={followers} name={name} tweets={tweets} handleBtnClick={handleBtnClick} state={state} />
        </li>
    );
}

export default OneCard;

OneCard.OneCard = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    handleBtnClick: PropTypes.func.isRequired,
    state: PropTypes.arrayOf(PropTypes.number).isRequired,
}