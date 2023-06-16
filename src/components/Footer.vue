<template>
  <div class="footer">
    <div class="left-item">
      <div>
        <span class="label">MON TOTAL</span>
        <span class="value">€ 100</span>
      </div>
    </div>
    <div class="right-item">
      <div>
        <span class="label">TOTAL DEPENSES</span>
        <span class="value">€ {{ totalExpenses }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
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
  computed: {
    myTotal() {
      // TODO
    },
    totalExpenses() {
      // Calculate and return the total expenses by summing up the "depense" property of each operation
      return this.operations.reduce((total, operation) => total + operation.depense, 0);
    }
  }
};
</script>
  
<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #363738;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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
  color: #5c6061;
}

.value {
  font-weight: bold;
  margin-top: 4px;
}
</style>
  