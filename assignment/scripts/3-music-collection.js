console.log('***** Music Collection *****')
// create empty array for record collection
let collection = [];
// create albums as objects with input parameters
// const album1 = {
//     title: 'Live Dead',
//     artist: 'Grateful Dead',
//     yearPublished: 1969
// }
// const album2 = {
//     title: 'Loaded',
//     artist: 'Velvet Underground',
//     yearPublished: 1970
// }
// const album3 = {
//     title: 'American Beauty',
//     artist: 'Grateful Dead',
//     yearPublished: 1970
// }
// const album4 = {
//     title: 'Songs in the Key of Life',
//     artist: 'Stevie Wonder',
//     yearPublished: 1976
// }
// const album5 = {
//     title: 'Remain in Light',
//     artist: 'Talking Heads',
//     yearPublished: 1980
// }
// const album6 = {
//     title: 'A Deeper Understanding',
//     artist: 'The War On Drugs',
//     yearPublished: 2017
// }
// // create function to add albums to the collection array
// function addToCollection(album){
//    // add albums to the end of the array
//     collection.push(album);
//     // return album
//     return album;
// }
// // add album1 to collection
// addToCollection(album1);
// // test add album1
// console.log('in addToCollection- should contain properties for album1:', album1);
// // add album2 to collection
// addToCollection(album2);
// // test add album2
// console.log('in addToCollection- should contain properties for album2:', album2);
// // add album3
// addToCollection(album3);
// // test add album3
// console.log('in addToCollection- should contain properties for album3:', album3);
// // add album4
// addToCollection(album4);
// // test add album4
// console.log('in addToCollection- should contain properties for album4:', album4);
// // add album5
// addToCollection(album5);
// // test add album5
// console.log('in addToCollection- should contain properties for album5:', album5);
// // add album6
// addToCollection(album6);
// // test add album6
// console.log('in addToCollection- should contain properties for album6:', album6);
// // check contents of collection array
// console.log(collection);
// create function to show contents of a record collection in an array
// function showCollection(collection){
   
//     let albumInfo = `${album1.title} by ${album1.artist}, published in ${album1.yearPublished}`;
//     let i=0;
//     while(i<collection.length){
//         return albumInfo;
//     }
// }
// check the number of records in the collection array
// console.log(collection.length);

// create a function to take in the album's title, artist, and year published
 function addToCollection(title, artist, yearPublished) {
        // create a new object album having the above properties
        let album = {
            Title: title,
            Artist: artist,
            Year: yearPublished
        }
        // add the album to the collection array
        collection.push(album);
        // return the newly created album
        return album;
    } // end addToCollection
// add 6 albums to the collection array
console.log(addToCollection('Live Dead', 'Grateful Dead', 1969));
console.log(addToCollection('Loaded', 'Velvet Underground', 1970));
console.log(addToCollection('American Beauty', 'Grateful Dead', 1970));
console.log(addToCollection('Songs in the Key of Life', 'Stevie Wonder', 1976));
console.log(addToCollection('Remain in Light', 'Talking Heads', 1980));
console.log(addToCollection('A Deeper Understanding', 'The War on Drugs', 2017));

// check contents of collection array
console.log('Record collection is now:', collection);

// create function to take in array parameter
function showCollection(array){
    // show number of items in the array
    console.log(array.length);
    // loop over albums in the array and show properties of each album
    for(album of array){
        console.log(`${album.Title} by ${album.Artist}, published in ${album.Year}.`);
    }
    // return contents of array
    return array;
}
// test showCollection function
console.log(showCollection(collection));

// create function to take in artist 
function findByArtist(artist){
    // make empty array for matching artists
    let array = [];
    // loop to find matching artists
    for(album of collection){
        if(artist === album.Artist ){
            array.push(album);
        } 
    } return array;
}
// test findByArtist
console.log(findByArtist('Grateful Dead'));
console.log(findByArtist('Bob Dylan'));

