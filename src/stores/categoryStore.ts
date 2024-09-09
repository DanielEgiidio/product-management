import { defineStore } from "pinia";
import axios from "@/plugins/axios";
import type { APIResponse, Category, Categories } from "@/types/index";

export const useCategoryStore = defineStore("CategoryStore", {
  state: () => ({
    // categoriesData: {} as Categories,
  }),

  actions: {
    async createCategory(form: Record<string, string>) {
      return new Promise<Category>(async (resolve, reject) => {
        try {
          const { data } = await axios.post<APIResponse<Category>>(
            "/ecommerce/categories",
            {
              ...form,
            }
          );
          console.log("categories", data.data);

          resolve(data.data);
        } catch (error) {
          reject(error);
        }
      });
    },
  },
});
