<template>
  <base-card>
    
    <base-button 
      @click="setSelectedTab('stored-resources')"
      :mode="storedResourcesSelected"
    >Stored Resources</base-button>

    <base-button 
      @click="setSelectedTab('add-resource')"
      :mode="addResourceSelected"
    >Add Resource</base-button>

    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>

  </base-card>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'

export default {
  components: {
    'stored-resources': StoredResources,
    'add-resource': AddResource
  },
  // provide this information object to all lower level 
  // components and child components
  provide() {
    return {
      resources: this.storedResources,
      // sending the addResource method to the AddResource.vue component
      addResource: this.addResource,
      // sending the method to be used in the LearningResource.vue where the button is
      removeResource: this.removeResource
    }
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js Docs',
          link: 'https://vuejs.org'
        },
        {
          id: 'google-guide',
          title: 'Google',
          description: 'The Official Google Docs',
          link: 'https://google.com'
        },
      ]
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    // this will receive the title, description and url
    // then add it to the storedResources array
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    },
    // deleting a resourcing but using it's ID
    removeResource(resId) {
      // finding the index with the resource which is the same as the argument being provided
      // .findIndex is a js function
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  },
  computed: {
    // setting up methods to activate a button depending on which one is selected
    storedResourcesSelected() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResourceSelected() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  }
}
</script>

<style>
  
</style>