import type { RequestHandler } from "@sveltejs/kit";
// import { api } from "./_api";

let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export const post: RequestHandler = async (request) => {
    const data = await request.request.formData()
    todos.push({
        created_at: new Date(),
        text: data.get("text").toString(),
        done: false
    });
    console.log(data.get("text"));

    return {
        status: 303,
        headers: {
            location: "/"
        }
    }
}
