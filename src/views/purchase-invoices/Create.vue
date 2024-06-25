<script setup>
import router from "@/router";
import purchaseInvoicesService from "@/services/purchaseInvoicesService";
import thirdiesService from "@/services/thirdiesService";
import { onMounted, ref } from "vue";

import AutoComplete from "primevue/autocomplete";
import DatePicker from "primevue/datepicker";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";

const suppliers = ref([]);
const filteredSuppliers = ref([]);
const invoice = ref({});

const search = (event) => {
    if (event.query.trim() === "") {
        filteredSuppliers.value = suppliers.value;
    } else {
        filteredSuppliers.value = suppliers.value.filter((supplier) => {
            return supplier.name
                .toLowerCase()
                .includes(event.query.toLowerCase());
        });
    }
};

onMounted(async () => {
    const response = await thirdiesService.getAllThirdies({ isSupplier: true });
    if (response.status === 200) {
        suppliers.value = response.data;
    }
});

async function save() {
    const storeResponse = await purchaseInvoicesService.store(invoice.value);
    if (storeResponse.status === 201) router.push("/thirdies");
}
</script>

<template>
    <div class="card">
        <label for="supplier">Fornecedor</label>
        <AutoComplete
            v-model="invoice.supplier"
            :inputId="'supplier'"
            :suggestions="filteredSuppliers"
            :option-label="'name'"
            @complete="search"
        />

        <label for="issuanceDate">Data de Emissão</label>
        <DatePicker
            v-model="invoice.issuanceDate"
            :inputId="'issuanceDate'"
            :date-format="'dd/mm/yy'"
            :showOnFocus="false"
        />

        <label for="entryDate">Data de Entrada</label>
        <DatePicker
            v-model="invoice.entryDate"
            :inputId="'entryDate'"
            :date-format="'dd/mm/yy'"
            :showOnFocus="false"
        />

        <label for="totalAmount">Valor total</label>
        <InputNumber
            v-model="invoice.totalAmount"
            :inputId="'totalAmount'"
            :minFractionDigits="2"
            :maxFractionDigits="2"
        />

        <Button @click="save">Salvar</Button>
    </div>
</template>

<style scoped>
.tst {
    max-width: 100%;
}
</style>
