import { ref, computed } from "vue";
import { defineStore } from "pinia";
import juegosData from "../data/juegos.json";

export const useJuegosStore = defineStore("juegos", () => {
  const juegos = ref(juegosData);
  const incrementar = (index) => {
    //index === id en juegos.json
    juegos.value[index].stock++;
  };
  const decrementar = (index) => {
    //index === id en juegos.json
    if (juegos.value[index].stock > 0) {
      juegos.value[index].stock--;
    }
  };

  return { juegos, decrementar, incrementar };
});
