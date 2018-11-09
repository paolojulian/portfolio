export function APIValidate ({ resolve, reject }, response) {
    if (response.status !== 200) reject()

    resolve(response.data)
}
