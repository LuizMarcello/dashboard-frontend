<template>
  <DashboardComponent>
    <!-- Usando slot nomeado -->
    <template v-slot:slot-pages>
      <div class="content-pages">
        <header class="title_pages">
          <p>Produtos</p>
        </header>
      </div>
      <div>
        <CardsComponent />
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";
import CardsComponent from "../../components/CardsComponent";

export default {
  name: "ProductsComponent",
  components: {
    DashboardComponent,
    CardsComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
