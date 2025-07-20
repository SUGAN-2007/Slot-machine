const prompt = require("prompt-sync")()

const rows = 3
const col = 3

const symbols = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const value = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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
 const spin = () => {
    const sym = []
    for (const [symbol , count] of Object.entries(symbols)) {
        for (let i = 0 ; i < count ; i++ ){
            sym.push(symbol)
        } 
    }
    const reel = []
    for (let i = 0 ; i < col ; i++){
        reel.push([])
        const reelsym = [...sym]
        for (let j = 0 ; j < rows ; j++ )
        {
            let randomin = Math. floor(Math.random() *  reelsym.length)
            let selected = reelsym[randomin]
            reel[i].push(selected)
            reelsym.splice(randomin, 1)
        }
    }
    return reel
 }

 const transpose = (reel) => {
        transreel = []
        for ( i = 0 ; i < rows ; i++) {
            transreel.push([])
            for (j=0 ; j < col ; j++)
            {
                transreel [ i ] .push(reel [j][i])
            }
        }
        return transreel
 }

 const printrow= (rows) => {
        for (const row of rows){
            let rowstr = ""
            for ( const [ i , value] of row.entries()) {
                rowstr += value
                if ( i != row.length-1){
                    rowstr += " | "
                }
            }
            console.log(rowstr)
        }
 }

 let bal = des()
 const lines = line()
 const bets=bet(bal,lines)
 const reels = spin()
 const tran = transpose(reels)
 printrow(tran)