function Library (name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
    this.playlists.push(playlist);
}

function Playlist (name){
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;
}

Playlist.prototype.addTrack = function(track) {
    this.tracks.push(track);
    this.totalDuration = 0;
    let totalRating = 0;

    for (let i of this.tracks){
        this.totalDuration += i.length;
        totalRating += i.rating;
    }
    
    this.overallRating = totalRating / this.tracks.length;
}

function Track (title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
}

let stanLibrary = new Library("Cool Music","Stanley");
console.log(stanLibrary);

let track1 = new Track("Wannabe", 5, 120);
let track2 = new Track("Spice Up Your Life", 7, 300);
let track3 = new Track("Spice World", 10, 330);

let playlist1 = new Playlist("Spice Girls PL");
playlist1.addTrack(track1);
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
stanLibrary.addPlaylist(playlist1);

console.log(stanLibrary);
console.log(playlist1);