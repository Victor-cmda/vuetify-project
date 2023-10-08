<template>
  <v-main>
    <v-container>
      <h1>Dashboard</h1>
      <!-- Cards -->
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card flat class="border">
            <v-img
              src="https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              class="align-end text-white">
              <v-card-title>
                Dashboard
              </v-card-title>
            </v-img>
            <v-card-subtitle class="pt-3">
              Dashboard
            </v-card-subtitle>
            <v-card-text>
              <div>
                Lorem Ipsum
              </div>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn variant="tonal" text color="primary">VER MAIS</v-btn>
              <v-btn variant="tonal" text color="warning">VER MAIS</v-btn>
              <v-btn icon="mdi-home" text color="primary"></v-btn>
              <!-- <v-btn prepend-icon="mdi-home" text color="primary">teste</v-btn> -->
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- Tables -->
      <v-card flat class="border mb-4">
        <v-card-title>
          Usuários
        </v-card-title>
        <v-table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Victor</td>
              <td>victor21420@gmail.com</td>
              <td>
                <v-btn icon="mdi-pencil" variant="tonal" color="primary"></v-btn>
              </td>
            </tr>
            <tr>
              <td>Hugo</td>
              <td>hugo21420@gmail.com</td>
              <td>
                <v-btn icon="mdi-pencil" variant="tonal" color="primary"></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>

    </v-container>
  </v-main>
</template>

<script setup>
</script>
