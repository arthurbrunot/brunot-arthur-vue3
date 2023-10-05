<script lang="ts" setup>
const menuItems = [
  { name: 'Home', link: '/' },
  { name: 'Monsters', link: '/monsters' },
  { name: 'Lien 1', link: '#' },
  { name: 'Lien 2', link: '#' },
  { name: 'Lien 3', link: '#' }
]
</script>

<template>
  <section data-bs-version="5.1" class="menu menu01 cid-sRQjR1mphb" id="menu01-7">
    <nav class="navbar navbar-fixed-top navbar-expand-lg container-fluid">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            class="navbar-nav nav-dropdown navbar-nav-top-padding ms-auto"
            data-app-modern-menu="true"
          >
            <li class="nav-item" v-for="item in menuItems" :key="item.name">
              <router-link :to="item.link" class="nav-link link text-black text-primary display-7">
                {{ item.name }}
              </router-link>
            </li>
          </ul>

          <div class="navbar-buttons align-center mbr-section-btn">
            <a class="btn btn-primary display-4" href="#">CONTACT US</a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped></style>
