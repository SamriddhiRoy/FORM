export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phoneno) {
    errors.email = "phoneno required";
  } else if (Number.test(values.email)) {
    errors.email = "phoneno is invalid";
  }

  if (!values.matrimonalstatus) {
    errors.matrimonalstatus = "matrimonal status required";
  } else if (Text.test(matrimonalstatus)) {
    errors.matrimonalstatus = "matrimonal status is invalid";
  }

  if (!values.typeofemployee) {
    errors.typeofemployee = "type of employee required";
  } else if (Text.test(typeofemployee)) {
    errors.typeofemployee = "type of employee is invalid";
  }

  if (!values.matrimonalstatus) {
    errors.matrimonalstatus = "matrimonalstatus required";
  } else if (Text.test(matrimonalstatus)) {
    errors.matrimonalstatus = "matrimonalstatus is invalid";
  }

  if (!values.coordinateofaddress) {
    errors.coordinateofaddress = "coordinate of address";
  } else if (address.test(coordinateofaddress)) {
    errors.coordinateofaddress = "coordinate of address is invalid";
  }

  if (!values.religion) {
    errors.religion = "religion";
  } else if (Text.test(religion)) {
    errors.religion = "religion is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
