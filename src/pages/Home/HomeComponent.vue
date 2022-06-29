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

      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-md-6">
            <lists-component :usersss="users" />
          </div>
        </div>
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
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
      users: [],
    };
  },
  /* hook(ciclo de vida) "mounted" */
  mounted() {
    this.getUsers();
  },
  methods: {
    /* Assíncrono "await", somente com função asyncrona "async"
       Espera por completo até terminar a busca na API feita pelo
       cliente http axios, e somente depois continua */
    async getUsers() {
      /* url da API */
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      if (response.status == 200) {
        this.users = response.data;
      } else {
        console.error("Ocorreu um êrro na API");
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
