import { NextPage } from 'next';
import React,{useMemo} from 'react'
import { useTable } from 'react-table'
import { lobbyElement } from 'types';
const LobbyTable:NextPage<{element:lobbyElement}> = ({element}) => {
    console.log(element)
    const data = useMemo(() => [
        {
            col1:element.title,
            col2:element.description,
            col3:element.tehn
        }
    ],[]);
    const columns:any = useMemo(() => [
        {
            Header:'Project Name',
            accessor:'col1'
        },
        {
            Header:'Project Description',
            accessor:'col2'
        },
        {
            Header:'Project Tehnologies',
            accessor:'col3'
        }
    ],[]);
    const tableInstance = useTable({columns,data})
    const {getTableBodyProps,getTableProps,rows,prepareRow,headerGroups} = tableInstance;
  return (
    <div className='px-[2rem]'>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => 
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(columns =>
                        <th {...columns.getHeaderProps()}>
                            {columns.render('Header')}
                        </th>
                    )}
                </tr>
                )}
            </thead>
            
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return(
                    <tr  {...row.getRowProps()}>
                        {row.cells.map(cell =>
                        <td className='pt-[2rem] px-[2rem]' {...cell.getCellProps()}>
                                {cell.render('Cell')}
                        </td>
                        )}
                    </tr>
                    )})}
            </tbody>
        </table>
    </div>

  )
}

export default LobbyTable