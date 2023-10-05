<script lang="ts" setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import type { Monster } from '@/types/types'

const monsters = ref<Monster[]>([])
const currentPage = ref(1)

watch(currentPage, (newPage) => {
  axios.get(`https://metallo.ew.r.appspot.com/monsters?page=${newPage}`).then((response) => {
    monsters.value = response.data as Monster[]
  })
})

// Initial fetch
axios.get('https://metallo.ew.r.appspot.com/monsters').then((response) => {
  monsters.value = response.data as Monster[]
})

const nextPage = () => {
  currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<template>
  <section
    data-bs-version="5.1"
    class="features05 cid-sRQcud4Jjb d-flex flex-column align-items-center"
    id="monsters"
  >
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row title-section">
          <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="monster in monsters" :key="monster._id" class="col-4 col-md-2 mb-2 mb-md-5">
            <div class="card">
              <img :src="monster.image" alt="" class="card-img-top h-100" />
              <div class="card-body">
                <h3 class="card-title mbr-section-subtitle mbr-fonts-style">
                  <strong>{{ monster.name }}</strong>
                </h3>
                <ul class="list mbr-fonts-style display-7">
                  <li v-for="drop in monster.drops" :key="drop">{{ drop }}</li>
                </ul>
                <div class="mbr-section-btn">
                  <RouterLink
                    :to="`/monster/${monster._id}`"
                    class="justify-content-center btn btn-primary display-4"
                    >VOIR</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center mt-4 flex-nowrap w-50">
      <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-secondary mr-2">
        Précédent
      </button>
      <button @click="nextPage" class="btn btn-secondary">Suivant</button>
    </div>
  </section>
</template>

<style scoped></style>
