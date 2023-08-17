
const FIXed = 'https://development.esaral.com'


export const BACKEND_URLS = {
    OTP_SENDER: `${FIXed}/v1/users/phone-verification`,
    USER_DATA_PROVIDER:  `${FIXed}/v1/users/`,
    USER_DATA: `${FIXed}/v2/users/home`,
    SUBJECT_DATA_API: `${FIXed}/v2/contents/get-node-content-tree`,
    VIDEO_OTP: `${FIXed}/v2/contents/get-video-otp`,
    SET_NAME:`${FIXed}/v2/users/update-profile`,
    GET_ALL_TARGETS:`${FIXed}/v1/users/targets`,
    NEW_ENROLLMENTS:`${FIXed}/v2/users/enroll`,
    SEARCH_API :`${FIXed}/v2/contents/search`
}

export const FRONTEND_URLS = {
    LOGIN_ROUTE: '/login',
    HOME_ROUTE:'/',
    REGISTER_ROUTE:'/Register',
    SEARCH_ROUTE:'/search',
    ENROLLMENTS:'/enrollment',
    MY_ACCOUNT: '/my-account',
    COURSES: '/courses',
    MENTORSHIP: '/mentorship',
    DOUBUT_SOLVE: '/doubut-solve',
    HELP_AND_SUPPORT: '/help-and-support',
    PAGE_NOT_FOUND: '/PageNotFound',
}

