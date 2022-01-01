let text="您好";
let num = 2021;

function fun(obj){
    return `Name is: ${obj.name} -- Age is: ${obj.age}`

};

let user={
    name: "Tiger",
    age: 2022
};

let myDOM=(
    <div>
        <div>{text} {num+1}</div>  {/* <br> must be paired.  */}
        <div>{fun(user)}</div>
    </div>

);

ReactDOM.render(myDOM,document.getElementById("demoReact"));
{/*
https://youtu.be/tdmyawesFJE?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=850
*/}