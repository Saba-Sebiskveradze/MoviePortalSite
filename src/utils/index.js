import jwt_decode from "jwt-decode"

export const parseToken = (token) => {
    return jwt_decode(token)
}
export function toggleStorage(token){
    if(token){
        localStorage.setItem('accessToken', token);
    }else{
        localStorage.removeItem("accessToken")
    }
}
export function validateToken(token){
    const data = parseToken(token)
    const currentDate = Date.now() / 1000;
    return currentDate < data.exp;
}