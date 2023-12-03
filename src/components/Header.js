import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handleSignout = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
              navigate('/error');
            // An error happened.
          });
    }

    return <header className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
        <div>
            <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
        </div>
        {user && <div className="userIcon flex">
            <img className="w-10 mr-2" src={user?.photoURL} alt="Image" />
            <button onClick={handleSignout} className="font-bold text-white">(Sign Out)</button>
        </div>}
    </header>
}

export default Header;