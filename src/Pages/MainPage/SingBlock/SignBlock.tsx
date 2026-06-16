import { useState } from "react";
import "./SignBlock.scss";

export const SignBlock = () => {
  type Mode = "login" | "register" | "forget" | "code" | "new-password";
  const [mode, setMode] = useState<Mode>("login");
  const [title, setTitle] = useState("Sign In To FASCO");

  const changeMode = (newMode: Mode, newTitle: string) => {
    setMode(newMode);
    setTitle(newTitle);
  };

  const showSocials = mode === "login" || mode === "register";

  return (
    <div className="sign-block">
      <div className="sign-block__img"></div>

      <div className="sign-block__content">
        <div className="block-buttons">
          <h1 className="sign-block__title">FASCO</h1>
          <h2 className="block-buttons__text-title">{title}</h2>

          {showSocials && (
            <div className="block-buttons__conteiner-for-btn">
              <div className="block-buttons__btn">Sign up with Google</div>
              <div className="block-buttons__btn">Sign up with Email</div>
            </div>
          )}
        </div>

        {showSocials && <span className="sign-block__or">- OR -</span>}

        {/* --- 1. ЕКРАН ЛОГІНУ --- */}
        {mode === "login" && (
          <div className="sign-block__input-btn">
            <div className="sign-block__input-conteiner">
              <input
                className="sign-block__input"
                type="email"
                id="login-email"
                placeholder="Email"
              />
              <input
                className="sign-block__input"
                type="password"
                id="login-password"
                placeholder="Password"
              />
            </div>
            <div className="sign-block__button-conteiner">
              <button
                className="sign-block__button"
                onClick={() => changeMode("login", "Welcome!")}
              >
                Sign in
              </button>
              <div className="sign-block__button-title-bottom">
                <button
                  className="sign-block__button blue-reg"
                  onClick={() => changeMode("register", "Create Account")}
                >
                  Register now
                </button>
                <button
                  className="sign-block__button--only-text forget-password"
                  onClick={() => changeMode("forget", "Forget Password")}
                >
                  Forget Password?
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- 2. ЕКРАН РЕЄСТРАЦІЇ --- */}
        {mode === "register" && (
          <div className="sign-block__input-btn">
            <div className="sign-block__input-conteiner--section">
              <div className="sign-block__input-conteiner">
                <input
                  className="sign-block__input"
                  type="text"
                  id="reg-first-name"
                  placeholder="First Name"
                />
                <input
                  className="sign-block__input"
                  type="email"
                  id="reg-email"
                  placeholder="Email"
                />
                <input
                  className="sign-block__input"
                  type="password"
                  id="reg-password"
                  placeholder="Password"
                />
              </div>
              <div className="sign-block__input-conteiner">
                <input
                  className="sign-block__input"
                  type="text"
                  id="reg-last-name"
                  placeholder="Last Name"
                />
                <input
                  className="sign-block__input"
                  type="tel"
                  id="reg-phone"
                  placeholder="Phone Number"
                />
                <input
                  className="sign-block__input"
                  type="password"
                  id="reg-con-password"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="sign-block__button-title-bottom">
              <button
                className="sign-block__button"
                onClick={() =>
                  changeMode("code", "Enter The Confirmation Code")
                }
              >
                Send Confirmation Code
              </button>
              <button
                className="sign-block__button--only-text"
                onClick={() => changeMode("login", "Sign In To FASCO")}
              >
                Already have an account?{" "}
                <span style={{ color: "#5B86e5" }}>Login</span>
              </button>
            </div>
          </div>
        )}

        {/* --- 3. ЕКРАН ЗАПИТУ КОДУ ВІДНОВЛЕННЯ --- */}
        {mode === "forget" && (
          <div className="sign-block__input-btn">
            <div className="sign-block__input-conteiner">
              <input
                className="sign-block__input"
                type="email"
                id="forget-email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="sign-block__button-title-bottom">
              <button
                className="sign-block__button"
                onClick={() =>
                  changeMode("code", "Enter The Confirmation Code")
                }
              >
                Send Code
              </button>
            </div>
          </div>
        )}

        {/* --- 4. ЕКРАН ВВЕДЕННЯ КОДУ --- */}
        {mode === "code" && (
          <div className="sign-block__input-conteiner">
            <input
              className="sign-block__input"
              type="number"
              id="code-input"
              placeholder="Configuration Code"
            />
            <div className="sign-block__button-title-bottom">
              <button
                className="sign-block__button"
                onClick={() =>
                  changeMode("new-password", "Enter Your New Password")
                }
              >
                Recover Account
              </button>
              <button
                className="sign-block__button--only-text"
                onClick={() => alert("Code resent!")}
              >
                Didn’t receive Confirmation Code?{" "}
                <span style={{ color: "#5B86e5" }}>Resend Now</span>
              </button>
            </div>
          </div>
        )}

        {/* --- 5. ЕКРАН ВВЕДЕННЯ НОВОГО ПАРОЛЯ --- */}
        {mode === "new-password" && (
          <>
            <div className="sign-block__input-conteiner">
              <input
                className="sign-block__input"
                type="password"
                id="new-pwd"
                placeholder="New Password"
              />
              <input
                className="sign-block__input"
                type="password"
                id="confirm-pwd"
                placeholder="Confirm Password"
              />
            </div>
            <button
              className="sign-block__button submit-enter"
              onClick={() => changeMode("login", "Sign In To FASCO")}
            >
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
};
