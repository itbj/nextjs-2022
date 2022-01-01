let text="您好";
let num = 2021;

function fun(obj){
    return `Name is: ${obj.name} -- Age is: ${obj.age}`

};

let user={
    name: "Tiger",
    age: 2022
};

let sitename="Click here goto Cisco.com";
let linkUrl="http://www.cisco.com";   
let linkHome="/a.html"

let myDOM=(
    <div>
        <div>{text} {num+1}</div>  {/* <br> must be paired.  */}
        <div>{fun(user)}</div><br></br>
        <div><a href={linkUrl}>{sitename}</a></div>
        <div><a href={linkHome}>Back</a></div>
        <p className="demoStyle">demoStyle</p>  {/* demoStyle in a. html style file.  */}
    </div>

);

ReactDOM.render(myDOM,document.getElementById("demoReact"));
{/*
https://youtu.be/tdmyawesFJE?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=850

http://localhost:3000/tiger/www.cisco.com if linkUrl ="www.cisco.com", no http

https://youtu.be/tdmyawesFJE?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=1536 .demoStyle{}
*/}