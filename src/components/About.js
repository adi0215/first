import React, { useState } from 'react'
import "./Components.css"

export default function About() {
    //DARK MODE
        const [myStyle, setMyStyle]=useState({
            color:'black',
            backgroundColor:'white'
        })

    const [btnText,setBtnText]=useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Dark Mode")
        }
    }

    // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Light Mode");
  //     document.body.style.backgroundColor = "white";
  //     document.body.style.Color = "balck";
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setBtnText("Enable Dark Mode");
  //     document.body.style.backgroundColor = "black";
  //     document.body.style.Color = "white";
  //   }
  // };

  return (
    <>
       
        <div className="containerDark" style={myStyle}>
        <h1>About us</h1>
        <p className="dummy">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quas excepturi unde nihil dicta ipsum minus praesentium pariatur obcaecati sint quo ullam iusto nemo eligendi, accusantium sequi quisquam possimus expedita similique facere. Ex provident sunt minima ipsum voluptatibus quia, nulla possimus dicta accusamus. Enim perspiciatis eos, adipisci deleniti, temporibus magni, ipsam debitis tempore voluptates asperiores veritatis. Iusto veritatis dolorum, dolores, architecto quis ad nostrum odio eos fugit hic optio ipsa cupiditate aliquid perspiciatis modi natus! Velit iusto incidunt a minima error, repudiandae necessitatibus dolore. Reprehenderit, consequatur iusto. Placeat rem nam, porro modi veniam architecto officia iusto illo assumenda provident tempora!</p>

        <button className="darkBtn" onClick={toggleStyle}>Enable Dark Mode</button>
        </div>
    </>
  )
}
