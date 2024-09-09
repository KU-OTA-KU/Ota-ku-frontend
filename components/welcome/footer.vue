<script setup lang="ts">

</script>

<template>
	<footer class="footer" id="footer">
		<div class="vlada-container">
			<div class="footer__content-top">
				<div class="footer__content-top-description">
					<NuxtImg src="/img/logo-red.svg" alt="ota-ku-logo" />
					<p>Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
				</div>
				<!--End Col-->
				<div class="footer__content-top-end-col">
					<h5>Paged one</h5>
					<ul>
						<li><a href="javascript:;">Home</a></li>
						<li><a href="javascript:;">About</a></li>
						<li><a href="javascript:;">Pricing</a></li>
						<li><a href="javascript:;">Features</a></li>
					</ul>
				</div>
				<div class="footer__content-top-end-col">
					<h5>Paged one</h5>
					<ul>
						<li><a href="javascript:;">Home</a></li>
						<li><a href="javascript:;">About</a></li>
						<li><a href="javascript:;">Pricing</a></li>
						<li><a href="javascript:;">Features</a></li>
					</ul>
				</div>
				<div class="footer__content-top-end-col">
					<h5>Paged one</h5>
					<ul>
						<li><a href="javascript:;">Home</a></li>
						<li><a href="javascript:;">About</a></li>
						<li><a href="javascript:;">Pricing</a></li>
						<li><a href="javascript:;">Features</a></li>
					</ul>
				</div>
				<div class="footer__content-top-end-col">
					<h5>Paged one</h5>
					<ul>
						<li><a href="javascript:;">Home</a></li>
						<li><a href="javascript:;">About</a></li>
						<li><a href="javascript:;">Pricing</a></li>
						<li><a href="javascript:;">Features</a></li>
					</ul>
				</div>
			</div>
			<!--Grid-->
			<div class="footer__content-bottom">
				<div class="footer__content-bottom-container">
					<span class="footer__content-bottom-copyright">© <a
							href="https://pagedone.io/">ota-ku</a> 2022 - 2024, All rights reserved.</span>
					<div class="footer__content-bottom-social">

					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	@apply w-full bg-vlada-color-quaternary;

	.footer__content-top {
		@apply grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8;

		.footer__content-top-description {
			@apply col-span-full mb-10 lg:col-span-2 lg:mb-0;

			p {
				@apply mt-2 text-white
			}
		}
	}

	.footer__content-top-end-col {
		@apply lg:mx-auto text-left;

		h5 {
			@apply text-white mb-4;
		}

		ul {
			@apply text-sm transition-all duration-500;

			li {
				@apply mb-3;

				a {
					@apply text-white
				}
			}
		}
	}

	.footer__content-bottom {
		@apply py-7 border-t border-vlada-color-primary;

		.footer__content-bottom-container {
			@apply flex items-center justify-center flex-col lg:justify-between lg:flex-row;

			.footer__content-bottom-copyright {
				@apply text-sm text-white;
			}

			.footer__content-bottom-social {
				@apply flex mt-4 space-x-4 sm:justify-center lg:mt-0;
			}
		}
	}
}
</style>