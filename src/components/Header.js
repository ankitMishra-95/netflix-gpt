import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants.js';
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const showGptSearchView = useSelector(store => store.gpt.showGptSearch)
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

      const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
      }

      const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
      }

    return <header className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center z-50 roun">
        <div>
            <img className="w-44" src={LOGO} alt="Logo" />
        </div>
        {user && <div className="userIcon flex items-center">
        {showGptSearchView && <select className="py-2 px-4 mr-5 rounded" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
            <button className="bg-purple-600 text-white text-stone-950 px-10 py-2 rounded font-bold bg-opacity-90 hover:bg-opacity-80 mr-5" onClick={handleGptSearchClick}> {showGptSearchView? "Homepage": "GPT Search"} </button>
            <img className="w-10 mr-2" src={user?.photoURL} alt="Image" />
            <button onClick={handleSignout} className="font-bold text-white">(Sign Out)</button>
        </div>}
    </header>
}

export default Header;