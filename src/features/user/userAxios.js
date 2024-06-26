import { apiProcessior } from "../../helper/axiosHelper";

const userAPI = import.meta.env.VITE_APP_SERVER_API + "/library/users";

export const signupNewUser = (signupObj) => {
  const axiosObj = {
    url: `${userAPI}/signup`,
    method: "POST",
    data: signupObj,
  };

  return apiProcessior(axiosObj);
};

export const loginUser = (loginObj) => {
  const axiosObj = {
    url: `${userAPI}/login`,
    method: "POST",
    data: loginObj,
  };

  return apiProcessior(axiosObj);
};

//get login User profile for private user
export const fetchUserInfo = () => {
  const axiosObj = {
    url: userAPI,
    method: "get",
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

//get all users
export const fetchAllUsers = () => {
  const axiosObj = {
    url: userAPI + "/all",
    method: "get",
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

// update user
export const updateUser = (obj) => {
  const axiosObj = {
    url: `${userAPI}`,
    method: "PUT",
    data: obj,
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

// delete user
export const deleteUser = (_id) => {
  const axiosObj = {
    url: `${userAPI}/${_id}`,
    method: "DELETE",
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};
