require("dotenv").config();
const express = require("express");
const connection = require("./model/db");
const {User, validate} = require("./model/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const ejs = require("ejs");
const HTML_TEMPLATE = require("./utils/mail-template");
const sendMail = require("./utils/main");
const port = process.env.PORT;
const app = express();

const startConnection = async () => {
  await connection();
};
startConnection();

app.set("view engine", "ejs");
app.use(express.json());

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

      const mailInfo = {
        from: process.env.EMAIL,
        to: email,
        subject: "Email verification",
        html: HTML_TEMPLATE({oid: 1, item: 'TV', price: '100,000XAF', telephone: '6381319842', date:'mm/dd/yy', payMethod:'MOMO'}),
      };
      
      await sendMail(mailInfo, (info) => {
        console.log(`The mail has been sent 😃`);
      });
  });

app.listen(port, () => console.log(`Server is Live: ${process.env.BASE_URL}`));
