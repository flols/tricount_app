<template>
  <div class="depense" v-for="operation in operations" :key="operation._id">
    <div class="left-item">
      <div>
        <span class="label">{{ operation.categorie }}</span>
        <span class="value">payé par {{ operation.utilisateur.prenom }} {{ operation.utilisateur.nom }}</span>
      </div>
    </div>
    <div class="right-item">
      <div>
        <span class="label">€ {{ operation.depense }}</span>
        <span class="value">{{ formatDate(operation.createdAt) }}</span>
      </div>
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
  },
  methods: {
    formatDate(dateString) {
      // Format the date string into a readable format
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
  }
};

</script>
  
<style>
.depense {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.depense-categorie {
  margin-right: 10px;
  font-weight: bold;
}

.depense-auteur {
  margin-bottom: 5px;
}

.depense-montant {
  margin-left: auto;
  font-size: 18px;
  font-weight: bold;
}


.left-item,
.right-item {
  display: flex;
  align-items: center;
}

.left-item div,
.right-item div {
  display: flex;
  flex-direction: column;
}

.label {
  font-weight: bold;
  color: #3493d6;
  font-size: 20px;
}

.value {
  font-weight: bold;
  margin-top: 4px;
  color: #5c6061;
}
</style>