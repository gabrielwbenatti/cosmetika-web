<script setup>
import { useRouter } from "vue-router";
import Button from "primevue/button";

const props = defineProps({
    mainRoute: { type: String, required: true },
});

const emits = defineEmits(["onSubmit"]);
const router = useRouter();

const onCancel = () => router.push(`/${props.mainRoute}`);
</script>

<template>
    <form action="">
        <slot> </slot>

        <Button>Salvar</Button>

        <button type="button" v-on:click="emits('onSubmit')">Salvar</button>
        <button type="button" @click="onCancel">Cancelar</button>
    </form>
</template>
