import * as yup from "yup";

export const registrationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(6, "Name is too short - should be 6 chars minimum."),
  email: yup.string().required("Email is required").email(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*\d).{8,15}$/,
      "Password must be between 4 and 8 digits long and include at least one numeric digit"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
