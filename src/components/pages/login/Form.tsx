import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../../allPaths";
import TextInputFields from "../../shared/input/TextInput";



function Form() {
    return (
        <form

            className="w-full py-20 space-y-16  text-black text-base md:text-xl"
        >

            {/* password*/}
            {/* <div className="w-full space-y-5"> */}

                {/* <div>
                  <Link
                      className="text-primaryColor text-base hover:underline"
                      to={paths.FORGOT_PASSWORD}
                  >
                      Forgot Password?
                  </Link>
              </div> */}
            {/* </div> */}

            
            {/* username  */}
            <TextInputFields
                type="username"
                placeholder="UserName/Email"
                name="UserName"
            />


            {/* PASSWORD */}
            <TextInputFields
                type="password"
                placeholder="Password"
                name="Password"
            />


            <div className=" w-full  space-y-6">
                {/* <button className="btn1 w-full" type="submit" disabled={isButtonLoading}>
                  {isButtonLoading ? "Loading..." : "Proceed"}
              </button> */}
                <button className="w-full btn1">
                    SIGN IN
                </button>

                <h6 className="text-center md:text-xl w-full">
                    Don't have an account?{" "}
                    <span className="text- hover:underline">
                      <Link to={paths.CREATE_ACCOUNT}>Create account</Link>
                  </span>
                </h6>
            </div>
        </form>
    );
}

export default Form;