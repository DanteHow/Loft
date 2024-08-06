<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Account } from '../../Types/Database'
import { useCurrentUser, useFirebaseAuth } from 'vuefire';

const user = useFirebaseAuth()

const router = useRoute()
</script>

<template>
  <div>
    <h1>Firestore Data</h1>
    <ul v-if="Account !== null">
      <li>Username: {{ Account.Username }}</li>
      <li>Password: {{ Account.Password }}</li>
    </ul>
    <div v-else>
      Loading data...
    </div>
  </div>

  <div v-if="user">
    Hello {{ user.authStateReady }}
  </div>
</template>