<script lang="ts">
import SelectIngredients from './SelectIngredients.vue';
import ShowRecipes from './ShowRecipes.vue';
import Tag from './Tag.vue';
import YourList from './YourList.vue';

type Page = 'SelectIngredients' | 'ShowRecipes';

export default {
    data() {
        return {
            ingredients: [] as string[],
            content: 'SelectIngredients' as Page
        }
    },
    components: { SelectIngredients, YourList, Tag, ShowRecipes },
    methods: {
      addIngredient(newIngredient: string) {
        this.ingredients.push(newIngredient)
      },
      removeIngredient(removedIngredient: string) {
       this.ingredients = this.ingredients.filter(ingredient => ingredient !== removedIngredient);
      },
      navigate(page: Page) {
        this.content = page;
      }
    }
}
</script>

<template>
    <main class="main-content">
        <YourList :ingredients="ingredients" />

        <KeepAlive include="SelectIngredients">
          <SelectIngredients v-if="content === 'SelectIngredients'" 
          @add-ingredient="addIngredient" 
          @remove-ingredient="removeIngredient"
          @search-recipes="navigate('ShowRecipes')" />
  
          <ShowRecipes v-else-if="content === 'ShowRecipes'" :ingredients="ingredients" @edit-recipes="navigate('SelectIngredients')" />
        </KeepAlive>
    </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--cream, #FFFAF3);
  color: var(--gray, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}

</style>