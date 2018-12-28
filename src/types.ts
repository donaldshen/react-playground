export type Todo = {
  id: number
  text: string
  completed: boolean
}

export enum Filter {
  All = '全部',
  Completed = '已完成',
  Uncompleted = '未完成',
}

export type State = {
  filter: Filter
  todos: Todo[]
  fuck: number
}
