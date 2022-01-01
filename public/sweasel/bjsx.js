let arr = ["tiger", "sweasel", "hippopotamus", "parentheses"]
console.log(arr)
// let myDOM = arr.map((item, index) => {
//     return (
//         <p className="demoStyle" key={index}>{item}</p>
//     )

// }
// );

// ReactDOM.render(myDOM, document.getElementById("demoReact"));

function fun(){
    let newarr=[];
    for (let index in arr){
        newarr.push(<p className="demoStyle" key={index} onClick={()=>{console.log("hello",index,arr[index])}}>{arr[index]}</p>)
    }
    console.log(newarr);
    return newarr;
}

ReactDOM.render(fun(), document.getElementById("demoReact"));
{/*
https://youtu.be/VrTbEQnhr0k?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=641  for in index loop
newarr.push(<p className="demoStyle" key={index} onClick={()=>{console.log("hello",index,arr[index])}}>{arr[index]}</p>)
*/}