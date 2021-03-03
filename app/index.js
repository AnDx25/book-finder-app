/**
 * Application entry point
 */

// Load application styles
import 'scss/_index.scss';

// ================================
// START YOUR APP HERE
// ================================
var itemsString=""
document.addEventListener("DOMContentLoaded", (event) => {

  (function(){
    document.getElementById("keyword").addEventListener("keyup",
      function(event){
        if(event.keyCode===13)
        {
          document.getElementById("book-list").innerHTML=""
          itemsString="";
          const searchString=document.getElementById("keyword").value;
          showBooks(searchString);
        }
      }
    )

  })()

  const showBooks=(searchString)=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}&maxResults=12&key=AIzaSyDhR6CkxaOgynAnmL0HPE-2E4xfRUhVzOc`)
    .then(response=>response.json())
    .then(data=>{
      
      const result=renderBooks(data.items)
      document.getElementById("book-list").innerHTML=result
    })
  }
  const renderBooks=(items)=>{
   
    items.forEach((book)=>{
      itemsString+=`<div class="col-lg-3 col-md-6 col-sm-12 book-display">
      <div class="image">
      <img src=${book.volumeInfo.imageLinks.smallThumbnail} &&  alt=${book.volumeInfo.title} />
      </div>
      <div>
      <span> Authors: ${book.volumeInfo.authors}</span>
      </div>
      <div class="details">
      <span>Title: ${book.volumeInfo.title}
      </span>
      <a target="_blank" class="previewLink" href="${book.volumeInfo.previewLink}">Preview</a>
      </div>
  </div>`
    })
    return itemsString
  }
  //Creating Closure
    // (function (){
    //   fetch("https://www.googleapis.com/books/v1/volumes?q=test&maxResults=35&key=AIzaSyDhR6CkxaOgynAnmL0HPE-2E4xfRUhVzOc")
    //   .then(response=>response.json())
    //   .then(data=>console.log(data))
    // })()
    //console.log("DOM Content Loaded!!!")
  }
)