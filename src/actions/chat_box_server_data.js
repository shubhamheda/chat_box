function serverLoginData() {
    return {
        type: 'LOGIN',
        payload: {
            info: "Login Page"
        }
    }
}

function serverSignupData() {
    return {
        type: 'SIGNUP',
        payload: {
            info: "Signup Data"
        }
    }
}

export {serverLoginData, serverSignupData};