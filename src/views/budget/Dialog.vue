<!-- Dialog.vue -->
<template>
  <v-dialog v-model="isOpen" fullscreen transition="dialog-bottom-transition">
    <v-card>

      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ mode === 'add' ? 'Adicionar Orçamento' : 'Editar Cliente' }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" @click="save">
            Salvar
          </v-btn>
        </v-toolbar-items>
        <template v-slot:extension>
          <v-tabs v-model="activeTab">
            <v-tab key="Geral">Geral</v-tab>
            <v-tab key="Produtos">Produtos</v-tab>
            <v-tab key="Outros">Outros</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <div v-if="activeTab == 0">
        <v-container>
          <v-list-subheader>Geral</v-list-subheader>
          <v-row>
            <v-col cols="6">
              <v-card prepend-icon="mdi-cash-multiple">
                <template v-slot:title>
                  Tipo de Venda
                </template>
                <v-card-text>
                  <v-radio-group v-model="saleType">
                    <v-radio label="Varejo" value="Varejo"></v-radio>
                    <v-radio label="Atacado" value="Atacado"></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <v-card prepend-icon="mdi-printer-outline">
                <template v-slot:title>
                  Tipo de Impressão
                </template>
                <v-card-text>
                  <v-radio-group v-model="printType">
                    <v-radio label="Orçamento" value="Orçamento"></v-radio>
                    <v-radio label="Venda II" value="Venda II"></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="2"><v-text-field label="Código Cliente" v-model="budgetData.CodCli"></v-text-field></v-col>
            <v-col cols="10"><v-autocomplete v-model="model" label="Cliente" :items="states"
                persistent-hint></v-autocomplete></v-col>
            <v-col cols="6">
              <v-textarea clearable clear-icon="mdi-close-circle" label="Observação"
                v-model="budgetData.Obs"></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-textarea clearable clear-icon="mdi-close-circle" label="Complemento"
                v-model="budgetData.Obs1"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div v-if="activeTab == 1">
        <v-container>
          <v-list-subheader>Produtos</v-list-subheader>
          <v-row>
            <v-col cols="6"><v-autocomplete v-model="model" label="Produto" :items="states"
                persistent-hint></v-autocomplete>
            </v-col>
            <v-col cols="2"><v-text-field label="Quantidade" type="number"
                v-model="budgetData.Qtd"></v-text-field></v-col>
            <v-col cols="2"><v-text-field label="Valor" v-model="budgetData.Valor" type="number"></v-text-field></v-col>
            <v-col cols="2"><v-text-field readonly label="Total" v-model="budgetData.Total"></v-text-field></v-col>
          </v-row>
        </v-container>
      </div>
      <v-container v-if="activeTab == 1">
        <v-card flat class="rounded-b-xl elevation-4">
          <v-table fixed-header>
            <thead>
              <tr>
                <th class="text-left">Código</th>
                <th class="text-left">Produto</th>
                <th class="text-left">Quantidade</th>
                <th class="text-left">Valor</th>
                <th class="text-left">Valor Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.produto }}</td>
                <td>{{ item.quantidade }}</td>
                <td>{{ item.valor }}</td>
                <td>{{ item.valorTotal }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    mode: {
      type: String,
      default: 'add',
    },
    budget: {
      type: Object,
      default: () => ({}),
    },

  },
  data() {
    return {
      activeTab: 'Geral',
      model: null,
      saleType: null,
      printType: null,
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
      ],
      budgetData: {
        IdMOrc: null,
        DataInclusao: '',
        CodCli: null,
        CodVend: null,
        NomeCli: '',
        Obs: '',
        Obs1: '',
        Total: 0,
        Status: '',
        USUARIO: ''
      },
      products: [
        {
          id: 1,
          produto: "Caixa de Ferramentas",
          quantidade: 10,
          valor: 50.2,
          valorTotal: 502,
        },
        {
          id: 2,
          produto: "Martelo",
          quantidade: 15,
          valor: 20.5,
          valorTotal: 307.5,
        },
        {
          id: 3,
          produto: "Chave de Fenda",
          quantidade: 25,
          valor: 5.75,
          valorTotal: 143.75,
        },
        {
          id: 4,
          produto: "Alicate",
          quantidade: 20,
          valor: 12.3,
          valorTotal: 246,
        },
        {
          id: 5,
          produto: "Trena",
          quantidade: 30,
          valor: 7.5,
          valorTotal: 225,
        },
        {
          id: 6,
          produto: "Serra Circular",
          quantidade: 5,
          valor: 120,
          valorTotal: 600,
        },
        {
          id: 7,
          produto: "Parafusos (100 unidades)",
          quantidade: 50,
          valor: 8,
          valorTotal: 400,
        },
        {
          id: 8,
          produto: "Broca para Madeira",
          quantidade: 40,
          valor: 3.5,
          valorTotal: 140,
        },
        {
          id: 9,
          produto: "Lixa",
          quantidade: 50,
          valor: 1.2,
          valorTotal: 60,
        },
        {
          id: 10,
          produto: "Pincel",
          quantidade: 15,
          valor: 4.8,
          valorTotal: 72,
        }     
      ],
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    save() {
      this.close();
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>