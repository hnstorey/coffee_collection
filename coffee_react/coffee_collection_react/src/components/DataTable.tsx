import Modal from "./Modal";
import { server_calls } from "../api/server";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hideable: true },
  { field: 'coffeename', headerName: 'Coffee Name', flex: 1 },
  { field: 'country', headerName: 'Country of Origin', flex: 1 },
  { field: 'varietal', headerName: 'Varietal', flex: 1 },
  { field: 'roaster', headerName: 'Roaster', flex: 1 },
  { field: 'state', headerName: 'Roaster State', flex: 1 },
  { field: 'flavor_notes', headerName: 'Flavor Notes', flex: 1 },
]

function CoffeeTable() {
  const [ open, setOpen ] = useState(false);
  const { coffeeData, getData } = useGetData();
  const [selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection Model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 5000 )
  }

  return (
    <>
      <Modal
        id = { selectionModel }
        open = { open }
        onClose = { handleClose }
      />
      <div className="dataModal">
        <button
          className='modalbutton'
          onClick={ handleOpen }>
            Create New Coffee Entry
          </button>
          <button
          className='modalbutton'
          onClick={ handleOpen }>
            Update Coffee Entry
          </button>
          <button
          className='modalbutton'
          onClick={ deleteData }>
            Delete Coffee Entry
          </button>
      </div>
      <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
      style={{ height: 400, width: '90%' }}>
        <h2>My Coffee Cupboard</h2>
        <DataGrid rows={ coffeeData } columns={ columns } pageSizeOptions={[5]}
        checkboxSelection={true}
        onRowSelectionModelChange={(item: any) => {
          setSelectionModel(item)
        }}
        />
      </div>
    </>
  )
}

export default CoffeeTable
