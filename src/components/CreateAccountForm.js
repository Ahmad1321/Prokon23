import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const CreateAccountForm = () => {
  return (
    <form
      className="absolute top-[147px] left-[508px] w-[712px] h-[671px]"
      action="Register"
      method="post"
    >
      <div className="absolute top-[0px] left-[173px] text-17xl font-montserrat text-black text-left">
        Create an Account!
      </div>
      <form
        className="absolute top-[138px] left-[0px] w-[707px] h-[399px]"
        action="Register"
        method="post"
      >
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[40px]">
          <div className="w-[707px] h-[75px] flex flex-row items-start justify-start mix-blend-darken">
            <TextField
              className="[border:none] bg-[transparent] relative"
              sx={{ width: 709 }}
              color="primary"
              variant="outlined"
              type="text"
              name="Name"
              label="Name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
          </div>
          <TextField
            className="[border:none] bg-[transparent] relative"
            sx={{ width: 709 }}
            color="primary"
            variant="outlined"
            type="email"
            label="Email"
            placeholder="Placeholder"
            size="medium"
            margin="none"
            required
          />
          <div className="flex flex-row items-start justify-start gap-[17px]">
            <TextField
              className="[border:none] bg-[transparent] relative"
              sx={{ width: 347 }}
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
              name="pass"
              label="Password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
            <TextField
              className="[border:none] bg-[transparent] relative"
              sx={{ width: 347 }}
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
              name="cpass"
              label="Confirm Password"
              placeholder="Placeholder"
              size="medium"
              margin="none"
              required
            />
          </div>
        </div>
        <div className="absolute top-[26px] left-[32px] text-xl font-light font-roboto text-black text-left hidden">
          Name
        </div>
        <div className="absolute top-[141px] left-[32px] text-xl font-light font-roboto text-black text-left hidden">
          Email Address
        </div>
        <div className="absolute top-[256px] left-[32px] text-xl font-light font-roboto text-black text-left hidden">
          Password
        </div>
        <div className="absolute top-[256px] left-[395px] text-xl font-light font-roboto text-black text-left hidden">
          Confirmation Password
        </div>
        <button className="cursor-pointer [border:none] py-2.5 px-5 bg-royalblue-100 absolute top-[355px] left-[2px] rounded-mini w-[705px] flex flex-row box-border items-center justify-center hover:bg-royalblue-200">
          <div className="relative text-xl font-medium font-inter text-base-white text-left">
            Register Account
          </div>
        </button>
      </form>
      <img
        className="absolute top-[590.5px] left-[2px] w-[710px] h-[3.04px]"
        alt=""
        src="/line-9.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[647px] left-[164px] text-xl font-medium font-inter text-mediumslateblue-100 text-left inline-block opacity-[0.5] mix-blend-normal hover:mix-blend-normal hover:text-mediumslateblue-200">
        Already have an Account? Sign In here!
      </button>
    </form>
  );
};

export default CreateAccountForm;
