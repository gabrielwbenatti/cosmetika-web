<script setup>
import AutoComplete from "primevue/autocomplete";
import DatePicker from "primevue/datepicker";
import InputNumber from "primevue/inputnumber";

import BaseForm from "@/components/shared/BaseForm.vue";
import { ref } from "vue";

const emits = defineEmits(["onSubmit"]);
const filteredSuppliers = ref([]);

const props = defineProps({
    initialData: { type: Object, default: () => ({}) },
    isEditMode: { type: Boolean, default: false },
    suppliersData: { type: Array, default: () => [] },
});

const search = (event) => {
    if (event.query.trim() === "") {
        filteredSuppliers.value = props.suppliersData.value;
    } else {
        filteredSuppliers.value = props.suppliersData.filter((supplier) => {
            return supplier.name
                .toLowerCase()
                .includes(event.query.toLowerCase());
        });
    }
};
</script>

<template>
    <BaseForm :mainRoute="'/purchase-invoices'" @onSubmit="emits('onSubmit')">
        <div class="labeled__input">
            <label for="supplier">Fornecedor</label>
            <AutoComplete
                v-model="props.initialData.supplier"
                :inputId="'supplier'"
                :suggestions="filteredSuppliers"
                :option-label="'name'"
                dropdown
                @complete="search"
            />
        </div>

        <div class="labeled__input">
            <label for="issuanceDate">Data de Emissão</label>
            <DatePicker
                v-model="props.initialData.issuanceDate"
                :inputId="'issuanceDate'"
                :date-format="'dd/mm/yy'"
                showIcon
                :showOnFocus="false"
            />
        </div>

        <div class="labeled__input">
            <label for="entryDate">Data de Entrada</label>
            <DatePicker
                v-model="props.initialData.entryDate"
                :inputId="'entryDate'"
                :date-format="'dd/mm/yy'"
                showIcon
                :showOnFocus="false"
            />
        </div>

        <div class="labeled__input">
            <label for="totalAmount">Valor total</label>
            <InputNumber
                v-model="props.initialData.totalAmount"
                :inputId="'totalAmount'"
                :locale="'pt-BR'"
                :prefix="'R$ '"
                :minFractionDigits="2"
                :maxFractionDigits="2"
            />
        </div>
    </BaseForm>
</template>
