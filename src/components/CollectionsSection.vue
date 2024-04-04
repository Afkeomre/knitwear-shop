<script setup>

</script>

<template>
	<section id="collections" class="collections">
		<div class="container">
			<div class="collections__content">
				<div class="collections__women">
					<router-link to="/woman">
						<h3 class="collections__title collections__title_women"><a href="#">Shop Women</a></h3>
					</router-link>
				</div>
				<div class="collections__men">
					<router-link to="/man">
						<h3 class="collections__title collections__title_men"><a href="#">Shop Men</a></h3>
					</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
	.collections__content{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 798px;
	}
	.collections__title {
		text-align: center;
		font-size: 36px;
		color: #fff;
	}
	.collections {
		max-width: 1200px;
		margin: 0 auto;
		background-image: url('../assets/images/collections/woman.jpg'), url('../assets/images/collections/man.jpg');
		background-position: left, right;
		background-size: 600px 100%, 600px 100%;
		background-repeat: no-repeat, no-repeat;
	}
	.collections__women,
	.collections__men {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>