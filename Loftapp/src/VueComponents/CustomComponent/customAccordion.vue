<template>
    <ion-accordion ref="accordion">
      <slot></slot>
    </ion-accordion>
  </template>
  
  <script>
  import { IonAccordion } from '@ionic/vue';
  
  export default {
    extends: IonAccordion,
    methods: {
      toggleItem(index) {
        const item = this.$refs.accordion.children[index];
        const isExpanded = item.getAttribute('aria-expanded') === 'true';
  
        if (isExpanded) {
          item.setAttribute('aria-expanded', 'false');
          item.classList.remove('ion-accordion-item-expanded');
        } else {
          item.setAttribute('aria-expanded', 'true');
          item.classList.add('ion-accordion-item-expanded');
        }
      },
    },
  };
  </script>
  