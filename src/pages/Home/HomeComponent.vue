<template>
  <DashboardComponent>
    <!-- Usando slot nomeado -->
    <template v-slot:slot-pages>
      <div class="content-pages">
        <header class="title_pages">
          <p>Inicio</p>
        </header>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Clientes'"
              :percentage="'7%'"
              :icon="'fa-users'"
              :qtd="clients.length"
            />
          </div>
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Produtos'"
              :percentage="'12%'"
              :icon="'fa-box'"
              :qtd="products.length"
            />
          </div>
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Serviços'"
              :percentage="'3%'"
              :icon="'fa-store'"
              :qtd="270"
            />
          </div>
          <div class="col-12 col-md-3">
            <CardsComponent
              :type="'Relatórios'"
              :percentage="'25%'"
              :icon="'fa-chart-bar'"
              :qtd="30"
            />
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <!--  <lists-component :dataaa="users" :descriptionnn="'Clientes'" /> -->
            <!-- ou assim, sem o v-bind(:) , porquê neste caso, está enviando apenas uma string -->
            <lists-component
              :dataaa="clients"
              descriptionnn="Clientes"
              :columnsss="['Nome', 'E-mail']"
            />
          </div>
          <div class="col-12 col-md-6">
            <!-- <lists-component :dataaa="users" :descriptionnn="'Produtos'" -->
            <!-- ou assim, sem o v-bind(:), porque neste caso, está enviando apenas uma string -->
            <lists-component
              :dataaa="products"
              descriptionnn="Produtos"
              :columnsss="['Nome', 'Valor']"
            />
          </div>
        </div>
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
/* eslint-disable */
import DashboardComponent from "../Dashboard/DashboardComponent";
import CardsComponent from "../../components/CardsComponent";
import ListsComponent from "../../components/ListsComponent";
/* axios tava dando êrro porque estava faltando este import */
import axios from "axios";

export default {
  name: "HomeComponent",
  /* data(){}: Estado "local" do componente.
     Guardando as variáveis que poderão ser
     usadas, dentro deste componente
     Retorna uma lista de objetos */
  data() {
    return {
      /* Um objeto array */
      clients: [],
      products: [],
    };
  },
  /* hook(ciclo de vida) "mounted" */
  mounted() {
    this.getData();
  },
  methods: {
    /* Assíncrono "await", somente com função asyncrona "async"
       Espera por completo até terminar a busca na API feita pelo
       cliente http axios, e somente depois continua */
    async getData() {
      /* Somente a barra, porque para esta API (local)
         foi criada uma URL padrão, em main.js */
      try {
        let response = await axios.get("/");

        this.clients = response.data.clienttts;
        this.products = response.data.producttts;
      } catch (error) {
        console.error("Ocorreu um erro: status", error.response.status);
      }
    },
  },
  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
