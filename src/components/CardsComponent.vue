<template>
  <div class="my_card">
    <div class="content top">
      <h3>Clientes</h3>
      <p class="percentage"><i class="fa fa-arrow-up"></i> 7%</p>
    </div>
    <div class="content footer">
      <i class="fa fa-users"></i>
      <p class="qtd">9570</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main";

.my_card {
  display: flex;
  flex-direction: column;
  margin-left: 1.5%;
  width: 300px;
  background-color: $purple;
  padding: 15px;
  border-radius: 5%;
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .top {
  }

  .footer {
  }
}
</style>
