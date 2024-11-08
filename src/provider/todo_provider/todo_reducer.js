import { Add_User, Edit_User, Delete_User } from "./todo_types";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case Add_User:
      return { ...state, users: [action.value, ...state.users] };
    case Delete_User:
      const newUsers = state.users.filter((item) => item.id !== action.id);
      return { ...state, users: newUsers };
    case Edit_User:
      return {
        ...state,
        users: state.users.map((item) =>
          item.id === action.id ? { ...action.value, ...item.users } : item
        ),
      };
    default:
      return state;
  }
};
