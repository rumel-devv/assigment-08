export const TilesData = async () => {
    const res = await fetch ('https://assigment-08-chi.vercel.app/data.json',{cache: "no-store"});
    const data = await res.json();
    return data ;
}