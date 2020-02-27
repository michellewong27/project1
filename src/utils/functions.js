export function findWinner(boxes){
    //possible array winning combos
    const rows = [
        [0,1,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    //iterate over the array with winning combos
    for (let i=0; i<rows.length; i++) {
        const [a,b,c] = rows[i]

        //check if game board contains any winning combo
        if (boxes[a] && boxes[a] === boxes[b] &&boxes[a]===boxes[c]){
            //return the winner
            return boxes[a]
        }
        else {
            return null
        }
    }
}

export function areAllBoxesClicked(boxes){
    //set variable to store # of clicked boxes
    let count = 0;

    boxes.forEach(function(item){
        //check if box is clicked( aka isnt null )
        if (item !== null) {
            count++
        }
    })
    //check if all boxes are clicked 
    if (count === 9){
        return true
    } else {
        return false
    }
}