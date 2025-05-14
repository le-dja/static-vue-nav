<template>
	<nav>
		<ul class='mymenu'>
			<li>
				<router-link :to="{ name: 'home' }">Home</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'testimonial' }">Témoignages</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'rate' }">Rates</router-link>
			</li>
			<li>
				<router-link :to="{name: 'team'}">Teams</router-link>
			</li>
		</ul>

	</nav>
</template>

<script setup>


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