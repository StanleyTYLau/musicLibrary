function Library (name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
}

function Playlist (name){
    this.name = name;
    this.tracks = [];
    this.overallRating = 0;
    this.totalDuration = 0;
}

function Track (title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
}