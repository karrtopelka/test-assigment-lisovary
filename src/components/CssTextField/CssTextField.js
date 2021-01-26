import { TextField, withStyles } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#ffc400",
    },
    "& label": {
      color: "#33c9dc",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffc400",
    },
    "& .MuiInputBase-root": {
      color: "#ffc400",
      "&.Mui-focused": {
        color: "#33c9dc",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#33c9dc",
      },
      "&:hover fieldset": {
        borderColor: "#33c9dc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffc400",
      },
      "&.Mui-error fieldset": {
        borderColor: "#f44336",
      },
    },
  },
})(TextField);

export default CssTextField;
