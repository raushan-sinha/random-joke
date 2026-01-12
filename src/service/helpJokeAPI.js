export const JOKEAPIRESPONSE = async (jokeAPI) => {
    const response = await fetch(jokeAPI);

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Something went wrong!');
    console.log(data)

    return data;
}