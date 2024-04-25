import type ICategory from "@/interfaces/ICategory";
import type IRecipe from "@/interfaces/IRecipe";

async function getDataURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getCategories() {
  return getDataURL<ICategory[]>('https://gist.githubusercontent.com/JFBatista023/19c660c9afd9a20b35b0a698d7cd5af1/raw/902548dc9a42b6b87a0b6dccf2b6fcfab33265ef/categories.json');
}

export async function getRecipes() {
  return getDataURL<IRecipe[]>('https://gist.githubusercontent.com/JFBatista023/a1c37449621c26ed797ea39b06103013/raw/fb89b35b9b0b1493164ad3c86520d3192acc511c/recipes.json');
}
