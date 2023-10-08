<template>
    <v-main>
        <v-container>

            <v-card flat class="border pa-4 rounded-b-xl elevation-10">

                <div class="d-flex justify-space-between">
                    <v-card-title>
                        <h3>Clientes</h3>
                    </v-card-title>
                    <v-card-title>
                        
                        <v-btn @click="isDialogOpen = true" variant="tonal">text</v-btn>
                        <v-dialog width="600px" v-model="isDialogOpen">
                            teste
                        </v-dialog>
                    </v-card-title>
                </div>

                <v-table fixed-header height="700px">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Calories
                            </th>
                            <th class="text-left">
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
    </v-main>
</template>
  
<script>
import { ref } from 'vue'
const isDialogOpen = ref(false)

export default {
    data() {
        return {
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
  