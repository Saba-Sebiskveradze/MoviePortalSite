import actions from "./appActions"

export const signInUser = (payload) => {
    return{
        type: actions.signInUser,
        payload,
    }
};
export const signOutUser = () =>{
    return{
        type: actions.signOutUser,
    }
}
