export const jwtUsernameHelper = () => {
    let username = JSON.parse(localStorage.getItem("DeGuzmanStuffAnywhere_Token"));
    return username;
}