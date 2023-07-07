console.log('***** Music Collection *****')
// create empty array for record collection
let collection = [];
// create albums as objects with input parameters
const album1 = {
    title: 'Live Dead',
    artist: 'Grateful Dead',
    yearPublished: 1969
}
const album2 = {
    title: 'Loaded',
    artist: 'Velvet Underground',
    yearPublished: 1970
}
const album3 = {
    title: 'American Beauty',
    artist: 'Grateful Dead',
    yearPublished: 1970
}
const album4 = {
    title: 'Songs in the Key of Life',
    artist: 'Stevie Wonder',
    yearPublished: 1976
}
const album5 = {
    title: 'Remain in Light',
    artist: 'Talking Heads',
    yearPublished: 1980
}
const album6 = {
    title: 'A Deeper Understanding',
    artist: 'The War On Drugs',
    yearPublished: 2017
}
// create function to add albums to the collection array
function addToCollection(album){
   // add albums to the end of the array
    collection.push(album);
    // return album
    return collection;
}
// add album1 to collection
addToCollection(album1);
// test add album1
console.log('in addToCollection- should contain properties for album1:', collection);
// add album2 to collection
addToCollection(album2);
// test add album2
console.log('in addToCollection- should contain properties for album1, album2:', collection);
// add album3
addToCollection(album3);
// test add album3
console.log('in addToCollection- should contain properties for album1, album2, album3:', collection);
// add album4
addToCollection(album4);
// test add album4
console.log('in addToCollection- should contain properties for album1, album2, album3, album4:', collection);
// add album5
addToCollection(album5);
// test add album5
console.log('in addToCollection- should contain properties for album1, album2, album3, album4, album5:', collection);
// add album6
addToCollection(album6);
// test add album6
console.log('in addToCollection- should contain properties for album1, album2, album3, album4, album5, album6 :', collection);
