import type ICategory from "@/interfaces/ICategory";

export async function getCategories() {
    const response = await fetch("https://gist.githubusercontent.com/JFBatista023/19c660c9afd9a20b35b0a698d7cd5af1/raw/902548dc9a42b6b87a0b6dccf2b6fcfab33265ef/categories.json");
    const categories: ICategory[] = await response.json();

    return categories;
}