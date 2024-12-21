<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import Child from '@/components/Child.vue';

const mensajeAlPadre = ref("");

const recibe = (texto) => {
    mensajeAlPadre.value = texto;
    texto = "";
};

</script>

<template>
    <main class="container centrar">
        <br><br><br><br>
        <h1>{{ mensajeAlPadre }}</h1>
        <br>
        <p>Mensaje recibido desde el hijo.</p>
        <Child :mensaje="mensaje" @recibe-mensaje="recibe" />

    </main>
</template>

<style scope>
.centrar {
    align-items: center;
    text-align: center;
}
</style>