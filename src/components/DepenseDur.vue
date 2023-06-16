<template>
  <div class="depense">
    <div class="left-item">
      <div>
        <span class="label">CATEGORIE</span>
        <span class="value">paid by Florian</span>
      </div>
    </div>
    <div class="right-item">
      <div>
        <span class="label">€ 150</span>
        <span class="value">TODAY</span>
      </div>
    </div>
  </div>
</template>
  
<script>
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
}

.value {
  font-weight: bold;
  margin-top: 4px;
  color: #5c6061;
}
</style>
