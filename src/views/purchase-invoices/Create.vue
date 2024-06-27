<script setup>
import router from "@/router";
import purchaseInvoicesService from "@/services/purchaseInvoicesService";
import { onMounted, ref } from "vue";

import PurchInvForm from "./components/PurchInvForm.vue";
import thirdiesService from "@/services/thirdiesService";

const invoice = ref({});
const suppliers = ref([]);

onMounted(async () => {
    const response = await thirdiesService.getAllThirdies({ isSupplier: true });
    if (response.status === 200) suppliers.value = response.data;
});

async function save() {
    const storeResponse = await purchaseInvoicesService.store(invoice.value);
    if (storeResponse.status === 201) {
        router.push("/thirdies");
    }
}
</script>

<template>
    <PurchInvForm
        :isEditMode="false"
        :initialData="invoice"
        :suppliersData="suppliers"
        @onSubmit="save"
    />
</template>

<style scoped></style>
