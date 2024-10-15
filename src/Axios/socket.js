// socket.js
import io from "socket.io-client";

let socket;

export const getSocket = () => {
  if (!socket) {
    socket = io("https://backend.butterfly.hurairaconsultancy.com", {
      withCredentials: true,
    });
  }
  return socket;
};
