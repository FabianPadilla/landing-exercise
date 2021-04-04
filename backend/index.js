const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongo = require("mongoose");

const user = require("./routes/user");
const auth = require("./routes/auth");

app.use(express.json());
app.use("/api/users/", user);
app.use("/api/auth/", auth);

/* ----------- Middlewares ----------- */

app.get("/", function (req, res) {
  res.send("Hola Mundo");
});

app.listen(port, () => console.log("listening the port 3001"));

mongo
  .connect(
    "mongodb+srv://fpadilla:nqyLfddIirKmXfJY@cluster0.3mqhf.mongodb.net/landing_exercise_db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Conectado a la DB landing_exercise_db"))
  .catch((err) => {
    console.log(err.message);
  });
