import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// DOCUMENTATION THAT MAY HELP FIXING THE CURRENT PROBLEM
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching // fetch directly from frontend method
// https://nextjs.org/docs/app/building-your-application/routing/route-handlers // make a custom endpoint, and then fetch from here instead of fetching from actual API
// POSSIBLE FIX : 1. disable fetch caching or implement timestamp based cache busting here....

export const revalidate = 60; // current fix i have but not tested if it works yet,

export async function GET() {
    try {
        const spreadsheetsURL = 'https://script.google.com/macros/s/AKfycbwHY7xRHzPhTGydAb2ibAhdUQmCrodedc7Rnme4wy3rY21W6d5haxPC-lxGkLugnrsCJw/exec'

        const response = await fetch(spreadsheetsURL, {
            method: 'GET',
            cache: 'no-store'
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