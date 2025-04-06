import { Link } from "react-router-dom";
import styles from "./NavModal.module.css";
import loveIcon from "../../assets/Icons/love.svg";
import cartIcon from "../../assets/Icons/Cart.svg";

export default function NavModal() {



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return <>

    <section className={`${styles.NavModal}`}>



      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">

            {/*modal header  */}
            <div className={`${styles.modalHeader} modal-header`}>
              <h1 className="modal-title fs-5" id="exampleModalLabel">Exclusive</h1>
              <i className="fas fa-xmark" data-bs-dismiss="modal" aria-label="Close"></i>
            </div>



            {/*modal body  */}
            <div className={`${styles.modalBody} modal-body`}>

              {/* navLinks */}
              <ul className={`${styles.navLinks}   `}>
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


              {/* navIcons */}
              <div className={`${styles.navIcons}`}>

                {/* love icon */}
                <img src={loveIcon} alt="" />

                {/* cart icon */}
                <img src={cartIcon} alt="" />
              </div>

            </div>


          </div>
        </div>
      </div>

    </section>





  </>
}
