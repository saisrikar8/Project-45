class Game{
    constructor(){
    }
    play(){
        image(road, 0, 0, width, height/6)
        image(parkLot, 0, (height/6)*1, width-100, (height/5)*4);
    }
    placeNpc(){
        /*
        var remove = Math.round(random(parkpos.length));
        parkpos.splice(remove,remove);
        for (var i = 0; i < parkpos.length; i++){
            var pos = parkpos[i];
            var car = createSprite(pos.x, pos.y, 50, 50);
            car.addImage(carImages[i]);
            pos.sprite = car;
        }
        */
    }
}