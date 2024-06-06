const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json()); //it will provide a parser which will help us to parse the data stream which we receive from client
app.use("/api/contacts", require("./routes/contactRoutes")); //middleware
app.use("/api/users", require("./routes/userRoutes")); //middleware
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//22:33
