const getRecords = async (airtable_key, base, view, table) => {
    return fetch(`https://api.airtable.com/v0/${base}/${encodeURI(table)}?view=${view}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${airtable_key}`,
            'Content-type': `application/json`
        }
    })
}

export {
    getRecords,
}