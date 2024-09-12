import { NextResponse } from "next/server";


// async function that handles GET requests
export async function GET() {
    try {
        const spreadsheetsURL = 'https://script.google.com/macros/s/AKfycbwHY7xRHzPhTGydAb2ibAhdUQmCrodedc7Rnme4wy3rY21W6d5haxPC-lxGkLugnrsCJw/exec'

        const response = await fetch(spreadsheetsURL, {
            method: 'GET',
        });

        if(!response.ok) {
            throw new Error('Error: response is invalid')
        }

        const data = await response.json()

        // return data as JSON
        return NextResponse.json({data}, {
            headers: {
               'Access-Control-Allow-Origin': '*',
            }
        })
    } catch(error) {
        console.error('Error fetching data', error)
        return NextResponse.json({response: 'Failted to fetch data from the CMS'})
    }
}