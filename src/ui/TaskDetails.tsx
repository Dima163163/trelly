import {useTaskDetails} from '../bll/useTaskDetails';
import styles from './TaskDetails.module.css'

type Props = {
    selectedTaskId: string | null
    boardId: string | null
}

export const TaskDetails = ({selectedTaskId,boardId}: Props) => {
    const {taskDetails} = useTaskDetails(selectedTaskId, boardId)

    return (
        <div className={styles.task}>
            <h3>Task details</h3>
            {!taskDetails && !selectedTaskId && 'Task is not selected'}
            {selectedTaskId && !taskDetails && <span>Loading...</span>}
            {selectedTaskId && taskDetails && taskDetails.id !== selectedTaskId && <span>Loading...</span>}
            {taskDetails &&  <div>
                <p>
                    title - {taskDetails.attributes.title}
                </p>
                <p>
                    boardTitle - {taskDetails.attributes.boardTitle}
                </p>
                <p>
                    description - {taskDetails.attributes.description}
                </p>
            </div>}
        </div>
    );
};
