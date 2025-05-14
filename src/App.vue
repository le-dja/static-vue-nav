<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheNavbar from '@/components/TheNavbar.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheFooter from '@/components/TheFooter.vue'
import TheMain from '@/components/TheMain.vue'

const currentView = ref('home')

const changeViewFromApp = (view) => {
	currentView.value = view
}

</script>

<template>
	<TheHeader />
	<TheNavbar @change-view="changeViewFromApp"/>
	<TheMain :currentView="currentView" />
	<TheSidebar />
	<TheFooter />
</template>

<style scoped>
</style>