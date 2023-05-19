

const validate= () => {
  const errors = {};
    if (!val.user) {
      errors.user = "Missing enter name";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.user)) {
      setErrors(...errors, errors.user, "The user must only have 4-16 digits and can only contain letters, numbers and underscores.")}

    if (!val.email) {
      errors.email = "Missing enter Email";
    } else if (
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        val.email)){ errors.email = "The email format is invalid"}

    if (!val.password) {errors.password = "Missing enter Password";
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(val.password)
    ) {errors.password = "-The string must contain at least 1 lowercase alphabetical character, 1 lowercase alphabetical character, 1 uppercase alphabetical character, 1 numeric character, The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict and The string must be eight characters or longer";
    }

    if (!val.fullname) {
      errors.name = "Missing enter Email";
    } else if (
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(val.email)
    ) { errors.fullname = "The email format is invalid"}

    if (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g.test(val.number)) {
      errors.number = "It is not a valid number";
    }

    if (!val.date) {
      errors.date = "Missing enter Date";
    } else if ( /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(val.date)
    ) { errors.date = "The date format is invalid";

    }else if(/^(1[89]|[2-9]\d)$/gm.test(val.date)){ errors.date = "You are under 18 years of age"}

    if (val.tac === false) {
      errors.tac = "Accept terms and conditions";
    }

    if (!val.price) {
      errors.price = "Missing enter Price$$";
    }
    return errors
  }
  

