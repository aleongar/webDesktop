import './TaskItem.css'
export function TaskItem({name, icon}){
    return(
        <div className='task-item-container'>
            <img className='task-item-img' src={icon} alt=''></img>
            <div>
                {name}
            </div>
        </div>
    )
}