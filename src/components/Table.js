import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination, useFilters } from "react-table";
import { COLUMNS } from './Columns'
import axios from "axios";
import './style.css'
import FilterByStatus from "./FilterByStatus";
import {Search} from "./Search";

export const Table = () => {
  let [data, setData] = useState([]);
  const [items, setItems] = useState(0);
  

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/Ved-X/assignment/orders')
    .then(Response => {
      setData(Response.data);
      setItems(Response.data.length);
      // console.log(data)
    })
    .catch(err => {
      console.log('something wrong');
    })
  
  }, []);
  data && data.map( ele => {
    let a = ele.date.split("/");
    let b  = new Date(a[2],a[1]-1,a[0]);
    ele.dates = b.toISOString();
    ele.completeAddress = [ele.country, <br/> ,<add>{ele.address}</add>];
    ele.product = [ele.product_title, <br/> ,<add>{ele.product_description}</add>];
  })
  // console.log(data);
  const columns = useMemo( () => COLUMNS,[]);
  // const datas = useMemo( () => data,[]);
  // const defaultColumn = useMemo( () => {
  //   return {
  //     Filter: Search
  //   }
  // },[])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    state,
    setFilter,
    setGlobalFilter,
  } = useTable({
    columns,
    data
    // defaultColumn
  }, 
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination);

  const { globalFilter} = state;

  let size = rows.length;

  return (
    <>
    <div className="header">
      <span className="allPage">All Orders: {items}</span>
      <span className="onePage">Showing {Math.min(1,size)} - {Math.min(10,size)} of {size} results</span>
    </div>
    <hr/>
    <Search data={data} setData={setData} setFilter={setFilter}/>
    <FilterByStatus filter={globalFilter} setFilter={setGlobalFilter}/>
    <table {...getTableProps()} className="tabl">
      <thead>
        {
          headerGroups.map( (headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map( (column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? '🔽' :'🔼') : ''}
                    </span>
                  </th>
              ))}
            </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          page.map( row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {
                  row.cells.map( (cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  })
                }
              </tr>
            )
          })
        }
        
      </tbody>
    </table>
    </>
  )

}