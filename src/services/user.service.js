function saveUser(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

function getToken() {
    return localStorage.getItem('token');
}

module.exports = {
    saveUser,
    getUser,
    getToken,
};