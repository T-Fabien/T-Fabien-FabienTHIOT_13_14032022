import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../actions/user_actions";

function Navbar(props) {
  const dispatch = useDispatch();
  const first = useSelector((state) => state.userReducer.user.firstName);
  const logIn = useSelector((state) => state.userReducer.isLogIn);

  const signOut = () => {
    dispatch(logOut());
  };

  // Navbar to show Link Profile
  const linkToProfile = (
    <div>
      <Link className="main-nav-item" to="/profile">
        <i className="fa fa-user-circle"></i>
        {first}
      </Link>
      <button onClick={() => signOut()} className="main-nav-item-btn">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </button>
    </div>
  );

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {
        // if user is conneted, show Link to Profile, else Link to Sign In
        logIn ? (
          linkToProfile
        ) : (
          <div>
            <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )
      }
    </nav>
  );
}

export default Navbar;
