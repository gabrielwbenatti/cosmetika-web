<script setup>
import thirdiesService from "@/services/thirdiesService";
import { onBeforeMount, ref } from "vue";
import ThirdyForm from "./components/ThirdyForm.vue";

const props = defineProps({ id: String });
const thirdy = ref({});

onBeforeMount(async () => {
    const response = await thirdiesService.getById(props.id);
    if (response.status === 200) thirdy.value = response.data;
});
</script>

<template>
    <ThirdyForm :isEditMode="true" :initialData="thirdy" />
</template>
