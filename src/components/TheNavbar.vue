<template>
	<nav>
		<ul class='mymenu'>
			<li>
				<a href="index.html">Home</a>
			</li>
			<li>
				<a href="testimonials.html">Témoignages</a>
			</li>
			<li>
				<a href="rates.html">Rates</a>
			</li>
			<li>
				<a href="team.html">Teams</a>
			</li>
		</ul>

	</nav>
</template>

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