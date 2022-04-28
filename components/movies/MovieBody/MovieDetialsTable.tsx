import React,{useMemo} from 'react'
import { NextPage } from 'next';
import { useTable } from 'react-table';

type TableColumns = {
    Header:string,
    accessor:string
}[];

const MovieDetialsTable:NextPage<{movie:any}> = ({movie}):JSX.Element => {
    
const data = useMemo(() => 
[
    {
        col1:movie.original_title,
        col2:movie.overview,
        col3:movie.homepage,
        col4:movie.release_date,
        col5:Math.floor(movie.runtime / 60) + ',' + (movie.runtime - Math.floor(movie.runtime / 60) * 60) + 'h',
        col6:movie.budget + '$',
        col7:movie.revenue + "$",
       
    },
    
]

, []);

const columns:TableColumns | any = useMemo(() =>[
{
    Header:'Title',
    accessor:'col1'
},
{
    Header:'Description',
    accessor:'col2'
},
{
    Header:'Website',
    accessor:'col3'
},
{
    Header:'Release Date',
    accessor:'col4'
},
{
    Header:'Duration(hours)',
    accessor:'col5'
},
{
    Header:'Budget',
    accessor:'col6'
},
{
    Header:'Revenue',
    accessor:'col7'
},


],[]);

const tableIntance = useTable({columns,data});
const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableIntance;
  return (
    <div>
        
        <table className='flex' {...getTableProps()}>
            <thead className=''>
                {headerGroups.map(headerGroup => (
                <tr className='flex flex-col items-start sm:hidden' {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map(column =>(
                        <th className='px-[2rem] py-[0.5rem]' {...column.getHeaderProps()}>
                  {column.render('Header')}
                 
                </th>
                        ))}
                </tr>
                 ))}
            </thead>
            <tbody  className='' {...getTableBodyProps()}>
                {rows.map((row:any) =>{
                    prepareRow(row)
                        return(
                            <tr className='flex flex-col sm:px-[2rem]'   {...row.getRowProps()}>
                                {row.cells.map((cell:any) =>{
                                    return(
                                        <td className='py-[0.5rem]'>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}  
                            </tr> )})}
            </tbody>
        </table>
    </div>
  )
}

export default MovieDetialsTable