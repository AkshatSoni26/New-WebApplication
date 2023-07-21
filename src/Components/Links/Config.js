const FIXed = 'https://development.esaral.com'


export const BACKEND_URLS = {
    OTP_SENDER: `${FIXed}/v1/users/phone-verification`,
    USER_DATA_PROVIDER:  `${FIXed}/v1/users/`,
    USER_DATA: `${FIXed}/v2/users/home`,
    SUBJECT_DATA_API: `${FIXed}/v2/contents/get-node-content-tree`,
    VIDEO_OTP: `${FIXed}/v2/contents/get-video-otp`
}

export const FRONTEND_URLS = {
    LOGIN_ROUTE: '/login',
    HOME_ROUTE:'/',
    REGISTER_ROUTE:'/Register'
}