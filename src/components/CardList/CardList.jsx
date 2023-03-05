import users from '../../data/users.json'
import OneCard from '../OneCard/OneCard'
import useLocalStorage from '../../hooks/useLocalStorage'
import css from './CardList.module.css'

const CardList = () => {
    const [state, setState] = useLocalStorage('iFollow', []);

    const fallowToggle = (id) => {
        if (state.includes(id)) {
            setState(prevState => prevState.filter(item => item !== id));
            return;
        };
        setState([...state, id]);
    };

    return (
        <ul className={css.cardList}>
        {users.map(({ id, user, tweets, followers, avatar }) => {
            return <OneCard id={id} name={user} tweets={tweets} followers={followers} avatar={avatar} key={id} handleBtnClick={fallowToggle} state={state} />
        })}
    </ul>
    )
    
}

export default CardList;