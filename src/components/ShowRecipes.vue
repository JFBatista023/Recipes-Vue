<script lang="ts">
import { getRecipes } from '@/http';
import type IRecipe from '@/interfaces/IRecipe';
import type { PropType } from 'vue';
import PrincipalButton from './PrincipalButton.vue';
import RecipeCard from './RecipeCard.vue';

    export default {
        props: {
            ingredients: { type: Array as PropType<string[]>, required: true }
        },
        data() {
            return {
                recipesFound: [] as IRecipe[]
            }
        },
        async created() {
            const recipes = await getRecipes();

            this.recipesFound = recipes.filter((recipe) => {
                const recipeCompatible = recipe.ingredients.every((ingredient) => this.ingredients.includes(ingredient));
                return recipeCompatible;
            })
        },
        components: { PrincipalButton, RecipeCard },
        emits: ['editRecipes']
    }
</script>

<template>
    <section class="show-recipes">
        <h1 class="header recipes-title">Recipes</h1>

        <p class="paragraph-lg results-found">
            Results found: {{ recipesFound.length }}
        </p>

        <div v-if="recipesFound.length" class="wrapper-recipes">
            <p class="paragraph-lg infos">
                See the recipe options we found with the ingredients you have lying around!
            </p>

            <ul class="recipes">
                <li v-for="recipe of recipesFound" :key="recipe.name">
                    <RecipeCard :recipe="recipe" />
                </li>
            </ul>
        </div>

        <div v-else class="recipes-not-found">
            <p class="paragraph-lg recipes-not-found__info">
                Oops, we didn't find results for your combination. Let's try again?
            </p>

            <img src="../assets/images/without-recipes.png">
        </div>

        <PrincipalButton text="Edit list" @click="$emit('editRecipes')"/>
    </section>
</template>

<style scoped>
.show-recipes {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.recipes-title {
  color: var(--dark-green, #3D6D4A);
  margin-bottom: 1.5rem;
}

.results-found {
  color: var(--dark-green, #3D6D4A);
  margin-bottom: 0.5rem;
}

.wrapper-recipes {
  margin-bottom: 3.5rem;
}

.infos {
  margin-bottom: 2rem;
}

.recipes {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.recipes-not-found {
  margin-bottom: 2rem;
}

.recipes-not-found__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .wrapper-recipes {
    margin-bottom: 2rem;
  }
}
</style>