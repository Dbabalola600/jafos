import React from "react";

function Form (){
   return (
      <form
         
          className="w-full py-20 space-y-16  text-darkTextColor text-base md:text-xl"
      >         
          {/* username*/}
          <div>
              <div className="" >
                  <input
                  placeholder="Email Address"
                  />
              </div>

             
          </div>
          {/* password*/}
          <div className="w-full space-y-5">
              <div>
                  <input
                  placeholder="Password"
                  type= "password"
                  />
              </div>


              {/* <div>
                  <Link
                      className="text-primaryColor text-base hover:underline"
                      to={paths.FORGOT_PASSWORD}
                  >
                      Forgot Password?
                  </Link>
              </div> */}
          </div>


          <div className=" w-full  space-y-6">
              {/* <button className="btn1 w-full" type="submit" disabled={isButtonLoading}>
                  {isButtonLoading ? "Loading..." : "Proceed"}
              </button> */}

              <h6 className="text-center md:text-xl w-full">
                  Don't have an account?{" "}
                  {/* <span className="text-primaryColor hover:underline">
                      <Link to={paths.CREATE_ACCOUNT}>Create account</Link>
                  </span> */}
              </h6>
          </div>
      </form>
  );
}

export default Form;