export const jwtHelper = () => {
    let token = localStorage.getItem("DeGuzmanStuffAnywhere_Token");
    return token;
}