const proficiencies = {
    "Css":4, 
    "Html":4, 
    "JavaScript":4, 
    "Saas":4,
    "Git":2, 
    "Bootstrap":2,
    "jQuery":3, 
    "Node":2,
    "Npm":2,
    "Figma":3,
    "React":2,
    "HandleBars":2,
    "Webpack":2,
    "Cypress":2,
    "Jest":1,
    "PWA":1,
    "Materialize":1
}
const technologies = Object.keys(proficiencies)
for (let i = 0; i < technologies.length; i++) {

    const $skillsContainer = document.createElement('li')
    document.querySelector('main ol').appendChild($skillsContainer)
    
    const $tagName = document.createElement('div')
    $tagName.textContent =  technologies[i]
    $skillsContainer.appendChild($tagName)
    

    const $valuesContainer = document.createElement('div')
    $valuesContainer.className = 'values-container'
    $skillsContainer.appendChild($valuesContainer)

    const SKILL_LIMIT = 5
    let assign = 0
    while (assign < SKILL_LIMIT) {
        const $value = document.createElement('div')
        $valuesContainer.appendChild($value)
        if(assign < proficiencies[technologies[i]]){
         $value.className = 'skill active'
        } else{
            $value.className = 'skill inactive'
        }
        assign++
    }
} 