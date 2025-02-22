import './DesktopEnviroment.css'
import { DragableItem } from './DragableItem';
import { TaskBar } from './TaskBar'
import { TaskItem } from './TaskItem'
import React, { Children } from 'react';

export function DesktopEnviroment({children}){
    let universalCoordinates = {x: 0, y: 0}

    const mappedChildren = Children.map(children, (child) => {
        if (child.type === DragableItem) {
            const newChild = React.cloneElement(child, {
                initialPos: { x: universalCoordinates.x, y: universalCoordinates.y }
            });
            universalCoordinates.x += 100;
            universalCoordinates.y += 0;
            return newChild;
        }
        return child;
    });
    return (
        <div id="desktop">
            {mappedChildren}
            <TaskBar>
                <TaskItem name='Bloc de notas' icon={'https://www.systemuicons.com/images/icons/document_justified.svg'}></TaskItem>
            </TaskBar>
        </div>
    )
}