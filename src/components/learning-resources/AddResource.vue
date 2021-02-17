<template>
  <!-- Error Modal / BaseDialog to show when form is incomplete -->
  <base-dialog 
    v-if="inputIsInvalid" 
    ModalTitle="Invalid Form Input" 
    @close="confirmError"
  >
    <template v-slot:default>
      <p>one or more of your inputs are invalid</p>
    </template>
    <template v-slot:actions>
      <base-button @click="confirmError">Close</base-button>
    </template>
  </base-dialog>

  <!-- Form Input -->
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title" ref="titleInput">
      </div>
      <div class="form-control">
        <label for="description">Description:</label>
        <textarea id="description" name="description" rows="4" ref="descInput" />
      </div>
      <div class="form-control">
        <label for="link">Link:</label>
        <input type="url" id="link" name="link" ref="linkInput">
      </div>
      <div>
        <base-button type="submit">Submit</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  // coming from TheResources.vue
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    }
  },
  // using refs to get the value of the user input
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      // .trim() removes blanks / spaces in the input
      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredUrl.trim() === '') {
        this.inputIsInvalid = true;
        return;
      } else {
        this.addResource(enteredTitle, enteredDescription, enteredUrl);
      }
    },
    showDialog() {
      return this.displayModal = true
    },
    confirmError() {
      this.inputIsInvalid = false
    }
  },
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>