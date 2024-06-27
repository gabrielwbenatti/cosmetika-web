<script setup>
import router from "@/router";
import purchaseInvoicesService from "@/services/purchaseInvoicesService";
import thirdiesService from "@/services/thirdiesService";
import { onMounted, ref } from "vue";

import AutoComplete from "primevue/autocomplete";
import DatePicker from "primevue/datepicker";
import InputNumber from "primevue/inputnumber";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";

const suppliers = ref([]);
const filteredSuppliers = ref([]);
const invoice = ref({});
const toast = useToast();

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
    if (response.status === 200) suppliers.value = response.data;
});

async function save() {
    const storeResponse = await purchaseInvoicesService.store(invoice.value);
    if (storeResponse.status === 201) {
        toast.add({
            severity: "success",
            summary: "Success Message",
            detail: "Message Content",
            life: 3000,
        });
        router.push("/thirdies");
    }
}
</script>

<template>
    <div>
        <div class="labeled__input">
            <label for="supplier">Fornecedor</label>
            <AutoComplete
                v-model="invoice.supplier"
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
                v-model="invoice.issuanceDate"
                :inputId="'issuanceDate'"
                :date-format="'dd/mm/yy'"
                showIcon
                :showOnFocus="false"
            />
        </div>

        <div class="labeled__input">
            <label for="entryDate">Data de Entrada</label>
            <DatePicker
                v-model="invoice.entryDate"
                :inputId="'entryDate'"
                :date-format="'dd/mm/yy'"
                showIcon
                :showOnFocus="false"
            />
        </div>

        <div class="labeled__input">
            <label for="totalAmount">Valor total</label>
            <InputNumber
                v-model="invoice.totalAmount"
                :inputId="'totalAmount'"
                :locale="'pt-BR'"
                :prefix="'R$ '"
                :minFractionDigits="2"
                :maxFractionDigits="2"
            />
        </div>

        <Button @click="save">Salvar</Button>
    </div>
</template>

<style scoped></style>
