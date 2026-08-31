export type TaskDetailsDto = {
    id: string
    title: string
    status: number
    description: string | null
    boardId: string
    addedAt: string
    priority: number
    boardTitle: string
}

export type TaskDetailsData = {
    id: string
    attributes: TaskDetailsDto
}

type GetTaskOutput = {
    data: TaskDetailsData
}

type GlobalTaskListResponse = {
    data: TaskDetailsData[]
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY

    if (!apiKey) {
        return undefined
    }

    return {
        'api-key': apiKey
    }
}

export const getTask = (boardId: string, selectedTaskId: string)=> {
    const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}

export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
    }).then(res => res.json())

    return promise
}