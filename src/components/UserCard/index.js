import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const [userName, setUserName] = useState("");

  const user = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeName(userName));
  };

  return (
    <div>
      <p>Nome do usuário: {user}</p>
      <input
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />
      <button onClick={() => handleClick()}>Change</button>
    </div>
  );
};

export default UserCard;
