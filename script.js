let card = [],
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  suit = ["♦", "♥", "♠", "♣"],
  counter = 0;
(d = document), ($sorted = d.getElementById("display"));

let cardGen = (input) => {
  for (let i = 0; i < input; i++) {
    let $cardsNumberRnd = Math.floor(Math.random() * numbers.length),
      $cardsSuitRnd = Math.floor(Math.random() * suit.length),
      $cardNumber = numbers[$cardsNumberRnd],
      $suit = suit[$cardsSuitRnd];

    $card = {
      number: $cardNumber,
      card: [$cardNumber, $suit],
    };

    card.push($card);

    switch ($cardNumber) {
      case 1:
        $cardNumber = "A";
        break;
      case 11:
        $cardNumber = "J";
        break;
      case 12:
        $cardNumber = "Q";
        break;
      case 13:
        $cardNumber = "K";
      default:
        $cardNumber = $cardNumber;
        break;
    }

    if ($suit === "♦" || $suit === "♥") {
      document.getElementById("card-display").innerHTML += `
    <div class="card2 red">
    <div class="head">
        <p>${$cardNumber}</p>
    </div>
    <div class="body">
        <p>${$suit}</p>
    </div>
    <div class="footer">
        <p>${$cardNumber}</p>
    </div>
  </div>
    `;
    } else {
      document.getElementById("card-display").innerHTML += `
      <div class="card2">
      <div class="head">
          <p>${$cardNumber}</p>
      </div>
      <div class="body">
          <p>${$suit}</p>
      </div>
      <div class="footer">
          <p>${$cardNumber}</p>
      </div>
    </div>
      `;
    }
  }
};

let bubble = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      counter++;
      if (arr[j].number > arr[j + 1].number) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;

        let $div = document.createElement("div"),
          $iteration = document.createElement("h3");
        $div.appendChild($iteration);
        $iteration.innerText = `Iteracion`;
        $div.classList.add("cards-display");
        $sorted.append($div);

        for (let k = 0; k < arr.length; k++) {
          switch (arr[k].card[0]) {
            case 1:
              arr[k].card[0] = "A";
              break;
            case 11:
              arr[k].card[0] = "J";
              break;
            case 12:
              arr[k].card[0] = "Q";
              break;
            case 13:
              arr[k].card[0] = "K";
              break;
            default:
              arr[k].card[0] = arr[k].card[0];
              break;
          }

          const $divCard = document.createElement("div"),
            $head = document.createElement("div"),
            $pHead = document.createElement("p"),
            $body = document.createElement("div"),
            $pBody = document.createElement("p"),
            $footer = document.createElement("div"),
            $pFooter = document.createElement("p");

          if (arr[k].card[1] === "♥" || arr[k].card[1] === "♦") {
            $divCard.classList.add("red");
          } else {
            $divCard.classList.remove("red");
          }

          $divCard.appendChild($head);
          $head.appendChild($pHead);
          $divCard.appendChild($body);
          $body.appendChild($pBody);
          $divCard.appendChild($footer);
          $footer.appendChild($pFooter);

          $divCard.classList.add("card2");
          $head.classList.add("head");
          $pHead.innerText = arr[k].card[0];
          $body.classList.add("body");
          $pBody.innerText = arr[k].card[1];
          $footer.classList.add("footer");
          $pFooter.innerText = arr[k].card[0];
          $div.appendChild($divCard);
        }
      }
    }
  }
};

let select = (arr) => {
  let min = 0;

  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min].number > arr[i].number) {
        let swap = arr[min];
        arr[min] = arr[i];
        arr[i] = swap;
      }
    }

    // let $div = document.createElement("div");
    // document.querySelector("body").appendChild($div);

    let $div = document.createElement("div"),
      $iteration = document.createElement("h3");
    $div.appendChild($iteration);
    $iteration.innerText = `Iteracion`;
    $div.classList.add("cards-display");
    $sorted.append($div);

    for (let k = 0; k < arr.length; k++) {
      switch (arr[k].card[0]) {
        case 1:
          arr[k].card[0] = "A";
          break;
        case 11:
          arr[k].card[0] = "J";
          break;
        case 12:
          arr[k].card[0] = "Q";
          break;
        case 13:
          arr[k].card[0] = "K";
          break;
        default:
          arr[k].card[0] = arr[k].card[0];
          break;
      }

      const $divCard = document.createElement("div"),
        $head = document.createElement("div"),
        $pHead = document.createElement("p"),
        $body = document.createElement("div"),
        $pBody = document.createElement("p"),
        $footer = document.createElement("div"),
        $pFooter = document.createElement("p");

      if (arr[k].card[1] === "♥" || arr[k].card[1] === "♦") {
        $divCard.classList.add("red");
      } else {
        $divCard.classList.remove("red");
      }

      $divCard.appendChild($head);
      $head.appendChild($pHead);
      $divCard.appendChild($body);
      $body.appendChild($pBody);
      $divCard.appendChild($footer);
      $footer.appendChild($pFooter);

      $divCard.classList.add("card2");
      $head.classList.add("head");
      $pHead.innerText = arr[k].card[0];
      $body.classList.add("body");
      $pBody.innerText = arr[k].card[1];
      $footer.classList.add("footer");
      $pFooter.innerText = arr[k].card[0];
      $div.appendChild($divCard);
    }
    min++;
  }
};

// DOM EVENTS
const $btnReset = d.querySelector(".reset"),
  $btnBubble = d.querySelector(".bubble"),
  $inputForm = d.getElementById("input-form"),
  $btnSelect = d.querySelector(".select"),
  $divDisplay = d.getElementById("card-display"),
  $generatedH1 = d.getElementById("card-generated-h1"),
  $sortedH1 = d.getElementById("card-sorted-h1"),
  $title = d.getElementById("title"),
  $divSorted = d.getElementById("display");

d.addEventListener("submit", (e) => {
  e.preventDefault();
  const $userInput = d.getElementById("card-generator").value;
  cardGen($userInput);
  $inputForm.classList.add("hide");
  $title.innerText = "Selecciona un metodo de ordenamiento";
  $btnBubble.classList.remove("hide");
  $btnSelect.classList.remove("hide");
  $generatedH1.classList.remove("hide");

  console.log(card);
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".reset")) {
    $divDisplay.innerHTML = "";
    $divSorted.innerHTML = "";
    card = [];
    $inputForm.classList.remove("hide");
    $btnBubble.classList.add("hide");
    $btnSelect.classList.add("hide");
    $generatedH1.classList.add("hide");
    $sortedH1.classList.add("hide");
    $btnReset.classList.add("hide");
    $title.innerText = "Ingresa el numero de cartas a generar";
  }

  if (e.target.matches(".bubble")) {
    $btnBubble.classList.add("hide");
    $btnSelect.classList.add("hide");
    $sortedH1.classList.remove("hide");
    $btnReset.classList.remove("hide");
    $title.innerText = 'Presiona "Reset" para comenzar nuevamente';
    bubble(card);
  }

  if (e.target.matches(".select")) {
    $btnBubble.classList.add("hide");
    $btnSelect.classList.add("hide");
    $sortedH1.classList.remove("hide");
    $btnReset.classList.remove("hide");
    $title.innerText = 'Presiona "Reset" para comenzar nuevamente';
    select(card);
  }
});
