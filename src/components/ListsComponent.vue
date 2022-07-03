<template>
  <div class="lists">
    <div class="top">
      <p>
        <strong>{{ descriptionnn }}</strong>
      
        <span> - {{ dataaa.length }}</span>
      </p>
    </div>

    <div class="content">
      <table class="table table-striped my_table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ columnsss[0] }}</th>
            <th scope="col">{{ columnsss[1] }}</th>
            <!-- <th scope="col">Telefone</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataaa" :key="item.id">
            <th scope="row">
              <p class="users">
                {{ item.id }}
              </p>
            </th>
            <td>
              <p class="users">
                {{ item.name }}
              </p>
            </td>
            <td>
              <p class="users">
                {{ descriptionnn == "Clientes" ? item.email : item.value }}
              </p>
            </td>
            <!--  <td>
              <p class="users">
                {{ user.phone }}
              </p>
            </td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsComponent",
  props: {
    dataaa: Array,
    descriptionnn: String,
    /* Um array */
    columnsss: {},
  },
};
</script>

<style lang="scss" scoped>
.lists {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;

  .users {
    font-size: 12px;
  }
}
</style>
