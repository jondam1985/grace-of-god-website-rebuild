import { verses } from "../utils/verses-list";

export async function onRequestGet(context) {
    const verseList = verses;
    const apiKey = context.env.VERSE_KEY;
    const lang = context.request.url.split("?")[1];
    const bibleId = lang == "es" ? "592420522e16049f-01" : "de4e12af7f28f599-02"; 

    const dayOfYear = date =>
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

    const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}/search?query=${verseList[dayOfYear(new Date)]}`, {
        headers: {
            "api-key": apiKey,
        }
    })

    const data = await response.json();

    const verse = data["data"]["passages"][0];

    return new Response(JSON.stringify(verse));
}