import {getRecords} from "../utils/airtable.js";

export async function onRequestGet(context) {

    const airtable_key = context.env.AIRTABLE_KEY;
    const base = "appg1WC3k58wcqQ72";
    const view = context.env.AIRTABLE_VIEW;
    const lang = context.request.url.split("?")[1];
    const table = `events ${lang}`;

    const records = await getRecords(airtable_key, base, view, table);

    const events = await records.json();

    const response = events.records.reduce((acc, x) => {
        acc.push({
            title: x["fields"]["Title"],
            description: x["fields"]["Description"],
            date: x["fields"]["Date"],
            location: x["fields"]["Location"],
            href: x["fields"]["Href"],
        });
        return acc;
    }, []);

    return new Response(JSON.stringify(response));
}