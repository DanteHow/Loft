import { createApp } from 'vue'
// import './style.css'
import router from './router.js'
import App from './App.vue'
import { IonicVue } from '@ionic/vue'
import naive from 'naive-ui'
import 'virtual:windi.css'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

// Vuex
// import store from './store';

// Firebase / Firestore / VueFire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase/init.js'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import './theme.css'

const app = createApp(App).use(IonicVue).use(router).use(naive).use(VueFire, {
  firebaseApp,
  module: [
    VueFireAuth(),
  ],
})
app.component('EasyDataTable', Vue3EasyDataTable)

router.isReady().then(async () => {
    app.mount("#app")
  })