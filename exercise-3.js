let schoolNotes = [ 6, 8, 9, 2, 5, 10 ];

let total = 0;

const sum = ( note ) => {

for ( const value of note ) {
    total += value;
}

return total;

}

sum( schoolNotes );

const averages = ( average ) => {
    return average / schoolNotes.length;
};

console.log(averages( total ));



