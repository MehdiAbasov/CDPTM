export const allowRoles =
    (...roles) =>
        (req, res, next) => {

            if (!roles.includes(req.user.role)) {

                const err = new Error(
                    "Access denied"
                );

                err.statusCode = 403;
                throw err;
            }
            next();
        };