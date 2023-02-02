import React from 'react'
import {  customersData,customersGrid} 
from '../data/dummy'
import {GridComponent, ColumnsDirective, ColumnDirective,  Page,Selection, Inject, Toolbar, Filter, Sort, Edit} from '@syncfusion/ej2-react-grids'
import { Header } from '../Components'
const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category='Page' title= 'Customers'/>
    <GridComponent dataSource={customersData
    } allowPaging allowSorting toolbar={['Search']} width='auto'>
      <ColumnsDirective>
      {customersGrid.map((item,index)=>{
        return <ColumnDirective key={index} {...item}/>
      })}
      </ColumnsDirective>
      <Inject services={ [Page, Toolbar, Selection, Edit, Sort, Filter]}/>
    </GridComponent>
  </div>
  )
}

export default Customers
