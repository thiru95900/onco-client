// write all helper functions here
export const isAuthenticated = () =>{
    const isAuth = sessionStorage.getItem('userEmail');
    return isAuth ? true : false
};

export const getSessionStorageData = () => {
    const loggedUserEmail = sessionStorage.getItem('userEmail');
    return loggedUserEmail;
}