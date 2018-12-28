import React from 'react'
import Link from './link'
import { Filter } from '../../types'
import './style.css'

export default function Filters () {
  return (
    <p className='filters'>
      <Link filter={Filter.All}> {Filter.All} </Link>
      <Link filter={Filter.Completed}> {Filter.Completed} </Link>
      <Link filter={Filter.Uncompleted}> {Filter.Uncompleted} </Link>
    </p>
  )
}
