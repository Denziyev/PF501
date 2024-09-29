// var studentCount=20;
// function PF501(){
//     var name='Narmin';

//     let surname="Balakishiyeva";
//     const age=19;
//     if(true){
//         var group="PF501";
//     }
//     console.log(group);
//     console.log(surname);
//     console.log(age);

// }

//  console.log(name);
//  console.log(studentCount);
//  PF501();


 //20 familya 19 Pf501  
 //Narmin 20 surname age group
 //Narmin 20 pf501
 //soyad yas group 20 ad 

//block
//  if(true){
    // var name="Sitara";
    // const age="25";
    // let surname="Talibova";

    // console.log(name);
    // console.log(age);
    // console.log(surname);
//  }

//  console.log(name);
//  console.log(age);
//  console.log(surname);


//local

// function myfunc(){
//     var name="Sitara";
//     const age="25";
//     let surname="Talibova";

//     console.log(name);
//     console.log(age);
//     console.log(surname);
// }

// myfunc();
// console.log(name);
// console.log(age);
// console.log(surname);

// let myarr=[20,30,"PF501",true,{name:"Shahin",age:21}];


// myarr.push({name:"A6", brand:"Samsung",color:"white",memory:"36gb",price:800});

// myarr.pop();
// myarr.shift();

// const mybtn= document.querySelector('button');

// mybtn.addEventListener('click',()=>{
//     const mycomment= prompt("Commentinizi daxil edin: ");
//     myarr.push(mycomment);
//     myul.innerHTML=``;
//     myarr.forEach(x=>{
//         const listItem=document.createElement('li');
//         listItem.textContent=x;
//         myul.appendChild(listItem);
    
//     })
// })

// const myul=document.createElement('ul');
// document.body.appendChild(myul);


// myarr.forEach(x=>{
//     const listItem=document.createElement('li');
//     listItem.textContent=x;
//     myul.appendChild(listItem);

// })


// const mytbody=document.querySelector('tbody');


// products.forEach(x=>{
    //    document.createElement('tr');
    //    const td1=document.createElement('td');
//    td1.textContent=x.Name;  
//    const td2=document.createElement('td');
//    td2.textContent=x.price;
//    const td3=document.createElement('td');
//    td3.textContent=x.StockNumber;   
//    const td4=document.createElement('td');
//    td4.textContent=x.category;
//   mytr.appendChild(td1);
//   mytr.appendChild(td2);
//   mytr.appendChild(td3);
//   mytr.appendChild(td4);

// })


const products=[
    {price:"1800$",category:"Electronics",Name:"Samsung",StockNumber:20},
    {price:"1800$",category:"Electronics",Name:"Samsung",StockNumber:20},
    {price:"1800$",category:"Electronics",Name:"Samsung",StockNumber:20},
    {price:"1800$",category:"Electronics",Name:"Samsung",StockNumber:20},
    {price:"1800$",category:"Electronics",Name:"Samsung",StockNumber:20},
]


const tbody=document.querySelector('tbody');
products.forEach(element =>{

const tr=document.createElement('tr');
const td1=document.createElement('td');
const myspan=document.createElement('span');
myspan.textContent = element.Name;
const mybtn = document.createElement('button');
mybtn.textContent = "change";
td1.appendChild(myspan);
td1.appendChild(mybtn);
tr.appendChild(td1);
const td2=document.createElement('td');
td2.textContent=element.price;
tr.appendChild(td2);
const td3=document.createElement('td');
td3.textContent=element.StockNumber;
tr.appendChild(td3);
const td4=document.createElement('td');
td4.textContent=element.category;
tr.appendChild(td4);
tbody.appendChild(tr);
mybtn.addEventListener('click', ()=>{
    const addedName = prompt ("Enter the name");
myspan.textContent = addedName;
} )
});



const btn = document.createElement('button');
btn.textContent="Change background color";
document.body.appendChild(btn);

btn.addEventListener('click',changeBackground);


function changeBackground(){
    //document.body.style.backgroundColor = "purple";

    if(document.body.style.backgroundColor == "purple"){
        document.body.style.backgroundColor = "white";
    }
   else{
    document.body.style.backgroundColor = "purple";

   }
}



