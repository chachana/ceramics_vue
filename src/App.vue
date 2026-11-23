<script setup>
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppFork from './components/AppFork.vue'
import AppCatalog from './components/AppCatalog.vue'
import AppCart from './components/AppCart.vue'
import AppWorkshops from './components/AppWorkshops.vue'
import AppSteps from './components/AppSteps.vue'
import AppAbout from './components/AppAbout.vue'
import AppGallery from './components/AppGallery.vue'
import AppReviews from './components/AppReviews.vue'
import AppForm from './components/AppForm.vue'
import AppFaq from './components/AppFaq.vue'
import AppAdmin from './components/AppAdmin.vue'
import AppFooter from './components/AppFooter.vue'
import AdSlot from './components/AdSlot.vue'
</script>

<template>
  <AppHeader />
  <main>
    <AppHero />
    <AppFork />
    <AppCatalog />
    <AppCart />
    <AppWorkshops />
    <AppSteps />
    <AppAbout />
    <AppGallery />
    <AppReviews />
    <div class="container">
      <AdSlot size="banner" />
    </div>
    <AppForm />
    <AppFaq />
    <AppAdmin />
  </main>
  <AppFooter />
</template>