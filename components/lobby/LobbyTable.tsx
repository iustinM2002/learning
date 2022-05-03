import { NextPage } from 'next';
import React,{useMemo} from 'react'
import { useFlexLayout, useTable } from 'react-table'
import { lobbyElement } from 'types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const LobbyTable:NextPage<{element:lobbyElement,setActiveElement:React.Dispatch<React.SetStateAction<boolean>>}> = ({element,setActiveElement}) => {
    
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
    <div className='px-[2rem] w-full min-h-[40vh] bg-black lg:py-[1rem] rounded-[0.5rem] '>
        <div className="cursor-pointer py-[0.5rem]  flex justify-end "  ><FontAwesomeIcon className='text-[1.5rem] bg-white hover:bg-[#ffffff48] px-[0.5rem] py-[0.2rem] transition-all rounded-full text-black' onClick={() => setActiveElement(false)} icon={faXmark}/></div>
        <div className="min-h-[30vh] flex items-center py-[1rem]">

        <table className='w-full' {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => 
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((columns,index) =>
                        <th  className='border-[1px] border-white' {...columns.getHeaderProps()}>
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
                        {row.cells.map((cell,index) =>
                        <td data-testid ={`title_table${index}`} className='pt-[2rem] px-[2rem] border-[1px] border-white w-[30%] ' {...cell.getCellProps()}>
                                {cell.render('Cell')}
                        </td>
                        )}
                    </tr>
                    )})}
            </tbody>
        </table>
        </div>
    </div>

  )
}

export default LobbyTable