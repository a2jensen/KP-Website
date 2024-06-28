// import google api
/*
import { google } from "googleapis";
import { apiFile } from "./kp-api-test-50011a213038";

// fetch sheet data
export const getSheetsData = async () => {
    // sheet data
    const auth = new google.auth.GoogleAuth ({
        credientials : {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        },
        keyFile: apiFile,
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    })

    const sheets = google.sheets({version: "v4", auth: await auth.getClient()})
    // range of where to read values
    const range = "Sheet!A:Z"

    // fetch data here 
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        })
        return response.data.values
    } catch(error){
        console.error("Error fetching sheets data:", error)
        return []
    }
} */