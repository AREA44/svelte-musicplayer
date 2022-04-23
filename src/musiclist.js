import {writable} from "svelte/store";

export const musicList = writable([
  {
    "name": "Martin Garrix - Oops",
    "audio": "Oops.mp3",
    "image": "Oops.jpg",
    "artist": "Martin Garrix"
  },
  {
    "name": "Avicii - Heaven",
    "audio": "Heaven.mp3",
    "image": "Heaven.jpg",
    "artist": "Avicii"
  }
]);