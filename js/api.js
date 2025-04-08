
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Mon1que-4lv/js-developer-portfolio/refs/heads/patch-1/data/profile.json'
    const fetching = await fetch (url)
    return await fetching.json()
}


