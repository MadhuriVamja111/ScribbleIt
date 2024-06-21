import { defineStore } from "pinia";
import { socket } from "@src/socket";
import { ref } from "vue";

export const useConnectionStore = defineStore("connection", () => {
  const isConnected = ref(false);
  const bindEvents = () => {
    socket.on("connect", () => {
      isConnected.value = true;
    });

    socket.on("disconnect", () => {
      isConnected.value = false;
    });
  };
  const connect = () => {
    socket.connect();
  };

  return {
    isConnected,
    bindEvents,
    connect
  };
});