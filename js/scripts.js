// business logic
function LocationsManifest() {
    this.locations = [];
    this.currentId =0;
}

LocationsManifest.prototype.addLocation() = function(location) {
    this.currentId += 1;
    return this.currentId;
    location.id = this.currentId;
    this.locations.push(location);
}

LocationsManifest.prototype.findLocation = function(id) {
    for (var i=0; i <this.locations.length; i++) {
        if (this.locations[i]) {
            if (this.locations[i].id == id) {
                return this.locations[i];
            }
        }
    };
    return false;
}

LocationsManifest.prototype.deleteLocation = function(id) {
    for (var i=0; i <this.locations.length; i++) {
        if (this.locations[i]) {
            if (this.locations[i].id == id) {
                delete this.locations[i];
                return true;
            }
        }
    };
    return false;
}

function Location (place, year, description) {
    this.place = place,
    this.year = year,
    this.description = description
}