import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import image from '../assets/download.png'

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs}
  }

  const rows = [
    createData('July 6,2024', 'Branch 1', '$ 30', 'Paid'),
    createData('July 6,2024', 'Branch 2', '$ 30', 'Paid'),
    createData('July 6,2024', 'Branch 3', '$ 30', 'Paid'),
    createData('July 6,2024', 'Branch 4', '$ 30', 'Paid'),
  ];

export default function Invoice() {

  return (
    <>
        <div className="main h-screen " style={{backgroundColor:"#F2F9FF"}}>
            <div className=" h-[20%]"></div>
            <h1 className='text-2xl font-bold mb-4 text-black flex items-center ml-[13%]'><img src="assets/backward-arrow.png" className='w-4 h-5 pt-1 inline mr-2'/>Invoices</h1>
            <hr className='mb-2'/>
            <div className="w-3/4 mx-auto">
            <TableContainer component={Paper} className=''>
                <Table sx={{ minWidth: 650 }} >
                <TableHead>
                <TableRow>
                    <TableCell className='text-black text-xl font-bold '>Date</TableCell>
                    <TableCell align="right" className='text-black text-xl font-bold '>Branch Name</TableCell>
                    <TableCell align="right" className='text-black text-xl font-bold '>Invoice Total</TableCell>
                    <TableCell align="right" className='text-black text-xl font-bold '>Status</TableCell>
                    <TableCell ></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right" className=''><img src={image} alt="#" className='w-5 ml-[80%] ' /></TableCell>
                    </TableRow>
                ))}
                </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
        
    </>
  )
}
