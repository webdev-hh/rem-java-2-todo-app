const nextStatus = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
  DONE: 'DONE',
}

export const getNextStatus = status => nextStatus[status]
