import { io } from "socket.io-client";

let socket;

const connectSocket = (user_id) => {
  // the socket instance is only generate when we call function connectSocket
  // and bcoz this socket instance takes user_id (for which it is must that the user is logged in)
  socket = io("http://localhost:3003", {
    query: `user_id=${user_id}`,
  });
};

//
export { socket, connectSocket };
