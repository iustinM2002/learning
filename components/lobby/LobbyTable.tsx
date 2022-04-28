import { NextPage } from 'next';
import React,{useMemo} from 'react'
import { useFlexLayout, useTable } from 'react-table'
import { lobbyElement } from 'types';
const LobbyTable:NextPage<{element:lobbyElement}> = ({element}) => {
    
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

    const tableInstance = useTable({columns,data},useFlexLayout)
    const {getTableBodyProps,getTableProps,rows,prepareRow,headerGroups} = tableInstance;
  return (
    <div className='px-[2rem] w-full lg:py-[1rem]'>
        <table className='w-full' {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => 
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(columns =>
                        <th className='border-[1px] border-white' {...columns.getHeaderProps()}>
                            {columns.render('Header')}
                        </th>
                    )}
                </tr>
                )}
            </thead>
            
            <tbody className='' {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return(
                    <tr className='border-[1px] border-white'  {...row.getRowProps()}>
                        {row.cells.map(cell =>
                        <td className='pt-[2rem] px-[2rem] border-[1px] border-white w-[30%] ' {...cell.getCellProps()}>
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