<!-- Dialog.vue -->
<template>
  <v-dialog v-model="isOpen" fullscreen transition="dialog-bottom-transition">
    <v-card>

      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ mode === 'add' ? 'Adicionar Fornecedor' : 'Editar Fornecedor' }}</v-toolbar-title>
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
            <v-col cols="6"><v-text-field label="Nome do Fornecedor"
                v-model="supplierData.NomeFornecedor"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Endereço" v-model="supplierData.Endereco"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Cidade" v-model="supplierData.Cidade"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="CEP" v-model="supplierData.Cep"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="UF" v-model="supplierData.Uf"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Bairro" v-model="supplierData.Bairro"></v-text-field></v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="activeTab == 1">
        <v-container>
          <v-list-subheader>Contato</v-list-subheader>
          <v-row>
            <v-col cols="6"><v-text-field label="Telefone 1" v-model="supplierData.Telefone1"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Telefone 2" v-model="supplierData.Telefone2"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Telefone 3" v-model="supplierData.Telefone3"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Fax" v-model="supplierData.Fax"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Celular" v-model="supplierData.Celular"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Email" v-model="supplierData.Email"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Contato" v-model="supplierData.Contato"></v-text-field></v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="activeTab == 2">
        <v-container>
          <v-list-subheader>Outros</v-list-subheader>
          <v-row>
            <v-col cols="6"><v-text-field label="ICQ Número" v-model="supplierData.IcqNumero"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="ICQ Nick" v-model="supplierData.IcqNick"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Obs" v-model="supplierData.Obs"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Campo X" v-model="supplierData.CampoX"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Campo Y" v-model="supplierData.CampoY"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Cod. Conta" v-model="supplierData.Codconta"></v-text-field></v-col>
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
    fornecedor: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      activeTab: 'Geral',
      supplierData: {
        IdFornecedor: null,
        NomeFornecedor: '',
        Endereco: '',
        Cidade: '',
        Cep: '',
        Uf: '',
        Bairro: '',
        Telefone1: '',
        Telefone2: '',
        Telefone3: '',
        Fax: '',
        Celular: '',
        Email: '',
        IcqNumero: '',
        IcqNick: '',
        Contato: '',
        Obs: '',
        DataInclusao: '',
        CampoX: '',
        CampoY: '',
        Codconta: '',
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
