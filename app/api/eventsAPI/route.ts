import { NextResponse } from "next/server";


// async function that handles GET requests
export async function GET() {
    try {
        const spreadsheetsURL = 'https://script.google.com/macros/s/AKfycbwTI2KBA4nfpoQtRhUG_KrXLv9QmbRA1ai1qiyzlVhAXgZJ1NN3NvTaV1TbCBBOoB4g-g/exec'

        const response = await fetch(spreadsheetsURL, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma' : 'no-cache',
            }
        });

        if(!response.ok) {
            throw new Error('Error: response is invalid')
        }

        const data = await response.json()

        // return data as JSON
        const res = NextResponse.json({data})
        res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        return res;
    } catch(error) {
        console.error('Error fetching data', error)
        return NextResponse.json({response: 'Failted to fetch data from the CMS'})
    }
}