<template>
  <DashboardComponent>
    <!-- Usando slot nomeado -->
    <template v-slot:slot-pages>
      <div class="content-pages">
        <header class="title_pages">
          <p>Inicio</p>
        </header>
      </div>

      <div>
        <div class="row">
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Clientes'"
              :percentage="'7%'"
              :icon="'fa-users'"
              :qtd="'7590'"
            />
          </div>
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Produtos'"
              :percentage="'12%'"
              :icon="'fa-box'"
              :qtd="'350'"
            />
          </div>
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Serviços'"
              :percentage="'3%'"
              :icon="'fa-store'"
              :qtd="'270'"
            />
          </div>
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Relatórios'"
              :percentage="'25%'"
              :icon="'fa-chart-bar'"
              :qtd="'30'"
            />
          </div>
        </div>
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from "../Dashboard/DashboardComponent";
import CardsComponent from "../../components/CardsComponent";

export default {
  name: "HomeComponent",
  components: {
    DashboardComponent,
    CardsComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
