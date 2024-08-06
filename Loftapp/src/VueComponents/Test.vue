<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface invoice {
  first: String
  second: String
}

const D = [
        'Amsterdam',
        'Buenos Aires',
        'Cairo',
        'Geneva',
        'Hong Kong',
        'Istanbul',
        'London',
        'Madrid',
        'New York',
        'Panama City',
      ]

let dresult = ref(D)

const data : invoice[] = [
  { first:'Due' , second:'Date'},
  { first:'Invoice' , second:'Link'},
  { first:'PDF' , second:'Link'},
]
let result = ref(data)
console.log()

const handleInput = (event) => {
  const query = event.target.value.toLowerCase();
  result.value = data.filter(e => e.first.toLocaleLowerCase().indexOf(query) > -1)
}

</script>

<template>
    <ion-searchbar :debounce="1000" @ionInput="handleInput($event)"></ion-searchbar>

    <ion-list>
      <ion-item v-for="item in result">
        <ion-label>{{ item.first }} {{ item.second }}</ion-label>
      </ion-item>
    </ion-list>
</template>