

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

function updateExperience(profileData){
    const experience = document.getElementById('profile.exeperience')
    experience.innerText = profileData.experience
}

function updateImg(profileData){
    const imgHardSkills = document.getElementById('profile.skills.hardSkills')
    

    imgHardSkills.innerHTML = profileData.skills.imgHardSkills.map(skill => `<img src="${skill.logo}">${skill.nome}</img>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    

    languages.innerHTML = profileData.languages.map(language => `<li>${language}-${languages.nivel}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerText = profileData.portfolio
}

function updateCursos(profileData){
    const cursos = document.getElementById('profile.cursos')
    
    
    cursos.innerHTML = profileData.educacao.map(curso => `
        <li>
            <h3 class="title experiencia">${curso.nome}</h3>
            <p class="period">${curso.periodo.inicio}-${curso.periodo.fim}</p>
            <p>${curso.descricao}</p>
            <p>${curso.instituicao}</p>
            ${curso.certificados?.map(certificado => `<p></p><a href="${certificado.link}" target="_blank">${certificado.nome}</a>`).join('')}
        </li>`).join('')
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}



(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateCursos(profileData)
    updatePortfolio(profileData)
    updateLanguage(profileData)
    updateImg(profileData)
    updateExperience(profileData)
})()

