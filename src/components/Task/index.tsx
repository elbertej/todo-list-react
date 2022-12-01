import styles from './Task.module.css';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs'

import { ITask } from '../../App';

interface Props{
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}
export function Task({ task, onDelete, onComplete }:Props){
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isDone ? <BsFillCheckCircleFill /> : <div />}
            </button>

            <p className={task.isDone ? styles.textCompleted : "" }>{task.content}</p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    );
}