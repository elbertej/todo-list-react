import { TaskForm } from '../TaskForm';

import styles from './Header.module.css';
import todoLogo from "../../assets/todoLogo.svg"

interface Props {
    onAddTask: (taskContent: string) => void;
}

export function Header ({ onAddTask }: Props) {
    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <TaskForm onAddTask={onAddTask}/>
        </header>
    );
}