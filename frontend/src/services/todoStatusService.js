const nextStatus = {
  OPEN: 'IN_PROGRESS',
  IN_PROGRESS: 'DONE',
  DONE: 'DONE',
}

const slugStatus = {
  open: 'OPEN',
  doing: 'IN_PROGRESS',
  done: 'DONE',
}

export const getNextStatus = status => nextStatus[status]

export const slugToStatus = slug => slugStatus[slug]
