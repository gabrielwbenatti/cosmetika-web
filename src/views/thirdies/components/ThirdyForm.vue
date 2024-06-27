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
    <BaseForm :mainRoute="'thirdies'" @onSubmit="emits('onSubmit')">
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
                >Razão Social</label
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

        <div class="labeled__input">
            <label for="document" class="labeled__input-label">CPF/CNPJ</label>
            <input
                type="text"
                name="document"
                id="document"
                autocomplete="off"
                v-model="props.initialData.document"
                class="labeled__input-input"
            />
        </div>

        <div>
            <Checkbox
                v-model="props.initialData.isSupplier"
                :inputId="'isSupplier'"
                :binary="true"
            />
            <label for="isSupplier">É Fornecedor</label>
        </div>
    </BaseForm>
</template>
