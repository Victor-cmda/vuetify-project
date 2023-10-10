<!-- Dialog.vue -->
<template>
  <v-dialog v-model="isOpen" fullscreen transition="dialog-bottom-transition">
    <v-card>

      <v-toolbar dark color="primary">
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ mode === 'add' ? 'Adicionar Produtos' : 'Editar Produtos' }}</v-toolbar-title>
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
            <v-col cols="6"><v-text-field label="Nome do Produtos" v-model="clientData.Nomecliente"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Endereço" v-model="clientData.Endereco"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Cidade" v-model="clientData.Cidade"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="CEP" v-model="clientData.Cep"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="UF" v-model="clientData.Uf"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Bairro" v-model="clientData.Bairro"></v-text-field></v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="activeTab == 1">
        <v-container>
          <v-list-subheader>Contato</v-list-subheader>
          <v-row>
            <v-col cols="6"><v-text-field label="Telefone 1" v-model="clientData.Telefone1"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Telefone 2" v-model="clientData.Telefone2"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Telefone 3" v-model="clientData.Telefone3"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Fax" v-model="clientData.Fax"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Celular" v-model="clientData.Celular"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Email" v-model="clientData.Email"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Contato" v-model="clientData.Contato"></v-text-field></v-col>
          </v-row>
        </v-container>
      </div>

      <div v-if="activeTab == 2">
        <v-container>
          <v-list-subheader>Outros</v-list-subheader>
          <v-row>
            <v-col cols="6"><v-text-field label="ICQ Número" v-model="clientData.IcqNumero"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="ICQ Nick" v-model="clientData.IcqNick"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Tipo" v-model="clientData.Tipo"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Tipo Venda" v-model="clientData.TipoVenda"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Obs" v-model="clientData.Obs"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="WWW" v-model="clientData.Www"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Serviço" v-model="clientData.Servico"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Cod. Venda" v-model="clientData.CodVend"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Comp" v-model="clientData.Comp"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Classificação" v-model="clientData.Classificacao"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Campo X" v-model="clientData.CampX"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Campo Y" v-model="clientData.CampoY"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Lembrete" v-model="clientData.Lemb"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Preço" v-model="clientData.Preco"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Senha" v-model="clientData.Senha"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Atualizar" v-model="clientData.ATUALIZAR"></v-text-field></v-col>
            <v-col cols="6"><v-text-field label="Cod. Conta" v-model="clientData.Codconta"></v-text-field></v-col>
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
    client: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      activeTab: 'Geral',
      clientData: {
        Nomecliente: '',
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
        Tipo: '',
        TipoVenda: '',
        Obs: '',
        Www: '',
        Servico: '',
        CodVend: '',
        Comp: '',
        Classificacao: '',
        CampX: '',
        CampoY: '',
        Lemb: '',
        Preco: '',
        Senha: '',
        ATUALIZAR: '',
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
      // Lógica para salvar o cliente (adicionar ou editar)
      this.close();
    },
    close() {
      this.isOpen = false;
    },
  },
};
</script>
