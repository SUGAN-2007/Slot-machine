const prompt = require("prompt-sync")()

const des = () => {
    while(true){

    const deposit = prompt("enter the deposit: $") 
    const numdes = parseFloat(deposit)

    if(isNaN(numdes) || numdes<=0){
        console.log("invalid deposit")
    }
    else{
        return numdes
    }
}
} 
const line = () =>{
    while(true){

    const lines = prompt("enter the no of lines: ") 
    const numoflines = Number(lines)
    if(isNaN(numoflines) || numoflines<=0 || numoflines > 3)  {
        console.log("invalid no of lines")
    }
    else{
        return numoflines
    }
}
}

const bet = (bal , lines) => {
    while(true){

    const bet = prompt("enter the bet: ") 
    const bets = parseFloat(bet)
    if (isNaN(bets) || bets<=0 || bets  > (bal / lines)){
             console.log("invalid bets")
    }
    else{
        return bets
    }
    }
}

let bal = des()
const lines = line()
const bets = bet(bal,lines)