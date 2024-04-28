import React, { useRef, useState } from 'react'
import './tictactoe.css'
import letterX from '../Images/letterx.png'
import letterO from '../Images/lettero.png'

    let data=["","","","","","","","",""]

function TicTacToe() {
    const[count,setCount]=useState(0);
    const[lock,setLock]=useState(false);
    const titleReference=useRef(null);
    const box1=useRef(null);
    const box2=useRef(null);
    const box3=useRef(null);
    const box4=useRef(null);
    const box5=useRef(null);
    const box6=useRef(null);
    const box7=useRef(null);
    const box8=useRef(null);
    const box9=useRef(null);
    const boxArray=[box1,box2,box3,box4,box5,box6,box7,box8,box9]


    const toggle=(e,num)=>{
        if (lock){
            return 0;
        }if(data[num]===""){
        if(count%2===0){
            e.target.innerHTML = `<img src='${letterX}'>`;
            data[num]="x";
            setCount(1+count);
        }else{
            e.target.innerHTML = `<img src='${letterO}'>`;
            data[num]="o";
            setCount(1+count);
        }
    }
        checkWin()
    }
    const checkWin=()=>{
        if(data[0]===data[1]  && data[1]===data[2] && data[2]!==""){
            won(data[2])
        }else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
            won(data[5])
        }else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
            won(data[8])
        }else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
            won(data[6])
        }else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
            won(data[7])
        }else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
            won(data[8])
        }else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
            won(data[8])
        }else if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
            won(data[2])
        }else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
            won(data[6])
        }

    }
    const won=(winner)=>{
        setLock(true)
        if(winner==="x"){
            titleReference.current.innerHTML=`Congratulations: <img  src='${letterX}'> `
        }
        else{
            titleReference.current.innerHTML=`Congratulations: <img src='${letterO}'> `
 
        }
    }
const reset=()=>{
     data=["","","","","","","","",""];
     setLock(false);
     titleReference.current.innerHTML=`TIC TAC TOE`
     boxArray.map((e)=>{
        e.current.innerHTML=""
     })


}

  return (
    <div>
        
        <div className=" container text-center w-100 justify-content-center align-items-center p-2">
            <h1 ref={titleReference} className='title d-flex justify-content-center align-items-center text-center'>
                TIC TAC TOE
            </h1>
            <div className="board container mx-auto py-2 h-100">

                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                </div>

                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>

                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>

            </div>            <button onClick={reset} className='reset  btn rounded-pill'>Restart Game</button>

        </div>

    </div>
  )
}

export default TicTacToe
