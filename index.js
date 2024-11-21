//HALAMAN UTAMA
let halamanUtama = true;
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("mulai").addEventListener("click", gantiHalamanGame);
});
if ((halamanUtama = true)) {
  document.addEventListener("keydown", tombolTambahPemain);
}
//Mode
//Score
let modeScore = true;

//Completionist
let modeCompletionist = false;

//TOMBOL GANTI HALAMAN SETTING
document.getElementById("settings").onclick = gantiHalamanSetting;
document.querySelector("#buttonRight").textContent = ">>";
document.querySelector("#buttonLeft").textContent = "<<";
document.querySelector("#buttonRight").onclick = gantiModeRight;
document.querySelector("#buttonLeft").onclick = gantiModeLeft;

//TOMBOL TAMBAH-KURANG PLAYER
let jumlahPlayer;
let x = 0;
const namaContainer = document.querySelector(".modifyPlayer");

document.getElementById("tambahPemain").onclick = buatPemain;
document.getElementById("kurangPemain").onclick = hapusPemain;

//FUNCTION HALAMAN UTAMA
function gantiHalamanGame() {
  if (jumlahPlayer >= 2) {
    document.getElementById("gameIn").classList.add("start");
    document.getElementById("title").classList.remove("return");
    document.getElementById("title").classList.add("start");
    halamanUtama = false;
  }
}

function tombolTambahPemain(submit) {
  if (submit.key === "Enter") {
    if (halamanUtama) {
      buatPemain();
    }
  }
}

function gantiModeRight() {
  if ((modeScore = true)) {
    document.querySelector(".modeGameScore").classList.remove("active");
    document
      .querySelector(".modeGameCompletionist")
      .classList.remove("inactive");
    document.querySelector(".modeGameScore").classList.add("inactive");
    document.querySelector(".modeGameCompletionist").classList.add("active");

    modeScore = false;
    modeCompletionist = true;
    console.log("tes");
  }
}

function gantiModeLeft() {
  if (modeCompletionist) {
    document.querySelector(".modeGameScore").classList.remove("inactive");
    document.querySelector(".modeGameCompletionist").classList.remove("active");
    document.querySelector(".modeGameScore").classList.add("active");
    document.querySelector(".modeGameCompletionist").classList.add("inactive");
    modeScore = true;
    modeCompletionist = false;
  }
}

function gantiHalamanSetting() {
  document.getElementById("setting").classList.remove("return");
  document.getElementById("setting").classList.add("active");
  document.getElementById("title").classList.remove("return");
  document.getElementById("title").classList.add("active");
  halamanUtama = false;
}

function buatPemain() {
  if (inpNama.value === "") {
    console.log("tolong isi nama");
  } else {
    if (x < 4) {
      x++;
      nama = document.getElementById("inpNama").value;
      buatPlayer(`idpemain${x}`);
      console.log(x);

      jumlahPlayer = x;

      if (x === 1) {
        namap1 = document.getElementById("idpemain1").textContent;
        document.getElementById("2pemainSatu").textContent = namap1;
      } else if (x === 2) {
        namap1 = document.getElementById("idpemain1").textContent;
        namap2 = document.getElementById("idpemain2").textContent;

        document.getElementById("2pemainSatu").textContent = namap1;
        document.getElementById("2pemainDua").textContent = namap2;
      } else if (x === 3) {
        namap1 = document.getElementById("idpemain1").textContent;
        namap2 = document.getElementById("idpemain2").textContent;
        namap3 = document.getElementById("idpemain3").textContent;

        document.getElementById("3pemainSatu").textContent = namap1;
        document.getElementById("3pemainDua").textContent = namap2;
        document.getElementById("3pemainTiga").textContent = namap3;
      } else if (x === 4) {
        namap1 = document.getElementById("idpemain1").textContent;
        namap2 = document.getElementById("idpemain2").textContent;
        namap3 = document.getElementById("idpemain3").textContent;
        namap4 = document.getElementById("idpemain4").textContent;

        document.getElementById("4pemainSatu").textContent = namap1;
        document.getElementById("4pemainDua").textContent = namap2;
        document.getElementById("4pemainTiga").textContent = namap3;
        document.getElementById("4pemainEmpat").textContent = namap4;
      }
      document.getElementById("inpNama").value = "";
      return x;
    }
  }
}

function hapusPemain() {
  const removePemain = document.getElementById(`idpemain${x}`);
  namaContainer.removeChild(removePemain);
  x--;
  jumlahPlayer = x;
  return jumlahPlayer;
}

//HALAMAN SETTING
document.getElementById("kembali").onclick = gantiHalamanUtama;
//nyawa
let nyawa = 3;
document.getElementById("nyawa").textContent = `Nyawa: ${nyawa}`;
document.getElementById("tambahNyawa").onclick = tombolTambahNyawa;
document.getElementById("kurangNyawa").onclick = tombolKurangNyawa;

//waktu
let waktu = 5;
let countdownspeed = 1000;
document.getElementById("countdown").textContent = `Waktu: ${waktu}`;
document.getElementById("tambahWaktu").onclick = tombolTambahWaktu;
document.getElementById("kurangWaktu").onclick = tombolKurangWaktu;

//FUNCTION HALAMAN SETTING
function gantiHalamanUtama() {
  document.getElementById("setting").classList.remove("active");
  document.getElementById("setting").classList.add("return");
  document.getElementById("title").classList.remove("active");
  document.getElementById("title").classList.add("return");
  halamanUtama = true;
}

function tombolTambahNyawa() {
  if (nyawa < 5) {
    nyawa++;
    document.getElementById("nyawa").textContent = `Nyawa: ${nyawa}`;
    nyawap1 = nyawa;
    nyawap2 = nyawa;
    nyawap3 = nyawa;
    nyawap4 = nyawa;
  }
}

function tombolKurangNyawa() {
  if (nyawa > 1) {
    nyawa--;
    document.getElementById("nyawa").textContent = `Nyawa: ${nyawa}`;
    nyawap1 = nyawa;
    nyawap2 = nyawa;
    nyawap3 = nyawa;
    nyawap4 = nyawa;
  }
}

function tombolTambahWaktu() {
  if (waktu < 15) {
    waktu++;
    document.getElementById("countdown").textContent = `Waktu: ${waktu}`;
  }
}

function tombolKurangWaktu() {
  if (waktu > 3) {
    waktu--;
    document.getElementById("countdown").textContent = `Waktu: ${waktu}`;
  }
}

//HALAMAN GAME
//MODE SCORE
let score = 0;
let scoreP1 = score;
let scoreP2 = score;
let scoreP3 = score;
let scoreP4 = score;

document.querySelector("#scoreText1").textContent = "player";
document.querySelector("#scoreText2").textContent = "player2";
document.querySelector("#scoreText3").textContent = "player3";
document.querySelector("#scoreText4").textContent = "player4";

document.querySelector("#scoreValue1").textContent = scoreP1;
document.querySelector("#scoreValue2").textContent = scoreP2;
document.querySelector("#scoreValue3").textContent = scoreP3;
document.querySelector("#scoreValue4").textContent = scoreP4;
//MECHANIC
//RANDOM WORD
let words;
let rawData;
let rawWords;

fetch("kbbi.txt")
  .then((rawData) => rawData.text())
  .then((data) => {
    rawWords = data.split("\n");
    words = rawWords.filter(
      (kata) => !kata.includes(` `) && !kata.includes(`-`)
    );
  });

//Condition
let win = "Nice";
let wrong = "Nope";
let unlist = "Kata Tidak Ada Di Daftar :v";
let lose = "Vine Boom";
let started = false;

//Player
//GILIRAN
let giliran1 = false;
let giliran2 = false;
let giliran3 = false;
let giliran4 = false;

//PLAYER FLAG
let p1 = false;
let p2 = false;
let p4 = false;

//PLAYER CLASS VARIABLE
const playerContainer2 = document.querySelector(".duaPlayer");
const playerContainer3 = document.querySelector(".tigaPlayer");
const playerContainer4 = document.querySelector(".empatPlayer");

//FUNCTION HALAMAN GAME
//MULAI GAME
function startGame(namaPlayer, nyawaPlayer, nyawaid, scoreValue, scorePlayer) {
  started = true;

  //player character color switch
  setTimeout(() => {
    if (jumlahPlayer === 2) {
      if (giliran1) {
        document.getElementById("duaChPlayer1").classList.remove("inactive");
        document.getElementById("duaChPlayer1").classList.add("active");
        document.getElementById("duaChPlayer2").classList.remove("active");
      } else {
        document.getElementById("duaChPlayer2").classList.remove("inactive");
        document.getElementById("duaChPlayer2").classList.add("active");
        document.getElementById("duaChPlayer1").classList.remove("active");
      }
    }
    if (jumlahPlayer === 3) {
      if (giliran1) {
        document.getElementById("tigaChPlayer1").classList.remove("inactive");
        document.getElementById("tigaChPlayer1").classList.add("active");
      } else {
        document.getElementById("tigaChPlayer1").classList.add("inactive");
      }

      if (giliran2) {
        document.getElementById("tigaChPlayer2").classList.remove("inactive");
        document.getElementById("tigaChPlayer2").classList.add("active");
      } else {
        document.getElementById("tigaChPlayer2").classList.add("inactive");
      }

      if (giliran3) {
        document.getElementById("tigaChPlayer3").classList.remove("inactive");
        document.getElementById("tigaChPlayer3").classList.add("active");
      } else {
        document.getElementById("tigaChPlayer3").classList.add("inactive");
      }
    }
    if (jumlahPlayer === 4) {
      if (giliran1) {
        document.getElementById("empatChPlayer1").classList.remove("inactive");
        document.getElementById("empatChPlayer1").classList.add("active");
      } else {
        document.getElementById("empatChPlayer1").classList.add("inactive");
      }

      if (giliran2) {
        document.getElementById("empatChPlayer2").classList.remove("inactive");
        document.getElementById("empatChPlayer2").classList.add("active");
      } else {
        document.getElementById("empatChPlayer2").classList.add("inactive");
      }

      if (giliran3) {
        document.getElementById("empatChPlayer3").classList.remove("inactive");
        document.getElementById("empatChPlayer3").classList.add("active");
      } else {
        document.getElementById("empatChPlayer3").classList.add("inactive");
      }

      if (giliran4) {
        document.getElementById("empatChPlayer4").classList.remove("inactive");
        document.getElementById("empatChPlayer4").classList.add("active");
      } else {
        document.getElementById("empatChPlayer4").classList.add("inactive");
      }
    }
  }, 50);

  //random words
  let random = words[Math.floor(Math.random() * words.length)];
  let letter = Math.floor(Math.random() * (random.length - 2));
  let huruf;
  let fifty2 = Math.floor(Math.random() * 2);
  if (fifty2 === 1) {
    huruf = random[letter] + random[letter + 1];
  } else {
    huruf = random[letter] + random[letter + 1] + random[letter + 2];
  }
  document.getElementById("myP").textContent = huruf;
  document.getElementById("myh1").textContent = "";
  document.getElementById("inp").value = "";

  //Game
  //player
  //benar salah
  function jawab() {
    let kata = document.getElementById("inp").value;
    if (words.includes(kata)) {
      if (kata.includes(huruf)) {
        let menang = true;

        if (menang) {
          document.getElementById("myh1").textContent = win;
          clearInterval(interval);
          setTimeout(() => {
            document.getElementById("myh2").textContent = waktu + 1;
          }, 1000);

          let answerValue = kata.length * 10;
          scoreValue += answerValue;
          document.getElementById(scorePlayer).textContent = scoreValue;

          if (namaPlayer === namap1) {
            scoreP1 = scoreValue;
          } else if (namaPlayer === namap2) {
            scoreP2 = scoreValue;
          } else if (namaPlayer === namap3) {
            scoreP3 = scoreValue;
          } else if (namaPlayer === namap4) {
            scoreP4 = scoreValue;
          }
          switchTurn();
        }
      } else {
        document.getElementById("myh1").textContent = wrong;
      }
    } else {
      document.getElementById("myh1").textContent = unlist;
    }
  }

  document.addEventListener("keydown", function (submit) {
    if (submit.key === "Enter") {
      jawab();
    }
  });

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
      document.getElementById(
        nyawaid
      ).textContent = `${namaPlayer} (${nyawaPlayer})`;
      console.log(nyawaPlayer);

      // Sinkronisasi nyawa pemain
      if (namaPlayer === namap1) {
        nyawap1 = nyawaPlayer;
        if (nyawap1 <= 0) {
          p1 = false;
        }
      } else if (namaPlayer === namap2) {
        nyawap2 = nyawaPlayer;
        if (nyawap2 <= 0) {
          p2 = false;
        }
      } else if (namaPlayer === namap3) {
        nyawap3 = nyawaPlayer;
        if (nyawap3 <= 0) {
          p3 = false;
        }
      } else if (namaPlayer === namap4) {
        nyawap4 = nyawaPlayer;
        if (nyawap4 <= 0) {
          p4 = false;
        }
      }

      // Logika Pergantian Giliran
      switchTurn();
    }
  }, countdownspeed);
}

function switchTurn() {
  if (x === 2) {
    duaPemain();

    //nyawa update
    document.getElementById("2nyawaP1").textContent = nyawap1;
    document.getElementById("2nyawaP2").textContent = nyawap2;
  } else if (x === 3) {
    tigaPemain();

    //nyawa update
    document.getElementById("3nyawaP1").textContent = nyawap1;
    document.getElementById("3nyawaP2").textContent = nyawap2;
    document.getElementById("3nyawaP3").textContent = nyawap3;
  } else if (x === 4) {
    empatPemain();

    //nyawa update
    document.getElementById("4nyawaP1").textContent = nyawap1;
    document.getElementById("4nyawaP2").textContent = nyawap2;
    document.getElementById("4nyawaP3").textContent = nyawap3;
    document.getElementById("4nyawaP4").textContent = nyawap4;
  }
}

function gantiGiliran3() {
  if (giliran1) {
    if (nyawap2 > 0) {
      if (nyawap3 > 0) {
        setTimeout(() => {
          switch12();
        }, 1000);
      }
    } else {
      if (nyawap3 > 0) {
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
      if (nyawap1 > 0) {
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
      if (nyawap2 > 0) {
        switch31();
      }
    } else {
      if (nyawap2 > 0) {
        switch32();
      } else {
        clearInterval(interval);
        p2 = false;
      }
    }
  }
}

function gantiGiliran4() {
  if (jumlahPlayer === 4) {
    if (giliran1) {
      if (nyawap2 > 0) {
        switch12();
      } else {
        if (nyawap3 > 0) {
          p2 = false;
          switch13();
        } else if (nyawap4 > 0) {
          p3 = false;
          p2 = false;
          switch14();
        } else {
          clearInterval;
          p2 = false;
          p3 = false;
          p4 = false;
        }
      }
    } else if (giliran2) {
      if (nyawap3 > 0) {
        switch23();
      } else {
        if (nyawap4 > 0) {
          p3 = false;
          switch24();
        } else {
          if (nyawap1 > 0) {
            p3 = false;
            p4 = false;
            switch21();
          } else {
            p1 = false;
            p3 = false;
            p4 = false;
            clearInterval(interval);
          }
        }
      }
    } else if (giliran3) {
      if (nyawap4 > 0) {
        switch34();
      } else {
        if (nyawap1 > 0) {
          p4 = false;
          switch31();
        } else {
          if (nyawap2 > 0) {
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
    } else if (giliran4) {
      if (nyawap1 > 0) {
        switch41();
      } else {
        if (nyawap2 > 0) {
          p1 = false;
          switch42();
        } else {
          if (nyawap3 > 0) {
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

function duaPemain() {
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
      winnerp2();
      clearInterval(interval);
    }
  }
}

function tigaPemain() {
  if (p1 && p2) {
    gantiGiliran3();
  } else if (p2 && p3) {
    gantiGiliran3();
  } else if (p1 && p3) {
    gantiGiliran3();
  } else if (!p1 && !p2) {
    console.log("p3 menang");
    winnerp3();
    clearInterval(interval);
  } else if (!p2 && !p3) {
    console.log("p1 menang");
    winnerp1();
    clearInterval(interval);
  } else if (!p1 && !p3) {
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
  } else if (p1 && p2) {
    gantiGiliran4();
  } else if (p2 && p3) {
    gantiGiliran4();
  } else if (p1 && p3) {
    gantiGiliran4();
  } else if (p1 && p4) {
    gantiGiliran4();
  } else if (p2 && p4) {
    gantiGiliran4();
  } else if (p3 && p4) {
    gantiGiliran4();
  }

  //WINNER
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

//SWITCH PLAYERS
function switch12() {
  giliran1 = false;
  giliran2 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap2, nyawap2, "idpemain2", scoreP2, "scoreValue2");
    }
  }, 1000);
}

function switch13() {
  giliran1 = false;
  giliran3 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap3, nyawap3, "idpemain3", scoreP3, "scoreValue3");
    }
  }, 1000);
}

function switch14() {
  giliran1 = false;
  giliran4 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap4, nyawap4, "idpemain4", scoreP4, "scoreValue4");
    }
  }, 1000);
}

function switch23() {
  giliran2 = false;
  giliran3 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap3, nyawap3, "idpemain3", scoreP3, "scoreValue3");
    }
  }, 1000);
}

function switch24() {
  giliran2 = false;
  giliran4 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap4, nyawap4, "idpemain4", scoreP4, "scoreValue4");
    }
  }, 1000);
}

function switch21() {
  giliran2 = false;
  giliran1 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap1, nyawap1, "idpemain1", scoreP1, "scoreValue1");
    }
  }, 1000);
}

function switch31() {
  giliran3 = false;
  giliran1 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap1, nyawap1, "idpemain1", scoreP1, "scoreValue1");
    }
  }, 1000);
}

function switch32() {
  giliran3 = false;
  giliran2 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap2, nyawap2, "idpemain2", scoreP2, "scoreValue2");
    }
  }, 1000);
}

function switch34() {
  giliran3 = false;
  giliran4 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap4, nyawap4, "idpemain4", scoreP4, "scoreValue4");
    }
  }, 1000);
}

function switch41() {
  giliran4 = false;
  giliran1 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap1, nyawap1, "idpemain1", scoreP1, "scoreValue1");
    }
  }, 1000);
}

function switch42() {
  giliran4 = false;
  giliran2 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap2, nyawap2, "idpemain2", scoreP2, "scoreValue2");
    }
  }, 1000);
}

function switch43() {
  giliran4 = false;
  giliran3 = true;
  setTimeout(function () {
    if (modeScore) {
      startGame(namap3, nyawap3, "idpemain3", scoreP3, "scoreValue3");
    }
  }, 1000);
}

//WINNER OUTPUT
function winnerp1() {
  document.getElementById("menang").textContent = `PEMENANG: ${namap1}`;
}
function winnerp2() {
  document.getElementById("menang").textContent = `PEMENANG: ${namap2}`;
}
function winnerp3() {
  document.getElementById("menang").textContent = `PEMENANG: ${namap3}`;
}
function winnerp4() {
  document.getElementById("menang").textContent = `PEMENANG: ${namap4}`;
}

function hide2() {
  document.querySelector(".duaPlayer").remove();
}

function hide3() {
  document.querySelector(".tigaPlayer").remove();
}

function hide4() {
  document.querySelector(".empatPlayer").remove();
}

//HIDE PLAYER FUNCTION
function hidePlayer() {
  if (jumlahPlayer === 2) {
    hide3();
    hide4();
  } else if (jumlahPlayer === 3) {
    hide2();
    hide4();
  } else if (jumlahPlayer === 4) {
    hide2();
    hide3();
  }
}

//CREATE PLAYER
function buatPlayer(idPlayer) {
  const playerNama = document.createElement("h1");
  playerNama.id = idPlayer;
  playerNama.textContent = nama;
  namaContainer.appendChild(playerNama);
}

//RANDOM FIRST TURN PICKER
let randomPicker;
function pick() {
  randomPicker = Math.floor(Math.random() * jumlahPlayer + 1);
  return randomPicker;
}

//FUNCTION STARTING GAME FOR THE FIRST CYCLE
function startGameAwal() {
  if (randomPicker === 1) {
    startGame(namap1, nyawap1, "idpemain1", scoreP1, "scoreValue1");
    giliran1 = true;
  } else if (randomPicker === 2) {
    startGame(namap2, nyawap2, "idpemain2", scoreP2, "scoreValue2");
    giliran2 = true;
  } else if (randomPicker === 3) {
    startGame(namap3, nyawap3, "idpemain3", scoreP3, "scoreValue3");
    giliran3 = true;
  } else if (randomPicker === 4) {
    startGame(namap4, nyawap4, "idpemain4", scoreP4, "scoreValue4");
    giliran4 = true;
  }
  console.log(randomPicker);
}

//Start Button
document.getElementById("mulai").onclick = function () {
  if (jumlahPlayer > 1) {
    if (!started) {
      nyawap1 = nyawa;
      nyawap2 = nyawa;
      nyawap3 = nyawa;
      nyawap4 = nyawa;

      if (jumlahPlayer === 2) {
        p1 = true;
        p2 = true;

        document.getElementById("2nyawaP1").textContent = nyawap1;
        document.getElementById("2nyawaP2").textContent = nyawap2;
        document.getElementById("scoreText1").textContent = namap1;
        document.getElementById("scoreText2").textContent = namap2;

        document.querySelector(".scoreP1").classList.add("active");
        document.querySelector(".scoreP2").classList.add("active");
      } else if (jumlahPlayer === 3) {
        p1 = true;
        p2 = true;
        p3 = true;

        document.getElementById("3nyawaP1").textContent = nyawap1;
        document.getElementById("3nyawaP2").textContent = nyawap2;
        document.getElementById("3nyawaP3").textContent = nyawap3;
        document.getElementById("scoreText1").textContent = namap1;
        document.getElementById("scoreText2").textContent = namap2;
        document.getElementById("scoreText3").textContent = namap3;

        document.querySelector(".scoreP1").classList.add("active");
        document.querySelector(".scoreP2").classList.add("active");
        document.querySelector(".scoreP3").classList.add("active");
        document.getElementById("tigaChPlayer1").classList.add("inactive");
        document.getElementById("tigaChPlayer2").classList.add("inactive");
        document.getElementById("tigaChPlayer3").classList.add("inactive");
      } else if (jumlahPlayer === 4) {
        p1 = true;
        p2 = true;
        p3 = true;
        p4 = true;

        document.getElementById("4nyawaP1").textContent = nyawap1;
        document.getElementById("4nyawaP2").textContent = nyawap2;
        document.getElementById("4nyawaP3").textContent = nyawap3;
        document.getElementById("4nyawaP4").textContent = nyawap4;
        document.getElementById("scoreText1").textContent = namap1;
        document.getElementById("scoreText2").textContent = namap2;
        document.getElementById("scoreText3").textContent = namap3;
        document.getElementById("scoreText4").textContent = namap4;

        document.querySelector(".scoreP1").classList.add("active");
        document.querySelector(".scoreP2").classList.add("active");
        document.querySelector(".scoreP3").classList.add("active");
        document.querySelector(".scoreP4").classList.add("active");
      }
      hidePlayer();
      pick();
      startGameAwal();
    }
  }
};
