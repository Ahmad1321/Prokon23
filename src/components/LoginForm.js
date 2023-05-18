import { useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const onForgotPasswordClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  const onCreateAnAccountClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <form
      className="absolute top-[154px] left-[65%] w-[502px] h-[681px]"
      action="Login"
      method="get"
    >
      <div className="absolute top-[0px] left-[114px] text-17xl font-montserrat text-black text-left">
        Welcome Back!
      </div>
      <div className="absolute top-[144px] left-[0px] w-[502px] h-[359px]">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[40px]">
          <TextField
            className="[border:none] bg-[transparent] relative"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="text"
            name="username"
            label="Email Addres / Username"
            placeholder="Placeholder"
            size="medium"
            margin="none"
            required
          />
          <TextField
            className="[border:none] bg-[transparent] relative"
            sx={{ width: 504 }}
            color="primary"
            variant="outlined"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility">
                    <Icon>visibility</Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            name="password"
            label="Password"
            placeholder="Placeholder"
            size="medium"
            margin="none"
            required
          />
        </div>
        <div className="absolute top-[26px] left-[42px] text-xl font-light font-roboto text-black text-left hidden">
          Email Address / Username
        </div>
        <div className="absolute top-[141px] left-[40px] text-xl font-light font-roboto text-black text-left hidden">
          Password
        </div>
        <div className="absolute top-[236px] left-[0px] flex flex-row items-center justify-center gap-[20px]">
          <input
            className="cursor-pointer relative rounded-mini bg-gray box-border w-10 h-10 border-[1px] border-solid border-black"
            type="checkbox"
          />
          <div className="relative text-xl font-montserrat text-black text-left">
            Remember Me
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-2.5 px-5 bg-royalblue-100 absolute top-[315px] left-[0px] rounded-mini w-[502px] flex flex-row box-border items-center justify-center hover:bg-royalblue-300"
          formMethod="get"
        >
          <div className="relative text-xl font-medium font-inter text-base-white text-left">
            Login
          </div>
        </button>
      </div>
      <img
        className="absolute top-[552px] left-[0px] w-[502px] h-0.5"
        alt=""
        src="/line-8.svg"
      />
      <div className="absolute top-[603px] left-[159px] flex flex-col items-center justify-center gap-[30px]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-medium font-inter text-mediumslateblue-100 text-left inline-block hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          onClick={onForgotPasswordClick}
        >
          Forgot Password?
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-medium font-inter text-mediumslateblue-100 text-left inline-block hover:[text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]"
          onClick={onCreateAnAccountClick}
        >
          Create an Account
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
