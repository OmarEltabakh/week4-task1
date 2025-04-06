import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import styles from "./SignUp.module.css";
import registerImage from "../../assets/registerImage.png";
import google from "../../assets/Icons/google.svg";
import { Link } from "react-router-dom";

const user = localStorage.getItem("user");

export default function SignUp() {

  // handle state management================================================>
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // handleSignUp===========================================================>
  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      toast.error("Please fill in all fields", { autoClose: 3000 });
      return;
    }

    try {
      const { data: newUser } = await axios.post("https://fakestoreapi.com/users", {
        email,
        username: name,
        password,
      });

      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Account created successfully!", { autoClose: 3000 });
      navigate("/signIn");
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error(error.response?.data?.message || "An error occurred. Please try again.", { autoClose: 3000 });
    }
  };

  return (
    <section className={styles.signUp}>
      <div className={styles.signUpContainer}>

        {/* imageSection */}
        <div className={styles.imageSection}>
          <img src={registerImage} alt="Shopping" className={styles.image} />
        </div>

        {/* formSection */}
        <div className={styles.formSectionContainer}>
          <div className={styles.sectionFrom}>
            <h1 className={styles.title}>Create an account</h1>
            <p className={styles.subtitle}>Enter your details below</p>

            {/* form */}
            <form className={styles.form} onSubmit={handleSignUp}>
              <input
                type="text"
                placeholder="Name"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength="6"
              />
              <button type="submit" className={styles.createAccountBtn}>
                Create Account
              </button>
            </form>

            {!user &&
              <>
                <button type="button" className={styles.googleSignupBtn}>
                  <img src={google} alt="Google Icon" className={styles.googleIcon} />
                  Sign up with Google
                </button>

                <p className={styles.footerText}>
                  Already have an account? <Link to="/signIn" className={styles.loginLink}>Log in</Link>
                </p>
              </>


            }


          </div>
        </div>
      </div>
    </section>
  );
}