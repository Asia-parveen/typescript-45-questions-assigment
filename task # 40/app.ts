//Q40- Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.




function myAlbum (artistName: string, albumtitle: string ){
    return {artistName , albumtitle  };

}
let album1 = myAlbum ("Nadeem","ghazala- bharan" );

let album2 = myAlbum ("kamal","Roshan andhara" );
let album3 = myAlbum ("hassan","khushboo" );

console.log(album1);
console.log(album2);
console.log(album3);

// number of tracks
function myAlbum2 (artistName: string, albumTitle: string, numberOfTracks?:number ){
    return {artistName , albumTitle, numberOfTracks }

}
let album4 = myAlbum2 ("Nadeem","ghazala- bharan",40 );

let album5 = myAlbum2 ("kamal","Roshan andhara",36 );
let album6 = myAlbum2 ("hassan","khushboo" );

console.log(album4);
console.log(album5);
console.log(album6);