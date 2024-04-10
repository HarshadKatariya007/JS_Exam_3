let Book_Arry = JSON.parse(localStorage.getItem("Book_Products_")) || []
let Book_Cart =[]
const Book_Ui = (Books) =>
{
   document.querySelector("#Book_Data").innerHTML =""
   Books.map((ele,i)=>
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

   Delete.addEventListener("click",() =>
   {
      Book_Arry.splice(i,1)
      localStorage.setItem("Book_Products_",JSON.stringify(Book_Arry));
      Book_Ui(Book_Arry)
   })

   let Buy = document.createElement("button");
   Buy.innerHTML="Buy Book";

   Buy.addEventListener("click",() =>
   {
      Book_Cart.push(ele)
      localStorage.setItem("Book",JSON.stringify(Book_Cart))
   })

   let Div = document.createElement("div")
   Div.append(Book_Image,Book_Category,Book_Title,Book_Price,Delete,Buy)

   Delete.setAttribute("class", "btn btn-danger")
   Buy.setAttribute("class", "btn btn-success")
   document.querySelector("#Book_Data").append(Div)

})
}
Book_Ui(Book_Arry);
const PRICE = (val) =>
{
   if(val=="high_to_low")
   {
      Book_Arry.sort((a,b) => b.Book_Price - a.Book_Price)
   }
   else
   {
      Book_Arry.sort((a,b) => a.Book_Price - b.Book_Price)

   }
   Book_Ui(Book_Arry)
}

const FILTERING = (val) =>
{
   let fil = Book_Arry.filter((ele) => ele.Book_Category==val)
   Book_Ui(fil)
}

const Serach_FILTERING = (val) =>
{
   let fil = Book_Arry.filter((ele) => ele.Book_Title.includes(val))
   Book_Ui(fil)
}

const SERACH = (e) =>
{
   e.preventDefault();
   let TITLE = document.querySelector("#Bar_search").value
   Serach_FILTERING(TITLE)
}

document.querySelector("#low_to_high").addEventListener("click",() => PRICE("low_to_high"));
document.querySelector("#high_to_low").addEventListener("click",() => PRICE("high_to_low"));
document.querySelector("#comics").addEventListener("click",() => FILTERING("Comics"));
document.querySelector("#computers").addEventListener("click",() => FILTERING("Computers"));
document.querySelector("#kids").addEventListener("click",() => FILTERING("Kids"));
document.querySelector("#sports").addEventListener("click",() => FILTERING("Sports"));
document.querySelector("#Serach_bar").addEventListener("submit",SERACH);

