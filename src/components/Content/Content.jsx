import Btn from '../Btn/Btn';
import PropTypes from "prop-types"
import css from './Content.module.css'

const Content = ({ id, followers, handleBtnClick, name, tweets, state }) => {

    const iFollow = state.includes(id);
    const userFollowers = iFollow ? followers + 1 : followers;
    
    const numberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className={css.contentBoxWrapper}>
            <p className={css.text}>{name}</p>
            <p className={css.text}>{numberWithCommas(tweets)} tweets</p>
            <p className={css.text}>{numberWithCommas(userFollowers)} followers</p>

            {iFollow ? <Btn title={"following"} onClick={() => handleBtnClick(id)} bColor={'#5CD3A8'} /> : <Btn title={"follow"} onClick={() => handleBtnClick(id)} bColor={'#EBD8FF'} />}
        </div>
    )
}

export default Content;

Content.propTypes = {
    followers: PropTypes.number.isRequired,
    handleBtnClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
}