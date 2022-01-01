let obj={
    name:"hippopotamus",
    age: 10,
    sex: 'M'
}

let myDOM=
    <div>
        {
            Object.keys(obj).map((v,i)=>{
                return <p>{v}--{obj[v]}</p>
            }
            )
        }
    </div>


ReactDOM.render(myDOM,document.getElementById("demoReact"));
{/*
https://youtu.be/cESlxKvRrww?list=PLwDQt7s1o9J7u0lzzlFQYx5sJ7GvZkA4i&t=555
*/}