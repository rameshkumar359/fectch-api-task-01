async function getdata(){
    try{
        let data= await fetch("https://api.openbrewerydb.org/breweries")
        var newdata=await data.json()
    }
    catch(error){
        console.log(error)
    }
    return newdata
}
getdata()

var body=document.querySelector("body")
body.innerHTML=
`<div class="navbar"><h1>BREWING COMPANIES DATA</h1></div>`

async function display(data){
    try{
    var data=await getdata()
    data.map((data)=>{
        body.innerHTML=body.innerHTML+`<div class="content">
        <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">COMPANY:ID</th>
            <th scope="col">COMPANY NAME</th>
            <th scope="col">CITY</th>
            <th scope="col">STATE</th>
            <th scope="col">COUNTRY</th>
            <th scope="col">PHONE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${data.id}</th>
            <td>${data.name}</td>
            <td>${data.city}</td>
            <td>${data.state}</td>
            <td>${data.country}</td>
            <td>${data.phone}</td>
          </tr>
        </tbody>
      </table>
      </div>`
    })

}
catch(error){
    console.log(error)
}
}

display()