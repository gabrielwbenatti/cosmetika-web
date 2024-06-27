<script setup>
import Checkbox from "primevue/checkbox";

import BaseForm from "@/components/shared/BaseForm.vue";

const emits = defineEmits(["onSubmit"]);

const props = defineProps({
    initialData: { type: Object, default: () => ({}) },
    isEditMode: { type: Boolean, default: false },
});
</script>

<template>
    <BaseForm :mainRoute="'products'" @onSubmit="emits('onSubmit')">
        <div class="labeled__input">
            <label for="reference" class="labeled__input-label"
                >Referência</label
            >
            <input
                type="text"
                name="reference"
                id="reference"
                autocomplete="off"
                v-model="props.initialData.reference"
                class="labeled__input-input"
            />
        </div>

        <div class="labeled__input">
            <label for="name" class="labeled__input-label">Nome</label>
            <input
                type="text"
                name="name"
                id="name"
                autocomplete="off"
                v-model="props.initialData.name"
                class="labeled__input-input"
            />
        </div>

        <div class="labeled__input">
            <label for="nameAlias" class="labeled__input-label"
                >Nome Apelido</label
            >
            <input
                type="text"
                name="nameAlias"
                id="nameAlias"
                autocomplete="off"
                v-model="props.initialData.nameAlias"
                class="labeled__input-input"
            />
        </div>

        <div>
            <Checkbox
                v-model="props.initialData.status"
                :inputId="'status'"
                :binary="true"
            />
            <label for="status">Status</label>
        </div>

        <div>
            <Checkbox
                v-model="props.initialData.toSell"
                :inputId="'toSell'"
                :binary="true"
            />
            <label for="toSell">Para Vender</label>
        </div>

        <div>
            <Checkbox
                v-model="props.initialData.toBuy"
                :inputId="'toBuy'"
                :binary="true"
            />
            <label for="toBuy">Para Comprar</label>
        </div>
    </BaseForm>
</template>

<style scoped>
.checkbox {
    margin-right: 0.3em;
}
</style>
