let Book_Arry = JSON.parse(localStorage.getItem("Book_Products_")) || []

const Book_Products = (e) =>
{
   e.preventDefault();

   let Book_obj = 
   {
      Book_Title : document.querySelector('#book_title').value,
      Book_Category : document.querySelector('#book_category').value,
      Book_Price : document.querySelector('#book_price').value,
      Book_Image : document.querySelector('#book_image').value
   };

   Book_Arry.push(Book_obj);

   localStorage.setItem("Book_Products_",JSON.stringify(Book_Arry))
}


document.querySelector("#Buy_Pro").addEventListener("submit",Book_Products)