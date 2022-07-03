import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendListItem({avatar, name, isOnline}) {
    const status = isOnline ? css.statusGreen : css.statusRed;
    return <li className={css.item}>
        <span className={status}>{ isOnline}</span>
        <img className={ css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{ name}</p>
    </li>
}

export default FriendListItem

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}