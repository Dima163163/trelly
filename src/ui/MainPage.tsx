import {TasksList} from './TasksList';
import {TaskDetails} from './TaskDetails';
import {useTaskSelection} from '../bll/useTaskSelection';
import styles from './MainPage.module.css'

export function MainPage() {
    const {
        selectedTaskId,
        setSelectedTaskId,
        boardId,
        setBoardId
    } = useTaskSelection()

    const onTaskSelected = (taskId: string | null, boardId: string | null) => {
        setSelectedTaskId(taskId)
        setBoardId(boardId)
    }


    return (
        <>
            <div className={styles.container}>
                <TasksList selectedTaskId={selectedTaskId} onTaskSelected={onTaskSelected} />
                <TaskDetails selectedTaskId={selectedTaskId} boardId={boardId}/>
            </div>
        </>
    )
}