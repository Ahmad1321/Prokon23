import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

const CreateNewPasswordForm = () => {
  return (
    <form
      className="absolute top-[254px] left-[798px] w-[505px] h-[394px]"
      action="newpass"
      method="post"
    >
      <div className="absolute top-[0px] left-[46px] w-[415px] h-[85px]">
        <div className="absolute top-[0px] left-[11px] text-17xl font-montserrat text-black text-left">
          Create New Password
        </div>
        <div className="absolute top-[61px] left-[0px] text-xl font-montserrat text-black text-center inline-block w-[415px]">
          Please enter your new password below!
        </div>
      </div>
      <div className="absolute top-[139px] left-[3px] flex flex-col items-start justify-start gap-[20px]">
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
          label="New Password"
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
          type="text"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <Icon>visibility</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
          label="Confirm New Password"
          placeholder="Placeholder"
          size="medium"
          margin="none"
          required
        />
      </div>
      <button
        className="cursor-pointer [border:none] py-2.5 px-5 bg-royalblue-100 absolute top-[350px] left-[0px] rounded-mini w-[502px] flex flex-row box-border items-center justify-center hover:bg-royalblue-300 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
        formMethod="get"
      >
        <div className="relative text-xl font-medium font-inter text-base-white text-left">
          Login
        </div>
      </button>
      <div className="absolute top-[295px] left-[3px] flex flex-row items-center justify-center gap-[20px]">
        <input
          className="cursor-pointer relative rounded-mini bg-gray box-border w-[30px] h-[30px] border-[1px] border-solid border-black"
          type="checkbox"
        />
        <div className="relative text-xl font-montserrat text-black text-left">
          Remember Me
        </div>
      </div>
    </form>
  );
};

export default CreateNewPasswordForm;
