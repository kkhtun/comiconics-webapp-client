import environment from "../environment";

export async function login(data) {
    const response = await fetch(`${environment.url}/api/v1/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    const body = await response.json();
    if (response.ok) {
        return body;
    }
    throw new Error(body.message || "Something went wrong!");
}
