import '../App.css'
import type {TaskDetailsData} from '../dal/api';
import styles from './TaskItem.module.css'
import {clsx} from 'clsx';


type Props = {
    task: TaskDetailsData
    isSelected: boolean
    onTaskSelected: (taskId: string, boardId: string) => void
}

export const TaskItem = ({task, isSelected, onTaskSelected}: Props) => {
    const handleTaskSelect = () => {
        onTaskSelected(task.id,task.attributes.boardId)
    }

    const taskClassName = clsx({
        [styles.taskItem]: true,
        [styles.selected]: isSelected,
        [styles.smallPriority]: task.attributes.priority === 1,
        [styles.lowPriority]: task.attributes.priority === 2,
        [styles.middlePriority]: task.attributes.priority === 3,
        [styles.highPriority]: task.attributes.priority === 4,
    })

    const titleClassName = clsx({
        [styles.title]: true,
        [styles.completed]: task.attributes.status
    })

    return (
        <li
            className={taskClassName}
            onClick={handleTaskSelect}
        >
            <div>Заголовок: <span className={titleClassName}>{task.attributes.title}</span>
            </div>
            <div>Статус: <input type="checkbox" checked={task.attributes.status === 2}/></div>
            <div>Дата создания задачи: {new Date(task.attributes.addedAt).toLocaleDateString()}</div>
        </li>
    )
}