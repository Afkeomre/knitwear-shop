<script setup>
	import ProductList from '@/components/ProductList.vue';
	import Loader from '@/components/Loader.vue';

	defineProps({
		title: String,
		products: Array,
		loading: {
			type: Boolean,
			default: false
		},
		searchQuery: String,
		sortBy: String
	});

</script>

<template>
	<section class="shop">
		<div class="container">
			<div class="shop__content">
				<div class="shop__top-group">
					<h1 class="shop__title title">{{ title }}</h1>

					<div class="shop__filters" v-if="!loading">
						<select 
							:value="sortBy" 
							@change="$emit('update:sortBy', $event.target.value)"
						>
							<option disabled value="">Выберите способ сортировки</option>
							<option value="title">По названию</option>
							<option value="price">По цене (сначала дешевые)</option>
							<option value="-price">По цене (сначала дорогие)</option>
						</select>
						<input 
							:value="searchQuery"
							type="text" 
							placeholder="Поиск..." 
							@input="$emit('update:searchQuery', $event.target.value)"
						>
					</div>
				</div>
				
				<div :class="`${loading ? 'shop__content-loading' : ''}`" v-auto-animate>
					<ProductList v-if="!loading" :products="products" />
					<Loader v-else />
					<div v-if="!products.length && !loading" class="shop__content-empty">
						<p>Nothing was found</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
	.shop {
		padding: 60px 0;
	}
	.shop__top-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40px;
	}
	.shop__filters {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 14px;
	}
	.shop__filters select,
	.shop__top-group input {
		min-height: 36px;
		min-width: 250px;
		padding: 8px 10px;
		border: 1px solid #aaaaaa;
		border-radius: 6px;
		outline: none;
	}
	.shop__top-group input {
		padding-left: 32px;
		background-image: url('/images/search.svg');
		background-repeat: no-repeat;
		background-position: 4% 50%;
	}
	.shop__content {
		padding-bottom: 80px;
		border-bottom: 1px solid #2d1e1e;
	}
	.shop__content-loading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 450px;
	}
	.shop__content-empty {
		font-size: 30px;
		padding: 20px;
		min-height: 400px;
	}


</style>