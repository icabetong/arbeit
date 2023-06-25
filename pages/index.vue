<script setup lang="ts">
const { data, refresh } = await useFetch("/api/medicine");

useHead({
  title: "Salk",
});

const medicine = ref({
  name: "",
  quantity: 0,
  unit: "",
  batchNumber: "",
  price: 0,
});
const createNew = async () => {
  await useFetch("/api/medicine/create", {
    method: "POST",
    body: JSON.stringify({ medicine: medicine.value }),
  });
  refresh();
};
</script>

<template>
  <h1>Medicines</h1>
  <ul>
    <li v-for="medicine in data" :key="medicine.medicineId">
      {{ medicine.name }}
    </li>
  </ul>

  <input v-model="medicine.name" type="text" id="name" name="name" />
  <input
    v-model.number="medicine.quantity"
    type="text"
    id="quantity"
    name="quantity" />
  <input v-model="medicine.unit" type="text" id="unit" name="unit" />
  <input
    v-model="medicine.batchNumber"
    type="text"
    id="batchNumber"
    name="batchNumber" />
  <input v-model.number="medicine.price" type="text" id="price" name="price" />
  <button type="button" @click="createNew">Create</button>
</template>
