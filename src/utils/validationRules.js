export const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const isValidPassword = (pass) => {
  return (
    pass.length >= 8 &&
    pass.toLowerCase() !== pass &&
    pass.toUpperCase() !== pass
  );
};

export const isValidPasswordByRegex = (pass) => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(pass);
};

export const isGenresValid = (genres) => {
  return genres.length >= 3 && genres.length <= 5;
};
