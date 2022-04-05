import { composeWithDevTools } from "redux-devtools-extension";

export const GET_USER = "GET_USER";
export const UPDATE_USER = "UPDATE_USER";
export const LOG_OUT = "LOG_OUT";

/**
 * Get User profile
 * @param {string} token  JWT Token
 * @returns User profile
 */
export const getUser = (token) => {
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: GET_USER,
          payload: result.body,
        });
      })
      .catch((err) => console.log(err));
  };
};

/**
 * Update user profile
 * @param {string} firstName new first name
 * @param {string} lastName new last name
 * @returns user profile update
 */
export const updateUser = (firstName, lastName) => {
  const token = localStorage.getItem("jwt");
  return (dispatch) => {
    return fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      method: "PUT",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
      }),
    })
      .then((resp) => resp.json())
      .then(() => {
        dispatch({
          type: UPDATE_USER,
          payload: { firstName, lastName },
        });
      })
      .catch((err) => console.log(err));
  };
};

/**
 * Log out
 * @returns clear local storage and state
 */
export const logOut = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: LOG_OUT,
      payload: "",
    });
    window.location = "/";
  };
};
