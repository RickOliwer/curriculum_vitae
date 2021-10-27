export async function Fetcher(url) {

    const response = await fetch(url)

    const json = response.json()

    return json
}