import {useEffect, useState} from 'react';
import {getTasks, type TaskDetailsData} from '../dal/api';

export const useTasks = () => {
    const [tasks, setTasks] = useState<Array<TaskDetailsData> | null>(null)

    useEffect(() => {

        const promise = getTasks()

        promise.then(json => {
            setTasks(json.data)
        })
    }, []);

    return {
        tasks
    }
}