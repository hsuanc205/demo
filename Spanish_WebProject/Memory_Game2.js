document.addEventListener('DOMContentLoaded', ()=>{
    const cardArray=[
    
        {
            name: 'invierno',
            img: 'Memory_Game/15.png'
        },
        {
            name:'invierno',
            img:'Memory_Game/16.png'
        },
        {
            name:'noche',
            img:'Memory_Game/17.png'
        },
        {
            name:'noche',
            img:'Memory_Game/18.png'
        },    
        {
            name:'Spain',
            img:'Memory_Game/19.png'
        },
        {
            name:'Spain',
            img:'Memory_Game/20.png'
        },    {
            name:'verde',
            img:'Memory_Game/21.png'
        },
        {
            name:'verde',
            img:'Memory_Game/22.png'
        },
        {
            name:'tio',
            img:'Memory_Game/23.png'
        },
        {
            name:'tio',
            img:'Memory_Game/24.png'
        },
        {
            name:'banco',
            img:'Memory_Game/25.png'
        },
        {
            name:'banco',
            img:'Memory_Game/26.png'
        }
    ]    
    cardArray.sort(() => 0.5- Math.random())
    
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    
    
    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','Memory_Game/14.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }
    
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
    
        if(optionOneId == optionTwoId){
            cards[optionOneId].setAttribute('src', 'Memory_Game/14.png')
            cards[optionTwoId].setAttribute('src', 'Memory_Game/14.png')
            alert('You have clicked the same image!')
        }
    
        else if (cardsChosen[0]== cardsChosen[1]){
            cards[optionOneId].setAttribute('src', 'Memory_Game/13.png')
            cards[optionTwoId].setAttribute('src', 'Memory_Game/13.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            alert('You found a match')
        }
    
        else{
            cards[optionOneId].setAttribute('src', 'Memory_Game/14.png')
            cards[optionTwoId].setAttribute('src', 'Memory_Game/14.png')
            alert('Sorry, try again')
        }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
    }
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
        }
    }
    createBoard()
    })
    
    
    
    