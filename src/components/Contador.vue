<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';

let contador = ref(0);

const incrementar = () => {
  contador.value++;
}
const disminuir = () => {
  contador.value--;
};
</script>


<template>
  <div class="container centrar">
    <br><br><br>
    <h3>Contador: {{ contador }}</h3>
    <br>
    <div>
      <button class="btn btn-primary incrementar" v-on:click="incrementar">Incrementar</button>
      <button class="btn btn-warning disminuir" v-on:click="disminuir">Disminuir</button>
    </div>
  </div>
</template>


<style>
.incrementar {
  font-size: larger;
  font-weight: bold;
  margin-right: 20px;
}

.disminuir {
  font-size: larger;
  font-weight: bold;
  width: 150px;
}

.centrar {
  align-items: center;
  text-align: center;
}
</style>