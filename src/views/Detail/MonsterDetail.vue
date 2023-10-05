<script lang="ts" setup>
import axios from 'axios'
import type { Monster } from '@/types/types'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const monsterDetail = ref<Monster | null>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  const monsterId = route.params.id
  try {
    const response = await axios.get(`https://metallo.ew.r.appspot.com/monsters/${monsterId}`)
    monsterDetail.value = response.data
  } catch (error) {
    console.error('Error fetching monster details:', error)
  }
})
</script>

<template>
  <section data-bs-version="5.1" class="cid-sRQoPK3EDs" v-if="monsterDetail">
    <div class="container-fluid d-flex align-items-center justify-content-center">
      <div class="mx-auto">
        <div class="card border-primary mb-3" style="max-width: 32rem">
          <div class="card-header">{{ monsterDetail._id }}</div>
          <img :src="monsterDetail.image" :alt="monsterDetail.name" />
          <div class="card-body text-primary">
            <h5 class="card-title">{{ monsterDetail.name }}</h5>
            <p class="card-text">{{ monsterDetail.description }}</p>
            <ul class="list mt-2">
              <li v-for="drop in monsterDetail.drops" :key="drop">{{ drop }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section data-bs-version="5.1" class="cid-sRQoPK3EDs" v-else-if="error">
    <div class="container-fluid d-flex align-items-center justify-content-center">
      <div class="mx-auto">
        <div class="card border-primary mb-3" style="max-width: 32rem">
          <div class="card-header">Error</div>
          <div class="card-body text-primary">
            <p class="card-text">{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cid-sRQoPK3EDs {
  background: url(@/assets/images/mountain-fv.jpg) no-repeat center center;
  background-size: cover;
}
</style>
