

function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const person = document.getElementById('profile.person')
    person.innerText = profileData.person

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const contato = document.getElementById('profile.contato')
    contato.innerText = profileData.contato
    contato.href = `tel:${profileData.contato}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateProfileInfo(profileData){
    const experience = document.getElementById('profile.exeperience')
    experience.innerText = profileData.experience
}

function updateProfileInfo(profileData){
    const imgHardSkills = document.getElementById('profile.skills.hardSkills')
    imgHardSkills.innerText = profileData.imgHardSkills
}

function updateProfileInfo(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerText = profileData.languages
}

function updateProfileInfo(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerText = profileData.portfolio
}

function updateProfileInfo(profileData){
    const cursos = document.getElementById('profile.cursos')
    cursos.innerText = profileData.cursos
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')


    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}



(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
})()

