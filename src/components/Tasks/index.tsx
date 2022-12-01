import { ITask } from '../../App';
import { Task } from '../Task';
import styles from './Task.module.css';
import { TbClipboardText } from 'react-icons/tb'

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props){
    const taskCount = tasks.length;
    const taskDoneCount = tasks.filter((task) => task.isDone).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{taskCount}</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Concluidas</p>
                    <span>{taskDoneCount} / {taskCount}</span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task 
                        key={task.id} 
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <TbClipboardText size={50} />
                        <div>
                            <p>Você ainda não possui tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
}