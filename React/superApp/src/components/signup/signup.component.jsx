import style from "./signup.module.css";
const Signup = () => {
  return (
    <div className={style.signUpContainer}>
      <form>
        <div className={style.formHeader}>
          <h1 className={style.heading}>Super app</h1>
          <p>Create Your new account</p>
        </div>
        <div className={style.inputContainer}>
          <input type="text" placeholder="Name" required />

          <input type="text" placeholder="UserName" required />

          <input type="email" placeholder="Email" required />

          <input type="mobile" placeholder="Mobile" required />
        </div>
        <div className={style.checkBox}>
          <input type="checkbox" required />
          <label htmlFor="">Share my registration data with Superapp</label>
        </div>
        <div className={style.termsAndCondition}>
          <button>SIGN UP</button>
          <p>
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
