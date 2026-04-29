export const TilesData = async () => {
    const res = await fetch ('https://assigment-08-chi.vercel.app/data.json')
    const data = await res.json()
    return data
}