// Can replace this script for any code you want to test ESLint with.

// Test Cases 
const animals1 = ['lion', 'monkey', 'deer', 'snake', 'elephant'];
const animals2 = ['frog', 'horse', 'spider', 'ant'];
const animals3 = ['lion', 'lion', 'lion', 'snake'];

// Edge Cases
const animals4 = [];
const animals5 = 50;
const animals6 = ['Lion', 'DEER', 'ElePhAnt', 'ANT'];

//function 
function checkLegs(animals){
    let count = 0; 
    for (const legs of animals){
        const stringLower = legs.toLowerCase(); 
        if (stringLower === 'lion' || stringLower === 'deer' || stringLower === 'elephant' || stringLower === 'horse' || stringLower === 'dog' || stringLower === 'cat'){
            count += 1 
        } else {
            count 
        }
    } 
    
    return count 

}

console.log(checkLegs(animals1))