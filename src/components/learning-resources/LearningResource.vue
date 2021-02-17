<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <!-- important to provide the id in this method -->
        <base-button mode="flat" @click="removeResource(id)">Delete</base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  // receiving the method from TheResources.vue
  inject: ['removeResource'],
  // receiving the props from App.vue in order to use them 
  props: ['title', 'description', 'link', 'id']
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>