import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from '../utils/constants.js';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const handleSignout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
              navigate('/error');
            // An error happened.
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid, email, displayName, photoURL}));
            navigate('/browse')
          } else {
            dispatch(removeUser());
            navigate('/');
          }
        });
      }, [])

    return <header className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center z-50">
        <div>
            <img className="w-44" src={LOGO} alt="Logo" />
        </div>
        {user && <div className="userIcon flex">
            <img className="w-10 mr-2" src={user?.photoURL} alt="Image" />
            <button onClick={handleSignout} className="font-bold text-white">(Sign Out)</button>
        </div>}
    </header>
}

export default Header;