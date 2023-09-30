const express = require("express");
const app = express();
// const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const jobRoute = require("./routes/job");
const bookMarkRoute = require("./routes/bookmark");
const chatRoute = require("./routes/chat");
const messageRoute = require("./routes/message");
const bodyParser = require("body-parser");

dotenv.config();
//process.env.VARIABLE_NAME

mongoose
  .connect(process.env.MONGU_URL)
  .then(() => console.log("db conected"))
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res) => res.send("Welcome Ravi!"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/", authRoute);
// app.use("/api/users", userRoute);
app.use("/api/users/", userRoute);
app.use("/api/jobs", jobRoute);
app.use("/api/bookmarks/", bookMarkRoute);
app.use("/api/chat/", chatRoute);
app.use("/api/messages/", messageRoute);
// app.listen("/api", authRoute);
// localhost:5001/api/register

const server = app.listen(
  process.env.PORT || 5002,
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    //localhost
    // origin:"http:localhost:5001"
    origin: "https://jobhubbackend-production-4c91.up.railway.app/",
  },
});

io.on("connection", (socket) => {
  console.log("connected to sockets");

  socket.on("setup", (userId) => {
    socket.join(userId);
    socket.broadcast.emit("online-user", userId);
    console.log(userId);
  });

  socket.on("typing", (room) => {
    console.log("typing");
    console.log("room");
    socket.to(room).emit("typing", room);
  });

  socket.on("stop typing", (room) => {
    console.log("stop typing");
    console.log("room");
    socket.to(room).emit("stop typing", room);
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined : " + room);
  });

  socket.on("new message", (newMessageRecevied) => {
    var chat = newMessageRecevied.chat;
    var room = chat._id;

    var sender = newMessageRecevied.sender;

    if (!sender || sender._id) {
      console.log("Sender not defined");
      return;
    }

    var senderId = sender._id;
    console.log(senderId + "message sender");
    const users = chat.users;

    if (!users) {
      console.log(" User not defined ");
      return;
    }

    socket.to(room).emit("message recevied", newMessageRecevied);
    socket.to(room).emit("message sent", "New Message");
  });

  socket.off("setup", () => {
    console.log("user offline");
    socket.leave(userId);
  });
});
