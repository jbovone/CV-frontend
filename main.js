const proficiencies = {
    "css":7, 
    "html":6, 
    "JavaScript":7, 
    "Saas":6,
    "Git":5, 
    "Bootstrap":4,
    "jQuery":4, 
    "Node":4,
    "Npm":4,
    "Figma":4,
    "React":3,
    "HandleBars":3,
    "Webpack":3,
    "Cypress":3,
    "Jest":2,
    "PWA":1,
    "Materialize":1
}
const technologies = Object.keys(proficiencies)
for (let i = 0; i < technologies.length; i++) {
    const $skillsContainer = document.createElement('li')
    const $tagName = document.createElement('div')
    $tagName.textContent =  technologies[i]
    $skillsContainer.appendChild($tagName)
    document.querySelector('main ol').appendChild($skillsContainer)
    const $valuesContainer = document.createElement('div')
    $skillsContainer.appendChild($valuesContainer)
    const SKILL_LIMIT = 10
    let assign = 0
    while (assign <= SKILL_LIMIT) {
        const $value = document.createElement('div')
        $valuesContainer.appendChild($value)
        if(assign < proficiencies[technologies[i]]){
         $value.className = 'active'
        } else{
            $value.className = 'inactive'
        }
        assign++
    }
} 