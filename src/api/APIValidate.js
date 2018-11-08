export function APIValidate ({ resolve, reject }, response) {
    if (response.status !== 200) reject()
    if (!response.data.hasOwnProperty('status')) reject()
    if (response.data.status !== true) reject(response.data.message)

    resolve(response.data)
}
