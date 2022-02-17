let todos: Todo[] = [];

export const api = (request, todo?: Todo) => {
    let body = {};
    let status = 500;

    switch (request.request.method.toUpperCase()) {
        case "GET":
            body = todos;
            status = 200;
            break;

        case "POST":
            todos.push(todo);
            return {
                status: 303,
                headers: {
                    location: "/"
                }
            }

        case "DELETE":
            todos = todos.filter(todo => todo.uid !== request.params.uid)
            status = 200;
            break;

        default:
            break;
    }

    if(request.request.method.toUpperCase() !== "GET" &&
        request.request.headers.get("accept") !== "application/json") {
        return {
            status: 303,
            headers: {
                location: "/"
            }
        }
    }

    return {
        status,
        body
    }
} 