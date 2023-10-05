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
    class="features05 cid-sRQcud4Jjb mt-6 d-flex flex-column align-items-center"
    id="features05-2"
  >
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row title-section">
          <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
        </div>
        <div class="row justify-content-center">
          <div class="card">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="monster in monsters" :key="monster._id">
                  <th scope="row">{{ monster._id }}</th>
                  <td>{{ monster.name }}</td>
                  <td>Monsters</td>
                  <td>
                    <RouterLink :to="`/monster/${monster._id}`" class="btn btn-primary btn-sm m-0">
                      Voir 👀
                    </RouterLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-center mt-4 flex-nowrap w-50">
      <button @click="prevPage" :disabled="currentPage === 1" class="btn btn-secondary mr-2">
        Previous
      </button>
      <button @click="nextPage" class="btn btn-secondary" :disabled="monsters.length < 10">
        Next
      </button>
    </div>
  </section>
</template>

<style scoped></style>
