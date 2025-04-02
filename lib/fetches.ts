const spreadsheetsURL = process.env.SPREADSHEET_URL as string;

export async function fetchSpreadsheetsData() {
    try {
            if (!spreadsheetsURL) {
                throw new Error("SPREADSHEET_URL missing.");
            }
    
            const response = await fetch(spreadsheetsURL, {
                method: 'GET',
                cache: 'no-store'
            });
    
            if(!response.ok) {
                throw new Error('Error: response is invalid')
            }
    
            const data = await response.json()
    
            return data.data
        } catch(error) {
            console.error('Error fetching data', error)
        }
}