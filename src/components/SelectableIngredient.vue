<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingredient: { type: String, required: true }
    },
    components: { Tag },
    data() {
        return {
            selected: false
        }
    },
    methods: {
        onClick() {
            this.selected = !this.selected;

            if (this.selected) {
                this.$emit('addIngredient', this.ingredient);
            } else {
                this.$emit('removeIngredient', this.ingredient);
            }
        }
    },
    emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
    <button class="ingredient" @click="onClick" :aria-pressed="selected">
        <Tag :text="ingredient" :active="selected" />
    </button>
</template>

<style scoped>
.ingredient {
    cursor: pointer;
}
</style>