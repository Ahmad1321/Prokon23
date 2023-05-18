import { useCallback } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/forgot-password-2");
  }, [navigate]);

  return (
    <div className="absolute top-[254px] left-[798px] w-[502px] h-[464px] text-center text-5xl text-black font-montserrat">
      <div className="absolute top-[440px] left-[164px] flex flex-col items-center justify-center">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xl font-medium font-inter text-mediumslateblue-100 text-center inline-block hover:text-mediumslateblue-300">
          Create an Account
        </button>
      </div>
      <div className="absolute top-[0px] left-[29px] text-17xl text-left">
        Forgot Your Password?
      </div>
      <div className="absolute top-[61px] left-[29px] text-lg inline-block w-[415px]">{`Just  enter your email address below and we’ll send code verification to reset your password! `}</div>
      <div className="absolute top-[184px] left-[35px] hidden">
        Enter Email Adress....
      </div>
      <div className="absolute top-[280px] left-[35px] text-xl hidden">
        Code Verification....
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[170px] left-[-1px]"
        sx={{ width: 504 }}
        color="primary"
        variant="outlined"
        type="email"
        label="Enter Email Adress"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        required
      />
      <Button
        className="absolute top-[266px] left-[332px]"
        sx={{ width: 171 }}
        variant="contained"
        color="primary"
      >
        Get Code
      </Button>
      <div className="absolute top-[276px] left-[362px] font-semibold text-base-white hidden">
        Get Code
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[266px] left-[-1px]"
        sx={{ width: 320 }}
        color="primary"
        variant="outlined"
        type="text"
        label="Code Verification"
        placeholder="Placeholder"
        size="medium"
        margin="none"
        required
      />
      <button
        className="cursor-pointer [border:none] py-2.5 px-5 bg-royalblue-100 absolute top-[350px] left-[0px] rounded-mini w-[502px] flex flex-row box-border items-center justify-center hover:bg-royalblue-300"
        formMethod="get"
        onClick={onButtonClick}
      >
        <div className="relative text-xl font-medium font-inter text-base-white text-left">
          Reset Password
        </div>
      </button>
    </div>
  );
};

export default ResetPasswordForm;
