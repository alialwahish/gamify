<script>

var winnie = {character:"Winnie The Pooh",greet:function(){return ("Winnie greeting")}};
var tigger = {character:"Tigger",greet:function(){return ("Tigger greeting")}};
var christopher={character:"Christopher Robin",greet:function(){return ("Christopher greeting")}}
var owl={character:"Owl",greet:function(){return ("Owl greeting")}}
var piglet={character:"Piglet",greet:function(){return ("Piglet greeting")}}
var gopher= {character:"Gopher",greet:function(){return ("Gopher greeting")}};
var bees= {character:"Bees",greet:function(){return ("Bees greeting")}};
var rabbit={character:"Rabbit",greet:function(){return ("Rabbit greeting")}};
var kanga={character:"Kanga",greet:function(){return ("Kanga greeting")}};
var eeyore={character:"Eeyore",greet:function(){return ("Eeyore greeting")}};
var heffalumps={character:"Heffalumps",greet:function(){return ("Heffalumps greeting")}}
var locations=[winnie,tigger,christopher,owl,piglet,gopher,bees,rabbit,kanga,eeyore,heffalumps]
winnie.south=tigger;
winnie.north=christopher;
winnie.west=piglet;
winnie.east=bees;

tigger.north=winnie;

bees.north=rabbit;
bees.west=winnie;

gopher.west=rabbit;

rabbit.south=bees;
rabbit.east=gopher;
rabbit.west=christopher;

piglet.north=owl;
piglet.east=winnie;

owl.south=piglet;
owl.east=christopher;

christopher.south=winnie;
christopher.east=rabbit;
christopher.west=owl;
christopher.north=kanga;

kanga.south=christopher;
kanga.north=eeyore;

eeyore.south=kanga;
eeyore.east=heffalumps;

heffalumps.west=eeyore;



var player={location:tigger , honey:false}
mission()
function mission(){
    console.log("Winnie The Poo is looking for honey! can you help?")
    player.location=locations[Math.floor(Math.random() * 10)]
    console.log("You are now at "+player.location.character+" House\n"+player.location.greet())
    return player;
}


function drop(){
    if (player.location !=winnie){
        return "This is not the right place to drop honey"
    }
    else{
        player.honey=true
        return "congradulation you deleverd the honey to Winnie "
    }
}

function pickup(){
    if (player.location !=bees){
        return "This is not the right place to pickup honey"
    }
    else{
        player.honey=true
        return "congradulation you picked up honey "
    }
}




function move(str){
    if(str=="north" && player.location.north){
    player.location=player.location.north
    }
    else if(str=="east" && player.location.east){
    player.location=player.location.east
    }

    else if(str=="west" && player.location.west){
    player.location=player.location.west
    }
    else if(str=="south" && player.location.south){
    player.location=player.location.south
    }
    else{
        console.log("Not a Valid direction")
        return false;
    } 

    return "You are now at "+player.location.character+" House\n"+player.location.greet()
}


</script>
