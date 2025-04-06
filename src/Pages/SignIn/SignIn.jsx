import { useState } from "react";
import styles from "./SignIn.module.css";
import registerImage from "../../assets/registerImage.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export default function SignIn() {

  // handle state management==================================================>
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // handleLogin===============================================================>
  const handleLogin = async (e) => {

    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://fakestoreapi.com/users");
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();
      console.log(users);


      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );


      if (foundUser) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        toast.success("Login successful!");
        window.location.replace('/');
      } else {
        toast.error("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <section className={`${styles.signIn}`}>
        <div className={`${styles.signInContainer}`}>

          {/* imageSection */}
          <div className={`${styles.imageSection}`}>
            <img src={registerImage} alt="Shopping" className={`${styles.image}`} />
          </div>

          {/* formSection */}
          <div className={`${styles.formSectionContainer}`}>
            <div className={`${styles.sectionFrom}`}>
              <h1 className={`${styles.title}`}>Log in to Exclusive</h1>
              <p className={`${styles.subtitle}`}>Enter your details below</p>

              {/* form */}
              <form className={`${styles.form}`} onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className={`${styles.input}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className={`${styles.input}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <div className={`${styles.rememberMeContainer}`}>
                  <button
                    type="submit"
                    className={`${styles.loginBtn}`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Log In"}
                  </button>
                  <Link to="/forgetPassword" className={`${styles.formetPassword}`}>
                    Forget Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}