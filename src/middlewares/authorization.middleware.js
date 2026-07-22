export const hasRole = role => (req, res, next) => {
    req.principal.roles.includes(role.toUpperCase().trim())
        ? next() : res.status(403).send({message: 'Access denied'});
}

export const isLogin = () => (req, res, next) => {
    req.principal.username === req.params.user
        ? next() : res.status(403).send({message: 'Access denied'});
}

export const isLoginOrAdmin = () => (req, res, next) => {
    req.principal.username === req.params.user || req.principal.roles.includes('ADMIN')
        ? next() : res.status(403).send({message: 'Access denied'});
}