/*
PER DIV DIV AN
DIV YANG ISINYA 2 ORG class="duaPlayer", 3 org class="tigaPlayer", 4 org class="empatPlayer"
ID BUAT PLAYER 1= "idpemain1" DST

PATCH 0.2 WINNER CONDITION

NEXT PATCH:
SETTINGAN: NAMA, WAKTU, NYAWA, JUMLAH PLAYER;
*/




let words = [
    "tes"
];

//Condition
let win = "Nice";
let wrong = "Nope";
let unlist = "Kata Tidak Ada Di Daftar :v";
let lose = "Vine Boom";
let started = false;
let waktu = 3;
let countdownspeed = 100;

//setting
//nyawa
let nyawa = 3;
document.getElementById("nyawa").textContent = (`Nyawa: ${nyawa}`)

//player
let jumlahPlayer = 2;
document.getElementById("pemain").textContent = jumlahPlayer;

document.getElementById("tambahPemain").onclick = function(){
    if (jumlahPlayer < 4){
    jumlahPlayer++;

    document.getElementById("pemain").textContent = jumlahPlayer;
    console.log(jumlahPlayer)
    }
}

document.getElementById("kurangPemain").onclick = function(){
    if (jumlahPlayer > 2){
    jumlahPlayer--;

    document.getElementById("pemain").textContent = jumlahPlayer;
    console.log(jumlahPlayer)
    }
}

//Player
let giliran1 = true;
let giliran2 = false
let giliran3 = false;
let giliran4 = false; 
let p1 = false;
let p2 = false;
let p3 = false;
let p4 = false;

let textPlayer;

let namap1 = "Budi";
let nyawap1 = 3;

let namap2 = "Siti";
let nyawap2 = 3;

let namap3 = "Mamat";
let nyawap3 = 3;

let namap4 = "Wawan";
let nyawap4 = 3;

const playerContainer2 = document.querySelector(".duaPlayer");
const playerContainer3 = document.querySelector(".tigaPlayer");
const playerContainer4 = document.querySelector(".empatPlayer");

function createPlayer(addPlayer, textPlayer, textId, namaPlayer, nyawaPlayer){
    if (addPlayer){
        textPlayer = document.createElement("h2");
        textPlayer.id = textId;
        textPlayer.textContent = `${namaPlayer} (${nyawaPlayer})`;
        if (jumlahPlayer === 2){
        playerContainer2.appendChild(textPlayer);
        }
        if (jumlahPlayer === 3){
            playerContainer3.appendChild(textPlayer);
        }
        if (jumlahPlayer === 4){
            playerContainer4.appendChild(textPlayer);
        }
    }
}



function startGame(namaPlayer, nyawaPlayer, nyawaid){
    started = true;


    //letter
        let random = words[Math.floor(Math.random() * words.length)];
        let letter = Math.floor(Math.random() * (random.length - 1));
        let huruf = random[letter] + random[letter + 1];

    document.getElementById("myP").textContent = huruf
    document.getElementById("myh1").textContent = ("")
    document.getElementById("inp").value = ("")
    
    //Game
        //player

        document.getElementById("turn").textContent = (`Giliran: ${namaPlayer}`);

        //benar salah
    document.getElementById("sub").onclick = function() {
      let kata = document.getElementById("inp").value;
         if (words.includes(kata)) {
          if(kata.includes(huruf)){
             
            let menang = true;
            
                if(menang){
                 document.getElementById("myh1").textContent = win ;
                 clearInterval(interval);

                 empatPemain()
                }
                 setTimeout(() => {
                    document.getElementById("myh2").textContent = waktu + 1
                 }, 1000);

             
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

document.getElementById("myh2").textContent = waktu;
let countdown = waktu;

interval = setInterval(() => {
    if (countdown > 0) {
        countdown--; 
        document.getElementById("myh2").textContent = countdown;       
    } else {
        clearInterval(interval);

        // Mengurangi nyawa pemain
        nyawaPlayer--;
        document.getElementById(nyawaid).textContent = `${namaPlayer} (${nyawaPlayer})`;
        console.log(nyawaPlayer);

        // Sinkronisasi nyawa pemain
        if (namaPlayer === namap1) {
            nyawap1 = nyawaPlayer;
            if(nyawap1 <= 0){
                p1 = false;
            }
        } else if (namaPlayer === namap2) {
            nyawap2 = nyawaPlayer;
            if(nyawap2 <= 0){
                p2 = false;
            }
        } else if (namaPlayer === namap3) {
            nyawap3 = nyawaPlayer;
            if(nyawap3 <= 0){
                p3 = false;
            }
        } else if (namaPlayer === namap4) {
            nyawap4 = nyawaPlayer;
            if(nyawap4 <= 0){
                p4 = false;
            }
        }


        // Logika Pergantian Giliran
        switchTurn();
    }
}, countdownspeed);;
}

function gantiGiliran3(){
if (giliran1) {
    if (nyawap2 > 0) {
        if (nyawap3 > 0){
        setTimeout(() => {
                switch12();
            }, 1000);
        }
    } else {
        if (nyawap3 > 0){
            p2 = false;
            switch13();
        } else {
            clearInterval(interval);
            p3 = false;
        }
    }    
} else if (giliran2) {
    // Cek apakah Player 2 masih memiliki nyawa
    if (nyawap3 > 0) {
        if (nyawap1 > 0){
            switch23();
        }
    } else {
        if (nyawap1 > 0) {
            switch21();
        } else {
            clearInterval(interval);
            p1 = false;
        }
    }
} else if (giliran3) {
    if (nyawap1 > 0) {
        if (nyawap2 > 0){
            switch31();
        }
    } else {
        if (nyawap2 > 0){
            switch32();
        } else {
            clearInterval(interval);
            p2 = false;
        }
    }   
}
}

function gantiGiliran4(){
    if(jumlahPlayer === 4){
        if(giliran1){
            if(nyawap2 > 0){
            switch12();      
            } else {
                if(nyawap3 > 0){
                    p2 = false;
                    switch13();
                } else
                    if(nyawap4 > 0){
                        p3 = false;
                        p2 = false;
                        switch14();
                    } else {
                        clearInterval
                        p2 = false;
                        p3 = false
                        p4 = false;
                    }
                }
        } else if(giliran2){
            if(nyawap3 > 0) {
                switch23();
            } else {
                if(nyawap4 > 0){
                    p3 = false;
                    switch24()
                } else{
                    if(nyawap1 > 0){
                        p3 = false;
                        p4 = false;
                        switch21();
                    } else{
                        p1 = false;
                        p3 = false;
                        p4 = false;
                        clearInterval(interval)
                    }
                }
                
            }
        } else if(giliran3){
            if(nyawap4 > 0){
                switch34();
            } else {
                if(nyawap1 > 0){
                    p4 = false;
                    switch31();
                } else {
                    if(nyawap2 > 0){
                        p1 = false;
                        p4 = false;
                        switch32();
                    } else {
                        p1 = false;
                        p2 = false;
                        p4 = false;
                        clearInterval(interval);
                        
                    }
                }
            }    
        } else if(giliran4){
            if(nyawap1 > 0){
                switch41();
            } else {
                if(nyawap2 > 0){
                    p1 = false;
                    switch42();
                } else {
                    if(nyawap3 > 0){
                        p1 = false;
                        p2 = false;
                        switch43();
                    } else {
                        p1 = false;
                        p2 = false;
                        p3 = false;
                        clearInterval(interval);
                        
                    }
                }
            }
        }
    }
}

function duaPemain(){
    if (giliran1) {
        // Cek apakah Player 1 masih memiliki nyawa
        if (nyawap1 > 0) {
            switch12();
        } else {
            clearInterval(interval);
            winnerp1();
        }
    } else if (giliran2) {
        // Cek apakah Player 2 masih memiliki nyawa
        if (nyawap2 > 0) {
            switch21();
        } else {
            winnerp2()
        }
    }
}

function tigaPemain() {
if(p1 && p2){
    gantiGiliran3();
} else if(p2 && p3){
    gantiGiliran3();
} else if(p1 && p3) {
    gantiGiliran3();
} else if(!p1 && !p2) {
    console.log("p3 menang");
    winnerp3();
    clearInterval(interval);
} else if(!p2 && !p3) {
    console.log("p1 menang");
    winnerp1();
    clearInterval(interval);
} else if(!p1 && !p3) {
    console.log("p2 menang");
    winnerp2();
    clearInterval(interval);
} 
}


function empatPemain() {
    if (p1 && p2 && p3) {
        gantiGiliran4();
    } else if (p1 && p2 && p4) {
        gantiGiliran4();
    } else if (p1 && p3 && p4) {
        gantiGiliran4();
    } else if (p2 && p3 && p4) {
        gantiGiliran4();
    } else if(p1 && p2){
        gantiGiliran4();
    } else if(p2 && p3){
        gantiGiliran4();
    } else if(p1 && p3) {
        gantiGiliran4();
    } else if(p1 && p4){
        gantiGiliran4();
    } else if(p2 && p4){
        gantiGiliran4();
    } else if(p3 && p4){
        gantiGiliran4();
    }
    // Check if only 1 player is left, declare them the winner and stop the game
    else if (!p2 && !p3 && !p4) {
        console.log("p1 menang");
        winnerp1();
        clearInterval(interval);
    } else if (!p1 && !p3 && !p4) {
        console.log("p2 menang");
        winnerp2();
        clearInterval(interval);
    } else if (!p1 && !p2 && !p4) {
        console.log("p3 menang");
        winnerp3();
        clearInterval(interval);
    } else if (!p1 && !p2 && !p3) {
        console.log("p4 menang");
        winnerp4();
        clearInterval(interval);
    }
}

function switchTurn(){
    if(jumlahPlayer === 2){
     duaPemain();
    } else if (jumlahPlayer === 3){
     tigaPemain();
    } else if (jumlahPlayer === 4){
     empatPemain();
    }
 }


function switch12() {
    giliran1 = false;
    giliran2 = true;
    setTimeout(function() {
        startGame(namap2, nyawap2, "idpemain2");
    }, 1000);  // 1 second delay
}

function switch13() {
    giliran1 = false;
    giliran3 = true;
    setTimeout(function() {
        startGame(namap3, nyawap3, "idpemain3");
    }, 1000);
}

function switch14() {
    giliran1 = false;
    giliran4 = true;
    setTimeout(function() {
        startGame(namap4, nyawap4, "idpemain4");
    }, 1000);
}

function switch23() {
    giliran2 = false;
    giliran3 = true;
    setTimeout(function() {
        startGame(namap3, nyawap3, "idpemain3");
    }, 1000);
}

function switch24() {
    giliran2 = false;
    giliran4 = true;
    setTimeout(function() {
        startGame(namap4, nyawap4, "idpemain4");
    }, 1000);
}

function switch21() {
    giliran2 = false;
    giliran1 = true;
    setTimeout(function() {
        startGame(namap1, nyawap1, "idpemain1");
    }, 1000);
}

function switch31() {
    giliran3 = false;
    giliran1 = true;
    setTimeout(function() {
        startGame(namap1, nyawap1, "idpemain1");
    }, 1000);
}

function switch32() {
    giliran3 = false;
    giliran2 = true;
    setTimeout(function() {
        startGame(namap2, nyawap2, "idpemain2");
    }, 1000);
}

function switch34() {
    giliran3 = false;
    giliran4 = true;
    setTimeout(function() {
        startGame(namap4, nyawap4, "idpemain4");
    }, 1000);
}

function switch41() {
    giliran4 = false;
    giliran1 = true;
    setTimeout(function() {
        startGame(namap1, nyawap1, "idpemain1");
    }, 1000);
}

function switch42() {
    giliran4 = false;
    giliran2 = true;
    setTimeout(function() {
        startGame(namap2, nyawap2, "idpemain2");
    }, 1000);
}

function switch43() {
    giliran4 = false;
    giliran3 = true;
    setTimeout(function() {
        startGame(namap3, nyawap3, "idpemain3");
    }, 1000);
}

function winnerp1(){
    document.getElementById("menang").textContent = (`Menang: ${namap1}`);
}
function winnerp2(){
    document.getElementById("menang").textContent = (`Menang: ${namap2}`);
}
function winnerp3(){
    document.getElementById("menang").textContent = (`Menang: ${namap3}`);
}
function winnerp4(){
    document.getElementById("menang").textContent = (`Menang: ${namap4}`);
}



document.getElementById("log").onclick = function(){
    console.log(nyawap1)
    console.log(p1)
    console.log(nyawap2)
    console.log(p2)
    console.log(nyawap3)
    console.log(p3)
    console.log(nyawap4)
    console.log(p4)
}

//Start Button
document.getElementById("mulai").onclick = function(){
    if(!started){
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
        createPlayer(p3, "pemain3", "idpemain3", namap3, nyawap3);
        createPlayer(p4, "pemain4", "idpemain4", namap4, nyawap4);
        startGame(namap1, nyawap1, "idpemain1");
    }
}
