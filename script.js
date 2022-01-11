const books = [
  "Sabahattin Ali: Kürk Mantolu Madonna",
  "Klahed Hosseini: Uçurtma Avcısı",
  "Ahmet Ümit: Aşkımız Eski Bir Roman",
  "Franz Kafka: Dönüşüm",
  "James Joyce: Sanatçının Bir Genç Adam Olarak Portresi",
  "Hermann Hesse: Siddhartha",
  "F. Scott Fitzgerald: Muhteşem Gatsby",
  "Harper Lee: Bülbülü Öldürmek",
  "Oğuz Atay: Tutunamayanlar",
  "Ray Bradbury: Fahrenheit 451",
  "Yusuf Atılgan: Aylak Adam",
  "Irvin D. Yalom: Nietzsche Ağladığında",
  "İlber Ortaylı: Bir Ömür Nasıl Yaşanır?",
  "William Faulkner: Döşeğimde Ölürken",
  "Virginia Woolf: Dalgalar",
  "John Steinbeck: Fareler ve İnsanlar",
  "Carson McCullers: Altın Gözde Yansımalar",
  "Albert Camus: Yabancı",
  "Truman Capote: Başka Sesler Başka Odalar",
  "George Orwell: 1984",
  "Nurdan Gürbilek: Vitrinde Yaşamak",
  "Jose Mauro de Vasconcelos: Şeker Portakalı",
  "William Shakespeare: Romeo ve Juliet",
  "Victor Hugo: Sefiller",
  "Charles Dickens: İki Şehrin Hikayesi",
  "Lev Nikolayeviç Tolstoy: Savaş ve Barış",
  "Jane Austen: Aşk ve Gurur",
  "Jack Kerouac: Yolda",
  "Ernest Hemingway: Yaşlı Adam ve Deniz (İhtiyar Balıkçı)",
  "Oscar Wilde: Mutlu Prens",
  "Orhan Pamuk: Cevdet Bey ve Oğulları",
];

for (let i = 0; i < books.length; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = books[i];

  document.getElementById("book_selected").appendChild(listItem);
}

function addIthem() {
  //acces input box as a node
  let inputValue = document.getElementById("todo_input");
  if (inputValue.value.length > 0) {
    //if(inputValue.value)

    //create li element for html
    const listItem = document.createElement("li");
    //add clas to li elemet which we add
    listItem.className = "todo_list_ithem";
    //assing input box value to li element innerHTML
    listItem.innerHTML = inputValue.value;
    listItem.onclick = function () {
      removeItem(this);
    };

    //İNSERT NEWLY CREATED Lİ ELEMENT ABOVE TO UL ELEMENT

    document.querySelector("#booksReading").appendChild(listItem);
    //empty input boz value after click add
    inputValue.value = "";
    let okunanKitap = document.getElementById("okunan");
    okunanKitap.innerHTML++;
    let kalanKitap = document.getElementById("kalan");
    kalanKitap.innerHTML--;
  }
}
addIthem();

function removeItem(listItem) {
  const isConfirm = confirm("are you sure");
  if (isConfirm) {
    //console.log(listItem)
    document.getElementById("booksReading").removeChild(listItem);

    //listItem.removed();

    //listItem.removed();
     okunanKitap = document.getElementById("okunan");
    okunanKitap.innerHTML--;
     kalanKitap = document.getElementById("kalan");
    kalanKitap.innerHTML++;
  }
}
