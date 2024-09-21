<script setup lang="ts">
</script>

<template>
	<header class="header">
		<div class="vlada-container">
			<div class="header__inner">
				<div class="header__logo">
					<NuxtImg src="/img/logo-red.svg"/>
				</div>
				<nav class="header__navigation">
					<vlada-button size="md" type="primary" to="/welcome" plac="Home"/>
					<vlada-button size="md" type="primary" to="/" text="Movies & Shows"/>
					<vlada-button size="md" type="primary" to="/" text="Support"/>
					<vlada-button size="md" type="primary" to="/" text="Subscriptions"/>
				</nav>
				<div class="header__search-profile">
					<vlada-button size="md" type="secondary" to="/" icon="bi:search"/>
					<vlada-button size="md" type="secondary" to="/" icon="bi:bell"/>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header {
	@apply w-full mt-2 z-50 fixed top-0;
}

.header__inner {
	@apply flex justify-between items-center;
}

.header__logo {
	@apply block h-9 relative overflow-hidden;
}

.header__logo img {
	@apply select-none pointer-events-none relative w-full h-full;
}

.header__navigation {
	@apply flex gap-3 bg-vlada-color-secondary p-2 border-4 rounded-xl border-vlada-color-tertiary;
}

.header__search-profile {
	@apply flex gap-2;
}
</style>
