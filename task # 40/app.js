function myAlbum(artistName, albumtitle) {
    return { artistName: artistName, albumtitle: albumtitle };
}
var album1 = myAlbum("Nadeem", "ghazala- bharan");
var album2 = myAlbum("kamal", "Roshan andhara");
var album3 = myAlbum("hassan", "khushboo");
console.log(album1);
console.log(album2);
console.log(album3);
// number of tracks
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum2("Nadeem", "ghazala- bharan", 40);
var album5 = myAlbum2("kamal", "Roshan andhara", 36);
var album6 = myAlbum2("hassan", "khushboo");
console.log(album4);
console.log(album5);
console.log(album6);
