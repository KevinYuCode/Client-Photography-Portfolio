export const ifttt_message = (name, email, message) => {
  const IFTTT_URL = "";
};

/**
 * 
 * @param {String} name makes sure the name length isn't greater than 30 characters
 * @returns boolean whether name is within proper length
 */
export const validateName = (name) => {
  return name.length <= 30;
};

/**
 * 
 * @param {String} email makes sure the email is a valid format and isn't super long
 * @returns object of whether email is valid length and right format
 */
export const validateEmail = (email) => {
  const status = { validLength: true, validSyntax: true };
  // const validEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  if (email.length > 35) status.validLength = false;
  // if (!validEmail.test(email)) status.validSyntax = false;
  return status;
};

/**
 * 
 * @param {String} message 
 * @returns boolean of whether the message is within proper length
 */
export const validateMessage = (message) => {
  return message.length <= 2000;
};
