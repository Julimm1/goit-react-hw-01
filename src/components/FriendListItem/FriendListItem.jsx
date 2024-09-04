// Компонент <FriendListItem> - це картка одного друга, яка повинна приймати кілька пропсів:

// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.
// Компонент <FriendListItem> повинен створювати DOM розмітку наступної структури.

// <div>
//   <img src="" alt="Avatar" width="48" />
//   <p>Friend name</p>
//   <p>Friend status</p>
// </div>

// Залежно від пропа isOnline, текст в p.status повинен змінюватися, а його колір тексту - також. Якщо значення true, то текст Online і колір тексту зелений, в іншому випадку текст Offline і червоний колір тексту. Це можна зробити за допомогою різних CSS-класів.

// Приклад використання компонента FriendList в компоненті App. Дані про друзі це масив об'єктів із відомими властивостями. Використовуй ці дані в своїй роботі для значень пропсів.

import clsx from "clsx";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={clsx(isOnline ? s.isOnline : s.isOffline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
