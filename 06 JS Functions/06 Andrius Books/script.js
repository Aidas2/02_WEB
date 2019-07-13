function Book(name, author, year, totalPages, amountLeft, price, cover) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.totalPages = totalPages;
  this.amountLeft = amountLeft;
  this.price = price;
  this.cover = cover;
}

var books = [];
var parent = document.querySelector("#booksParent");

books.push(new Book("Desert Solitaire", "Edward Abbey", "2009", 652, 29, 19.99, "books_images/book3.jpg"));
books.push(new Book("Disgrace", "J. M. Coetzee", "2003", 498, 1, 25.49, "books_images/book4.jpg"));
books.push(new Book("Geek Love", "Katherine Dunn", "2003", 785, 4, 11.29, "books_images/book5.jpg"));
books.push(new Book("2666", "Roberto Bolano", "2003", 456, 5, 25.99, "books_images/book1.jpg"));
books.push(new Book("All About Love", "Bell Hooks", "2004", 154, 15, 19.99, "books_images/book2.jpg"));


function searchBy() {
  parent.innerHTML = "";
  let searchBy = document.querySelector("#searchBy").value;
  let searchFor = document.querySelector("#searchFor").value.toLowerCase().trim();

  if (searchFor !== "" && searchBy !== "") {
    let filteredBooks = books.filter(item => {
      return typeof item[searchBy] == "string" && item[searchBy].toLowerCase().indexOf(searchFor) > -1;
    });

    if (filteredBooks.length !== 0) {
      filteredBooks.forEach(item => {
        let newDiv = document.createElement("div");
        let cover = document.createElement("img");
        let name = document.createElement("p");
        let author = document.createElement("p");
        let year = document.createElement("p");
        let totalPages = document.createElement("p");
        let amountLeft = document.createElement("p");
        let price = document.createElement("p");
        newDiv.setAttribute("class", "col-6");
        newDiv.style.paddingLeft = "30px";
        cover.setAttribute("src", item["cover"]);
        name.textContent = "Name: " + item["name"];
        author.textContent = "Author: " + item["author"];
        year.textContent = "Year: " + item["year"];
        totalPages.textContent = "Pages: " + item["totalPages"];
        amountLeft.textContent = "Qty left: " + item["amountLeft"];
        price.textContent = "Price: " + item["price"] + " Eur";
        newDiv.appendChild(cover);
        newDiv.appendChild(name);
        newDiv.appendChild(author);
        newDiv.appendChild(year);
        newDiv.appendChild(totalPages);
        newDiv.appendChild(amountLeft);
        newDiv.appendChild(price);
        parent.appendChild(newDiv);
      });
      document.querySelector("#searchFor").value = "";
    } else {
      parent.innerHTML = "<div class='col-12'>Nothing found</div>";
      document.querySelector("#searchFor").value = "";
    }

  } else {
    parent.innerHTML = "<div class='col-12'>Please enter search criteria and select method</div>";
    document.querySelector("#searchFor").value = "";
  }
}
