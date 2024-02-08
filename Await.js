const api = 'https://api.publicapis.org/entries';

async function HandleApi() {
    try {
        const jsonData = await fetch(api);
        const data = await jsonData.json();
        return data; // Return the entries array from the data
    } catch (err) {
        console.log(err);
    }
}

async function showData() {
    const result = await HandleApi();
    if (!result) {
        console.log("No data Found");
        return;
    }
    console.log(result);
}

showData();
