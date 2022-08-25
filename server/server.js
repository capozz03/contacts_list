const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

const server = jsonServer.create();
const router = jsonServer.router('../db.json')
const userdb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = "72676376";

const expiresIn = "1h";

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn
  });
}

function isLoginAuthenticated({
  email,
  password
}) {

  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}


server.post("/api/auth/login", (req, res) => {
  const {
    email,
    password
  } = req.body;

  if (!isLoginAuthenticated({
      email,
      password
    })) {
    const status = 401;
    const message = "Incorrect Email or Password";
    res.status(status).json({
      status,
      message
    });
    return;
  }
  const access_token = createToken({
    email,
    password
  });
  res.status(200).json({
    access_token
  });
});

server.use(router)

server.listen(3001, () => {
  console.log("Running fake api json server");
});