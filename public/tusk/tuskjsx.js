let arr = ["tiger", "sweasel", "hippopotamus", "parentheses","tusk"]
let index =0

console.log(arr)
// let myDOM = arr.map((item, index) => {
//     return (
//         <p className="demoStyle" key={index}>{item}</p>
//     )

// }
// );

// ReactDOM.render(myDOM, document.getElementById("demoReact"));

function fun(){
    
   let myDom=arr.map((v,i)=>{

    return (
    <p style={{color:i==index?'blue':'red'}} key={i} 
        onClick={()=>
            {
            index=i;
            console.log(i,'====',index);
            render()
            }
        }
    >{v}
    </p>

    )

    })
    return myDom
}

function render(){
    ReactDOM.render(fun(), document.getElementById("demoReact"));
    console.log("call render()",index)
}

render();  

{/*
https://youtu.be/VrTbEQnhr0k?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=641  for in index loop
newarr.push(<p className="demoStyle" key={index} onClick={()=>{console.log("hello",index,arr[index])}}>{arr[index]}</p>)
render();  run only one time. so must put this function into the arr.map().
    <p className="demoStyle" key={i} onClick={()=>{console.log("hello",index,arr[i])}}>{arr[i]}</p>
*/}