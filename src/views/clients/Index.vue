<template>
    <!-- <v-main> -->
    <v-container>

        <v-card flat class="rounded-b-xl elevation-4">

            <div class="d-flex justify-space-between table-title">
                <v-card-title>
                    <h2>Clientes</h2>
                </v-card-title>
                <v-card-title>
                    <v-btn @click="isDialogOpen = true" variant="tonal" color="primary">Adicionar novo</v-btn>
                    <v-dialog width="600px" v-model="isDialogOpen">
                        Adicionar novo
                    </v-dialog>
                </v-card-title>
            </div>

            <v-table fixed-header>
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Calories
                        </th>
                        <th class="text-left actions-column">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
                        <td>
                            <v-menu>
                                <template #activator="{ props }">
                                    <v-btn flat v-bind="props" icon class="mr-2">
                                        <v-icon icon="mdi-dots-vertical"></v-icon>
                                    </v-btn>
                                </template>
                                <v-card min-width="150px">
                                    <v-list lines="false" nav>
                                        <v-list-item prepend-icon="mdi-pencil" to="/" color="info">
                                            <v-list-item-title>Editar</v-list-item-title>
                                        </v-list-item>
                                        <v-list-item prepend-icon="mdi-cog-outline" to="/" color="error">
                                            <v-list-item-title>Excluir</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </v-menu>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-card>

    </v-container>
    <!-- </v-main> -->
</template>
  
<script>
import { ref } from 'vue'
const isDialogOpen = ref(false)

export default {
    data() {
        return {
            isDialogOpen: false,
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                },
                {
                    name: 'Frozen Yogurt',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                },
            ],
        }

    },
}

</script>
  
<style>
html,
body,
#app,
.v-application,
.v-application--wrap {
    height: 100%;
    margin: 0;
}

.v-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.v-card {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.v-table {
    /* flex: 1; */
    /* overflow: auto; */
    max-height: 78vh;
    overflow-y: auto;
}

.table-title {
    padding: 20px;
}

.actions-column {
    width: 8%;
}</style>