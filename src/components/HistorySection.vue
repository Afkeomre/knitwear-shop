<template>
	<section id="heritage" class="history">
		<div class="container">
			<div class="history__content">
				<h3 class="history__title">A Legacy of Wool Since 1853</h3>
				<p class="history__text">Using our knowledge, rooted in our Devold heritage, we continue the tradition of mastering wool.</p>
				<div class="history__links">
					<a href="#">Read more</a>
					<a href="#">Our Heritage</a>
					<a href="#">Devold of Norway</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.history {
		color: #fff;
		height: 542px;
		background-image: url('/images/history.jpg');
		background-size: 1200px 542px; 
		background-position: center;
		background-repeat: no-repeat;
		background-color: #fff;
	}
	.container {
		position: relative;
	}
	.history__content {
		position: absolute;
		top: 64px;
		right: 149px;
	}
	.history__title {
		font-size: 36px;
		width: 289px;
		margin-bottom: 51px;
	}
	.history__text {
		line-height: 1.3;
		text-transform: uppercase;
		width: 328px;
		margin-bottom: 109px;
	}
	.history__links {
		display: flex;
		flex-direction: column;
		gap: 23px;
		text-transform: uppercase;
	}
</style>