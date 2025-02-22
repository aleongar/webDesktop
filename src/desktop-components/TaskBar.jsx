import './TaskBar.css'
import { Children } from 'react';
export function TaskBar({children}){
    const mappedChildren = Children.map(children, child =>
        <div className="Row">
          {child}
        </div>
      );
    return (
        <div className='task-bar-container'>
            <img className='task-bar-main' src="src/assets/react.svg" alt="logo" />
            {mappedChildren}   
        </div>
    )
}