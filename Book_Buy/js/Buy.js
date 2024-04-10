let Book_Arry = JSON.parse(localStorage.getItem("Book")) || []
const Book_Ui = () =>
{
   document.querySelector("#Book_Pro_Ui").innerHTML =""
   Book_Arry.map((ele,i)=>
{

   let Book_Title = document.createElement("h6");
   Book_Title.innerHTML = `Book Title :- ${ele.Book_Title}`

   let Book_Image = document.createElement("img");
   Book_Image.src = ele.Book_Image

   let Book_Price = document.createElement("h6")
   Book_Price.innerHTML =`Book Price :- ${ele.Book_Price} ₹`

   let Book_Category = document.createElement("h6");
   Book_Category.innerHTML =`Category :- ${ele.Book_Category}`

   let Delete = document.createElement("button")
   Delete.innerHTML="Delete"

   let Buy = document.createElement("button");
   Buy.innerHTML="Process To Buy";

   let Div = document.createElement("div")
   Div.append(Book_Image,Book_Category,Book_Title,Book_Price,Buy)

   Buy.setAttribute("class", "btn btn-success")
   document.querySelector("#Book_Pro_Ui").append(Div)

})
}
Book_Ui()