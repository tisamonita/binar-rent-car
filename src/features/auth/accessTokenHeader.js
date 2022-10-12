//for check condition user, login or not
export function getAuthHeader(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.access_token){
        return {Authorization :  `Bearer ${user.access_token}` }
    }
    else{
        return {};
    }
}


