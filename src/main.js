import { createApp } from 'vue';
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDilaog from './components/UI/BaseDialog.vue'

const app = createApp(App)

// creating a global component that can be used anywhere in the app
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDilaog)

app.mount('#app');
