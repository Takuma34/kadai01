console.log("開始");

let win = 0;
let lose = 0;
let draw = 0;
let alertShown = false;

$("#str").click(function () {
  // 動きのきっかけの起点となるクラス名がクリックされたら
  $(".hide_area").addClass("fadeUp"); //隠れていた要素に動かしたいクラス名を付与
  $(".btn").addClass("disp_none"); //動きのきっかけの起点となるクラス名に画面非表示のクラス名付与
});

///*******   自分がグーを選んだ時　  ****////

$("#gu").on("click", function () {
  const z = Math.ceil(Math.random() * 4);
  console.log(z);
  let cp = "";
  if (z == 1) {
    cp = '<img src="img/gu.jpg">';
  }
  if (z == 2) {
    cp = '<img src="img/cho.jpg">';
  }
  if (z == 3) {
    cp = '<img src="img/par.jpg">';
  }
  if (z == 4) {
    cp = '<img src="img/gu.jpg">';
  }
  setTimeout(function () {
    $("#cp").html(cp);
  }, 1500);

  let sh = "";
  if (z == 1) {
    sh = "あいこ";
    draw++;
    console.log("あいこ");
  }
  if (z == 2) {
    sh = "勝ち";
    win++;
    console.log("勝ち");
  }
  if (z == 3) {
    sh = "負け";
    lose++;
    console.log("負け");
  }
  if (z == 4) {
    sh = "あいこ";
    draw++;
    console.log("あいこ");
  }

  setTimeout(function () {
    $("#sh").html(sh);
  }, 2000);

  if (win === 3 && !alertShown) {
    setTimeout(function () {
      alertShown = true;
      alert("こっちだ　ついて来い");
    }, 3000);

    setTimeout(function () {
      console.log(`勝ち：${win}、負け：${lose}、引き分け：${draw}`);
      $(".hide_ex").addClass("fadeUp");
      $("main").addClass("disp");
    }, 4000);
  }

  $("#cp").animate({ marginLeft: "100%" }, 1000, "linear", function () {
    $("#cp").animate({ marginLeft: "10%" }, 1000, "linear");
  });
});

///*******   自分がチョキを選んだ時　  ****////
$("#cho").on("click", function () {
  const z = Math.ceil(Math.random() * 4);
  console.log(z);
  let cp = "";
  if (z == 1) {
    cp = '<img src="img/gu.jpg">';
  }
  if (z == 2) {
    cp = '<img src="img/cho.jpg">';
  }
  if (z == 3) {
    cp = '<img src="img/par.jpg">';
  }
  if (z == 4) {
    cp = '<img src="img/gu.jpg">';
  }
  setTimeout(function () {
    $("#cp").html(cp);
  }, 1500);

  let sh = "";
  if (z == 1) {
    sh = "負け";
    lose++;
    console.log("負け");
  }
  if (z == 2) {
    sh = "あいこ";
    draw++;
    console.log("あいこ");
  }
  if (z == 3) {
    sh = "勝ち";
    win++;
    console.log("勝ち");
  }
  if (z == 4) {
    sh = "負け";
    lose++;
    console.log("負け");
  }
  setTimeout(function () {
    $("#sh").html(sh);
  }, 2000);

  if (win === 3 && !alertShown) {
    setTimeout(function () {
      alertShown = true;
      alert("こっちだ　ついて来い");
    }, 3000);

    setTimeout(function () {
      console.log(`勝ち：${win}、負け：${lose}、引き分け：${draw}`);
      $(".hide_ex").addClass("fadeUp");
      $("main").addClass("disp");
    }, 4000);
  }

  $("#cp").animate({ marginLeft: "100%" }, 1000, "linear", function () {
    $("#cp").animate({ marginLeft: "10%" }, 1000, "linear");
  });
});

///*******   自分がパーを選んだ時　****////
$("#par").on("click", function () {
  const z = Math.ceil(Math.random() * 4);
  console.log(z);
  let cp = "";
  if (z == 1) {
    cp = '<img src="img/gu.jpg">';
  }
  if (z == 2) {
    cp = '<img src="img/cho.jpg">';
  }
  if (z == 3) {
    cp = '<img src="img/par.jpg">';
  }
  if (z == 4) {
    cp = '<img src="img/gu.jpg">';
  }
  setTimeout(function () {
    $("#cp").html(cp);
  }, 1500);

  let sh = "";
  if (z == 1) {
    sh = "勝ち";
    win++;
    console.log("勝ち");
  }
  if (z == 2) {
    sh = "負け";
    lose++;
    console.log("負け");
  }
  if (z == 3) {
    sh = "あいこ";
    draw++;
    console.log("あいこ");
  }
  if (z == 4) {
    sh = "勝ち";
    win++;
    console.log("勝ち");
  }
  setTimeout(function () {
    $("#sh").html(sh);
  }, 2000);

  if (win === 3 && !alertShown) {
    setTimeout(function () {
      alertShown = true;
      alert("こっちだ　ついて来い");
    }, 3000);

    setTimeout(function () {
      console.log(`勝ち：${win}、負け：${lose}、引き分け：${draw}`);
      $(".hide_ex").addClass("fadeUp");
      $("main").addClass("disp");
    }, 4000);
  }

  $("#cp").animate({ marginLeft: "100%" }, 1000, "linear", function () {
    $("#cp").animate({ marginLeft: "10%" }, 1000, "linear");
  });
});

////  押したボタンのカラーリング　///

const buttons = document.querySelectorAll("li");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    buttons.forEach((button) => {
      button.classList.remove("selected");
    });
    event.target.classList.add("selected");
  });
});

/////   最終画面へ移行　　////

$("#sh").on("click", function () {
  alert("こっちだ　ついて来い");
  $(".hide_ex").addClass("fadeUp"); //隠れていた要素に動かしたいクラス名を付与
  $("main").addClass("disp");
});

///    最後の画面　　/////
$("#exgu, #excho,#expar").on("click", function () {
  setTimeout(function () {
    $(".hide_last").addClass("fadeUp"); //隠れていた要素に動かしたいクラス名を付与
    $("section").addClass("disp");
  }, 1500);
});

////    クリック後、要素の変更の試み　　////

// exgu.style.color = "";
// exgu.innerHTML = "<img src='img/Gon-san.jpeg' width='200px' height='200px'>";
// $('<img src="img/Gon-san.jpeg">').prependTo(".ex");

////   dom関数の確認　////
const exgu = document.querySelector("#exgu");
console.log(exgu.id);
console.log(exgu.innerHTML);

///   時間差の作成関数　///

// setTimeout(function () {
//   alert("ok");
// }, 2000);

$("#ball").css("top", "100px");

$(function () {
  setInterval(() => {
    $("#ball").css("left", Math.random() * 450 + "px");
    $("#ball").css("top", Math.random() * 450 + "px");
  }, 2000);
});

$("#ball").on("click", () => {
  point += 100;
  $("#point").html(point);
});
