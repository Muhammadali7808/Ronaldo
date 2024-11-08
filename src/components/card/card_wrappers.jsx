import React, { useContext } from "react";
import { TodoContext } from "../../provider/todo_provider/todo_provider";
import { Delete_User, Edit_User } from "../../provider/todo_provider/todo_types";
export const TextInterface = () => {
  const { data, dispatch } = useContext(TodoContext);

  const DeleteUser = (id) => {
    dispatch({ type: Delete_User, id });
  };
  const EditUser = (id) => {
    const UserEdit = prompt("WELCOME TO MADRID");
    if (EditUser) {
      dispatch({ type: Edit_User, id, value: { first_name: UserEdit } });
    }
  };

  return (
    <>
      {data?.users?.map((item) => (
        <div className="block" key={item.id}>
          <h1 className="title">{item.first_name}</h1>
          <div className="delBtnBlock">
            <button className="del" onClick={() => DeleteUser(item.id)}>
              delete
            </button>
            <button className="edit" onClick={() => EditUser(item.id)}>
              Edit
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
