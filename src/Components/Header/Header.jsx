
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import loveIcon from "../../assets/Icons/love.svg";
import cartIcon from "../../assets/Icons/blackCart.svg";
import profile from "../../assets/Icons/profile.svg";
import searchIcon from "../../assets/Icons/searchIcon.svg";
import NavModal from "../NavModal/NavModal";

const user = localStorage.getItem("user");


export default function Header() {




 



  const location = useLocation();


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "signUp", path: "/signUp" }
  ];

  return <>

    <NavModal />
    <div className={`${styles.header}`}>

      {/* topBar===========================================> */}
      <div className={styles.topBar}>

        <div className={`${styles.topBarContainer} specialContainer `}>

          <p className={`${styles.announcement}`}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="#" className={styles.shopNow}>ShopNow</a>
          </p>

          <div className={`${styles.languageSwitcher}`}>
            English
            <i className="fas fa-angle-down"></i>
          </div>

        </div>

      </div>


      {/* nav==============================================> */}
      <nav className="">

        {/* navContainer */}
        <div className={`${styles.navContainer} specialContainer`}>

          {/* logo */}
          <div className={`${styles.logo}  `}>
            <Link to='/'>Exclusive</Link>
          </div>

          {/* navLinks */}
          <ul className={`${styles.navLinks} `}>

            {navLinks.map((link, index) => {
              return <li key={index}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? styles.active : ""}
                >{link.name}</Link>
              </li>
            }
            )}

          </ul>

          {/* searchBarContainer */}
          <div className={`${styles.searchBarContainer}  `}>

            {/* search */}
            <div className={`${styles.search}  `}>
              <input type="text" placeholder="What are you looking for?" />
              <img src={searchIcon} alt="Search Icon" />
            </div>


            {/* navIcons */}
            <div className={`${styles.navIcons}   `}>

              {user &&
                <>
                  {/* love icon */}
                  <Link to="/wishList">
                    <img src={loveIcon} alt="wishListIcon" />
                  </Link>

                  {/* cart icon */}
                  <Link to={"/cart"}>
                    <img src={cartIcon} alt="cartIcon" />
                  </Link>

                  <Link to={"/profile"}>
                    <img src={profile} alt="ProfileIcon" />
                  </Link>
                </>
              }


            </div>

          </div>

          <i className={`${styles.navMenu} fas fa-bars `} data-bs-toggle="modal" data-bs-target="#exampleModal"></i>

        </div>


      </nav>




      <nav>




      </nav>

    </div>





  </>
}
