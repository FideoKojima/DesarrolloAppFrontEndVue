<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';

const texto = ref("");
/*const props = defineProps({
    mensaje: {
        type: String,
        required: true
    }
});*/
const emit = defineEmits(['recibe-mensaje'])

const enviarPadre = () => {
    emit('recibe-mensaje', texto.value);
};
</script>

<template>
    <div class="container">
        <h3>Componente hijo</h3>
        <br>
        <div>
            <input class="ingreso" type="text" value="mensaje" v-model="texto">
            <button type="button" class="btn btn-primary" @click="enviarPadre">Send
                Message to Parent</button>
        </div>

    </div>
</template>


<style>
.ingreso {
    margin-right: 20px;
}
</style>