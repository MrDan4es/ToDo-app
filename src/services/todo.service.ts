import { API_URL } from "../http";

export default class TodoService {
  static async getTodos(userId: number) {
    return fetch(`${API_URL}/todos?userId=${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json());
  }

  static async postTodo(userId: number, title: string) {
    return fetch(`${API_URL}/todos/`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        timestamp: Math.floor(Date.now() / 1000),
        completed: false,
        userId: userId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }

  static async deleteTodo(id: number) {
    return fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }

  static async changeCompletedTodo(id: number, completed: boolean) {
    return fetch(`${API_URL}/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: completed,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
  }
}
