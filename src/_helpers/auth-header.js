export function authHeader() {
    // return authorization header with jwt token
    // let jwt = JSON.parse(sessionStorage.getItem('jwt'));
    let jwt = sessionStorage.getItem('jwt');
    if (jwt) {
        //return { 'Authorization': 'Bearer ' + jwt.jwt };
        return { 'jwt': jwt };
    } else {
        return {};
    }
}