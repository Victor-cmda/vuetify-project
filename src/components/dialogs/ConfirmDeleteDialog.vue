<template>
  <v-dialog v-model="isOpen" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">
        Confirmar exclusão
      </v-card-title>
      <v-card-text>
        Deseja realmente excluir este registro?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey darken-1" text @click="close">Cancelar</v-btn>
        <v-btn color="red darken-1" text @click="confirmDeletion">Excluir</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    close() {
      this.isOpen = false;
    },
    confirmDeletion() {
      this.$emit('confirm');
      this.close();
    }
  }
};
</script>
