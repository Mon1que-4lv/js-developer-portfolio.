
async function fetchProfileData() {
    const url ='https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/refs/heads/projeto-base/data/profile.json'
    const fetching = await fecht (url)
    return await fetching.json()
}


