<script setup>
	import AcceptCheckbox from '@/components/AcceptCheckbox.vue';
</script>

<template>
	<section id="policy" class="signup">
		<div class="container">
			<div class="signup__content">
				<div class="signup__text">
					<p>Get 10% off on your next online order.</p>
					<p>Join our newsletter to receive updates on O.A.D. collections, events and new arrivals.</p>
				</div>
				<a href="#" class="signup__link">Sign up</a>
				<AcceptCheckbox class="signup__checkbox"/>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.signup {
		padding: 64px 0 80px;
		text-transform: uppercase;
		text-align: center;
		background-color: #ebecdc;
	}
	.signup__text {
		margin-bottom: 50px;
	}
	.signup__link {
		display: inline-block;
		margin-bottom: 19px;
		font-size: 16px;
	}
	.signup__checkbox {
		font-size: 11px;
		justify-content: center;
	}

</style>