let words = [
    "apel", "pisang", "jeruk", "mangga", "anggur", "pepaya", "nanas", "semangka", "melon", "durian",
    "jambu", "sirsak", "nangka", "kelapa", "manggis", "rambutan", "duku", "kedondong", "salak", "markisa",
    "sawo", "belimbing", "ceri", "delima", "kiwi", "stroberi", "blueberry", "blackberry", "raspberry", "lemon",
    "limau", "cempedak", "kecapi", "mentimun", "timun suri", "blewah", "leci", "alpukat", "durian belanda", "buah naga",
    "kurma", "zaitun", "kesemek", "kismis", "bidara", "ceremai", "srikaya", "pir", "ciplukan", "tomat",
    "kucing", "anjing", "gajah", "harimau", "singa", "kuda", "sapi", "kerbau", "kambing", "domba",
    "ayam", "bebek", "burung", "ikan", "lumbalumba", "paus", "ular", "kelelawar", "katak", "buaya",
    "kadal", "rusa", "landak", "tupai", "kelinci", "serigala", "kanguru", "koala", "panda", "orangutan",
    "monyet", "gorila", "elang", "merpati", "rajawali", "flamingo", "hiu", "belut", "gurita", "bintang laut",
    "kura-kura", "penyu", "tapir", "badak", "zebra", "jerapah", "hamster", "tikus", "musang", "luwak"
];

//Condition
let win = "Nice";
let wrong = "Nope";
let unlist = "Kata Tidak Ada Di Daftar :v";
let lose = "Vine Boom";
let started = false;

//setting
//nyawa
let nyawa = 3;
document.getElementById("nyawa").textContent = (`Nyawa: ${nyawa}`)

//player
let jumlahPlayer = 1;
document.getElementById("pemain").textContent = jumlahPlayer;

document.getElementById("tambahPemain").onclick = function(){
    if (jumlahPlayer < 4){
    jumlahPlayer++;

    document.getElementById("pemain").textContent = jumlahPlayer;
    console.log(jumlahPlayer)
    }
}

document.getElementById("kurangPemain").onclick = function(){
    if (jumlahPlayer > 1){
    jumlahPlayer--;

    document.getElementById("pemain").textContent = jumlahPlayer;
    console.log(jumlahPlayer)
    }
    
}

//Player

let p1 = false;
let p2 = false;
let p3 = false;
let p4 = false;

let textPlayer;

let namap1 = "Budi";
let nyawap1 = "3";


let namap2 = "Siti";
let nyawap2 = "3";

let namap3 = "Mamat";
let nyawap3 = "3";

let namap4 = "Wawan";
let nyawap4 = "3";



function createPlayer(addPlayer, textPlayer, textId, namaPlayer, nyawaPlayer,){
    if (addPlayer){
        textPlayer = document.createElement("h2");
        textPlayer.id = textId;
        textPlayer.textContent = `${namaPlayer} (${nyawaPlayer})`; 
        document.body.appendChild(textPlayer);
    }
}

function startGame(){
    started = true;

    
    //player
    if (jumlahPlayer === 1) {
        p1 = true;
        } else if (jumlahPlayer === 2) {
        p1 = true;
        p2 = true;
        } else if (jumlahPlayer === 3) {
        p1 = true;
        p2 = true;
        p3 = true;
        } else if (jumlahPlayer === 4) {
        p1 = true;
        p2 = true;
        p3 = true;
        p4 = true;
        }


createPlayer(p1, "pemain1", "idpemain1", namap1, nyawap1);

createPlayer(p2, "pemain2", "idpemain2", namap2, nyawap2);

createPlayer(p3, "pemain3", "idpemain4", namap3, nyawap3);

createPlayer(p4, "pemain4", "idpemain4", namap4, nyawap4);




    //letter
        let random = words[Math.floor(Math.random() * words.length)];
        let letter = Math.floor(Math.random() * (random.length - 1));
        let huruf = random[letter] + random[letter + 1];

    document.getElementById("myP").textContent = huruf
    document.getElementById("myh1").textContent = ("")
    document.getElementById("inp").value = ("")
    
    //Game
        //player
    if(p1){
        document.getElementById("turn").textContent = (`Giliran: ${namap1}`);
    }






    document.getElementById("sub").onclick = function() {
      let kata = document.getElementById("inp").value;
         if (words.includes(kata)) {
          if(kata.includes(huruf)){
             
            let menang = true;
            
                if(menang = true){
                 document.getElementById("myh1").textContent = win ;
                 clearInterval(interval);

                 setTimeout(() => {
                    startGame()
                 }, 2000);
                 setTimeout(() => {
                    document.getElementById("myh2").textContent = waktu + 1
                 }, 1000);
                 

                }
            

             
             } else {
            document.getElementById("myh1").textContent = wrong;
            }
        } else {
        document.getElementById("myh1").textContent = unlist;
        }
    }

//console
console.log(random);
console.log(letter);
console.log(huruf);

//countdown
let waktu = 5;
document.getElementById("myh2").textContent = waktu;
let countdown = waktu;

interval = setInterval(() => {
    if(countdown > 0){
        countdown -= 1; 
        document.getElementById("myh2").textContent = countdown;       
    } else {
        clearInterval(interval)
    }

    if(countdown == 0){
        document.getElementById("myh1").textContent = lose;

        //nyawa
        nyawap1--;
        nyawa--;
        document.getElementById("nyawa").textContent = (`Nyawa: ${nyawa}`);
        document.getElementById("pemain1").textContent = `${namaPlayer} (${nyawaPlayer})`;
        console.log(nyawa);
        console.log(nyawap1);

        clearInterval(interval)
        started = false
        mulai = document.createElement("button")
        mulai.id = "mulai"
        document.getElementById("mulai").textContent = ("Mulai Lagi");

        


    } 
}, 1000);
}








//Start Button
document.getElementById("mulai").onclick = function(){
    if(!started){
        startGame();
}
}



/*
Mechanics:
Jawab:
per player gantian menjawab






*/