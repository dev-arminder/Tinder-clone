const app = require("./app");
const mongoose = require("mongoose");

// Running up server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});

//Handling UNHandle Error Message { Wrong Password For MongoDB DataBAse } - Globally with Error Events
//
process.on("uncaughtException", err => {
  console.log("Unhadle Rejection * Shutting Down");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
