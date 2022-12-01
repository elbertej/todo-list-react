import styles from './TasksForm.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskContent: string) => void;
}

export function TaskForm ({ onAddTask }: Props) {
    const [content, setContent] = useState("");
    
    function handleSubmit(event: FormEvent){
        event.preventDefault();

        onAddTask(content);
        setContent("");
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>){
        setContent(event.target.value);
    }

    return (
        <form className={styles.taskForm} onSubmit={handleSubmit}>
            <input 
                placeholder="Adicione uma nova tarefa"
                onChange={onChangeContent}
                value={content}
                required 
            />
            <button>
                Criar
                <AiOutlinePlusCircle size={20}/>
            </button>
        </form>
    );
}