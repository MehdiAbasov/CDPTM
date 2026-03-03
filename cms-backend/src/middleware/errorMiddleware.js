export const errorHandler =
  (err, req, res, next) => {

    console.log("ERROR STACK:", err);

    res.status(500).json({

      success: false,

      message:
        err.message ||
        "Internal Server Error",

      stack: err.stack

    });

  };