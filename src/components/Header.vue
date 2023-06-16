<template>
  <div class="header">
    <div class="title">Tricount</div>
    <div class="user-names">
      <span v-for="(operation, index) in operations" :key="operation._id">
        {{ operation.utilisateur.prenom }}
        <span v-if="index !== operations.length - 1">, </span>
      </span>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "Depense",
  data() {
    return {
      operations: []
    };
  },
  async created() {
    try {
      // Fetch operations data from the server
      const res = await axios.get("http://localhost:3000/operations");
      this.operations = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};

</script>
  
<style>
.header {
  background-color: #3493d6;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  color: white;
  ;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.user-names {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
  