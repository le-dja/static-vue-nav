<template>
	<nav>
		<ul class='mymenu'>
			<li :class="{ active : (currentViewForActiveClass === 'home')}">
				<a href="index.html" @click.prevent="changeViewOnClick('home')">Home</a>
			</li>
			<li :class="{ active : (currentViewForActiveClass === 'testimonial')}">
				<a href="testimonials.html" @click.prevent="changeViewOnClick('testimonial')">Témoignages</a>
			</li>
			<li :class="{ active : (currentViewForActiveClass === 'rate')}">
				<a href="rates.html" @click.prevent="changeViewOnClick('rate')">Rates</a>
			</li>
			<li :class="{ active : (currentViewForActiveClass === 'team')}">
				<a href="team.html" @click.prevent="changeViewOnClick('team')">Teams</a>
			</li>
		</ul>

	</nav>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits(['changeView'])
const currentViewForActiveClass = ref('home')

const changeViewOnClick = (view) => {
	emits('changeView', view);
	currentViewForActiveClass.value = view
}

</script>

<style>
nav {
  grid-area: nav;
}


nav >ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
nav >ul>li {
  margin-top: 10px;
}

ul.mymenu  {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}


.mymenu li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}

.mymenu li a:hover:not(.active) {
  background-color: #8bc089;
}

.mymenu .active {
  background-color: #4CAF50;
}
</style>