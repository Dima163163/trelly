import {TaskItem} from './TaskItem'
import {useTasks} from '../bll/useTasks';

type Props = {
    selectedTaskId: string | null
    onTaskSelected: (taskId: string | null, boardId: string | null) => void
}


export const TasksList = ({selectedTaskId, onTaskSelected}: Props) => {
    const {tasks} = useTasks()

    if (tasks === null) {
        return <div>Загрузка...</div>
    }

    if (tasks.length === 0) {
        return <div>Задачи отсутствуют</div>
    }

    const handleTaskSelect = (taskId: string, boardId: string) => {
        onTaskSelected(taskId, boardId)
    }


    const handleTaskSelectReset = () => {
        onTaskSelected(null, null)
    }


    return (
        <div>
            <button onClick={handleTaskSelectReset}>Reset</button>
            <hr/>
            <ul>
                {
                    tasks.map(task => (
                        <TaskItem key={task.id} isSelected={task.id === selectedTaskId} task={task} onTaskSelected={handleTaskSelect}/>
                    ))
                }
            </ul>
        </div>
    )
}