let arr=["tiger","sweasel","hippopotamus","parentheses"]

let myDOM=arr.map((item,index)=>{
    return (
    <p className="demoStyle" key={index}>{item}</p>
    ) 

}  
);

ReactDOM.render(myDOM,document.getElementById("demoReact"));
{/*
https://youtu.be/VrTbEQnhr0k?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=336
arr.map((item,index)=>  , item,index order must be this order, can't change order, like index,item,  then 0,1,2 no item
return must be add  a pair of () parentheses, then you need a new line of <p key...>
*/}