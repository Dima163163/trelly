import {useEffect, useState} from 'react';
import {getTask, type TaskDetailsData} from '../dal/api';

export const useTaskDetails = (selectedTaskId: string | null, boardId: string | null) => {
    const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null)

    // Храним предыдущие пропсы для отслеживания изменений
    const [prevIds, setPrevIds] = useState({ selectedTaskId, boardId });

    // Проверяем изменения прямо во время рендера
    if (prevIds.selectedTaskId !== selectedTaskId || prevIds.boardId !== boardId) {
        // Обновляем трекер пропсов
        setPrevIds({ selectedTaskId, boardId });

        // Если условия выполняются — сбрасываем состояние
        if (!selectedTaskId && !boardId) {
            setTaskDetails(null);
        }
    }

    useEffect(() => {
        if (!selectedTaskId && !boardId) {
            return
        }

        if (selectedTaskId && boardId){
            const promise = getTask(boardId, selectedTaskId)
            promise.then(json => setTaskDetails(json.data))

        }
    }, [selectedTaskId, boardId])

    return {taskDetails}

}