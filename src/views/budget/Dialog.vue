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
            <v-tab key="Contato">Contato</v-tab>
            <v-tab key="Outros">Outros</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <div v-if="activeTab == 0">
        <v-container>
          <v-list-subheader>Geral</v-list-subheader>
          <v-row>
            <v-col cols="6"><v-text-field label="ID Orçamento" v-model="budgetData.IdMOrc"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Data de Inclusão"
                v-model="budgetData.DataInclusao"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Código do Cliente" v-model="budgetData.CodCli"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Código Vendedor" v-model="budgetData.CodVend"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Nome do Cliente" v-model="budgetData.NomeCli"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Observação" v-model="budgetData.Obs"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Observação 1" v-model="budgetData.Obs1"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Total" v-model="budgetData.Total"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Status" v-model="budgetData.Status"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Usuário" v-model="budgetData.USUARIO"></v-text-field></v-col>
          </v-row>
        </v-container>
      </div>
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