<template>
	<main>
		<HomeView v-if="currentView === 'home'"/>
		<RateView v-else-if="currentView === 'rate'" />
		<TeamView v-else-if="currentView === 'team'" />
		<TestimonialView v-else-if="currentView === 'testimonial'" />
	</main>
</template>

<script setup>
import HomeView from '@/components/mainViews/HomeView.vue'
import RateView from '@/components/mainViews/RateView.vue'
import TeamView from '@/components/mainViews/TeamView.vue'
import TestimonialView from '@/components/mainViews/TestimonialView.vue'

const currentView = 'team'

</script>

<style scoped>
main {
  grid-area: content;
  background-color: white;
}
</style>