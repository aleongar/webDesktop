import { useEffect, useState } from "react";
import { TitleBar } from "./TitleBar";
import { useCallback } from 'react';
import './WindowComponent.css'

export function WindowComponent({name, icon, size, id, initialPos}){
    const [isFocus, setFocus] = useState(false);
    const [isDragging, setDragging] = useState(false);
    const [position, setPosition] = useState(initialPos);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    function handleClick(e){
        setFocus(true)
        console.log("hola2")
    }
    
        const moveCallback = useCallback((e) => {
            if (!isDragging) return;
            setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
        }, [isDragging, offset]);
    
        useEffect(() => {
            if (isDragging) {
                document.addEventListener("mousemove", moveCallback);
                document.addEventListener("mouseup", stopDragging);
            } else {
                document.removeEventListener("mousemove", moveCallback);
                document.removeEventListener("mouseup", stopDragging);
            }
            return () => {
                document.removeEventListener("mousemove", moveCallback);
                document.removeEventListener("mouseup", stopDragging);
            };
        }, [isDragging, moveCallback]);
    
        function startDragging(e) {
            setOffset({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
            setDragging(true);
        }
    
        function stopDragging() {
            setDragging(false);
        }

    return (
        <div onMouseLeave={() => setFocus(false)} onMouseDown={() => setFocus(true)} className="window" id={id}  style={{width: size.x, height: 'fit-content', zIndex: Number(isFocus) * 20 + 10, left: `${position.x}px`, top: `${position.y}px`}}>
             <div onMouseDown={startDragging}>
                 <TitleBar  name={name} icon={icon}/>
             </div>
             <div style={{backgroundColor: 'white'}}>hola ejejejejejejejejejej</div>
        </div>
    )
}