// src/utils/fetchData.js
export const PAGE_SIZE = 6;

export async function getData({ queryKey }) {
    const [, page] = queryKey;
    const response = await fetch(
        `http://localhost:3000/api/properties?limit=${PAGE_SIZE}&page=${page}`,
        {
            headers: {
                Authorization: `users API-Key d27a8b28-e035-46d5-9185-add63eb82a0e`,
            },
        }
    );
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
}
