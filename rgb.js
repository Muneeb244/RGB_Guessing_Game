let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let c3 = document.querySelector(".c3");
let c4 = document.querySelector(".c4");
let c5 = document.querySelector(".c5");
let c6 = document.querySelector(".c6");
let guess_c = document.querySelector(".guess");
let n_button = document.querySelector(".btn-1");
let hard = document.querySelector(".btn-2");
let easy = document.querySelector(".btn-3");
var guess;
let chk = true;



let c_c1 = "";
let c_c2 = "";
let c_c3 = "";
let c_c4 = "";
let c_c5 = "";
let c_c6 = "";

let color_setter = () =>{
    console.log(chk);
    c_c1 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    c_c2 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    c_c3 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    c_c4 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    c_c5 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    c_c6 = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    
    c1.style.backgroundColor = c_c1;
    c2.style.backgroundColor = c_c2;
    c3.style.backgroundColor = c_c3;
    c4.style.backgroundColor = c_c4;
    c5.style.backgroundColor = c_c5;
    c6.style.backgroundColor = c_c6;
    
    let color = [c_c1, c_c2, c_c3, c_c4, c_c5, c_c6];
    console.log("*************");
    color.forEach(element => {
        console.log(element);
    });
    console.log("*************");

    if(chk){
        //FOr easy mode
        guess = color[Math.floor(Math.random() * color.length)];
        guess_c.innerHTML = guess;
        c1.style.display = "block";
        c2.style.display = "block";
        c3.style.display = "block";
    }else{
        let sub_hard = [color[3], color[4], color[5]];
        guess = sub_hard[Math.floor(Math.random() * sub_hard.length)];
        guess_c.innerHTML = guess;
        console.log(guess);
    }
    c4.style.display = "block";
    c5.style.display = "block";
    c6.style.display = "block";
}
color_setter();


c1.addEventListener("click", function () {
    if (c_c1 == guess) {
        allSame();
        alert("You win!");
    } else {
        c1.style.display = "none";
    }
});

c2.addEventListener("click", function () {
    if (c_c2 == guess) {
        allSame();
        alert("You win!");
    } else {
        c2.style.display = "none";
    }
});

c3.addEventListener("click", function () {
    if (c_c3 == guess) {
        allSame();
        alert("You win!");
    } else {
        c3.style.display = "none";
    }
});

c4.addEventListener("click", function () {
    console.log(c_c4);
    if (c_c4 == guess) {
        allSame();
        alert("You win!");
    } else {
        c4.style.display = "none";
    }
});

c5.addEventListener("click", function () {
    console.log(c_c5);
    if (c_c5 == guess) {
        allSame();
        alert("You win!");
    } else {
        c5.style.display = "none";
    }
});

c6.addEventListener("click", function () {
    console.log(c_c6);
    if (c_c6 == guess) {
        allSame();
        alert("You win!");
    } else {
        c6.style.display = "none";
    }
});


function allSame() {
    c1.style.backgroundColor = guess;
    c2.style.backgroundColor = guess;
    c3.style.backgroundColor = guess;
    c4.style.backgroundColor = guess;
    c5.style.backgroundColor = guess;
    c6.style.backgroundColor = guess;
}


n_button.addEventListener("click", function () {
    color_setter();
});


hard.addEventListener("click", function () {
    hard.style.backgroundColor = "darkblue";
    hard.style.color = "white";

    easy.style.backgroundColor = "white";
    easy.style.color = "black";
    chk = false;
    color_setter();
    c1.style.display = "none";
    c2.style.display = "none";
    c3.style.display = "none";
});



easy.addEventListener("click", function () {
    easy.style.backgroundColor = "darkblue";
    easy.style.color = "white";

    hard.style.backgroundColor = "white";
    hard.style.color = "black";
    chk = true;
    c1.style.display = "block";
    c2.style.display = "block";
    c3.style.display = "block";
});