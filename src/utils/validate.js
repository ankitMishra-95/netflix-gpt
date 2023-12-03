export const checkValidData = (email, password, name) => {

    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    if(!name && name !== undefined) return "Please enter your full name"
    if(!isEmailValid) return "Email Is Not Valid";
    if(!isPasswordValid) return "Password Is Not Valid";

    return null;

}