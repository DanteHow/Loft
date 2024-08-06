<script setup lang="ts">

const props = defineProps({
    Types:String,
    Content:String,
    Position:String
})

const types = props.Types?.toLowerCase()
const Position = props.Position?.toLowerCase()
</script>

<template>
    <ion-buttons v-if="types === 'button1'" :slot="Position">
        <ion-button shape="round" fill="solid" style="--background:#488286">
            <ion-label class="p-5"><strong>{{ props.Content }}</strong></ion-label>
        </ion-button>
    </ion-buttons>

    <ion-buttons v-else-if="types === 'button2'" :slot="Position">
        <ion-button shape="round" style="--background:#B7D5D4; --color:black;">
            <ion-label class="p-5"><strong>{{ props.Content }}</strong></ion-label>
        </ion-button>
    </ion-buttons>

    <ion-buttons v-else-if="types === 'fill-outline-button'" :slot="Position">
        <ion-button shape="round" fill="outline">
            <ion-label class="p-5"><strong>{{ props.Content }}</strong></ion-label>
        </ion-button>
    </ion-buttons>

    <ion-buttons v-else-if="types === 'delete'" :slot="Position">
        <ion-button shape="round" style="--background:#B7D5D4; --color:black;">
            <svg class="pr-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 8c0 1.657-4.925 3-11 3S5 9.657 5 8m22 0c0-1.657-4.925-3-11-3S5 6.343 5 8m22 0l-3 18s-1 2-8 2s-8-2-8-2L5 8m13.5 8.5l-5 5m0-5l5 5"/></svg>
            <ion-label><strong>{{ props.Content }}</strong></ion-label>
        </ion-button>
    </ion-buttons>

    <ion-buttons v-else-if="types === 'edit'" :slot="Position">
        <ion-button shape="round" fill="outline">
            <svg class="pr-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 5L17 15m0-10H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"/></svg>
            <ion-label><strong>{{ props.Content }}</strong></ion-label>
        </ion-button>
    </ion-buttons>
</template>