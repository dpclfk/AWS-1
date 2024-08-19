import instance from "./axios";

export interface Todo {
  id?: number;
  title?: string;
  isComplete?: boolean;
}

export const getList = async (): Promise<Todo[]> => {
  try {
    const response = await instance.get("/todo");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error("Failed to Get List");
  }
};

export const addTodo = async ({ title }: Todo): Promise<Todo> => {
  try {
    const response = await instance.post("/todo", { title });
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error("Failed to Add List");
  }
};

export const patchTodo = async ({ id, title, isComplete }: Todo): Promise<Todo> => {
  try {
    const response = await instance.patch("/todo", { id, title, isComplete });
    return response.data;
  } catch (error: any) {
    console.log(error.message);
    throw new Error("Failed to update List");
  }
};
