import { api } from "./api";

interface TTask {
  id: number;
  name: string;
  author: string;
}

export const TaskService = {
  getAll: async () => {
    try {
      const {
        data: { ...items },
      } = await api.get<TTask[]>("/all");

      return items;
    } catch (e) {
      console.log(e);
    }
  },
  get: async (id: number) => {
    try {
      const {
        data: { ...items },
      } = await api.get<TTask>("/find", {
        params: { id },
      });

      return items;
    } catch (e) {
      console.log(e);
    }
  },
};
