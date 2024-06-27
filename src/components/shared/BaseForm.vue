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

        <Button :type="'button'" @click="emits('onSubmit')">Salvar</Button>
        <Button :type="'button'" @click="onCancel">Cancelar</Button>
    </form>
</template>
