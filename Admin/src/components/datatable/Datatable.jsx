import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({columns}) => {

  const location = useLocation()
  const path = location.pathname.split("/")[1]
  
  const[list, setList] = useState() 

  const { data } = useFetch(`/${path}`)

  useEffect(()=>{
    setList(data)
  },[data])

  const handleDelete = async (id) => {
    try{
      await axios.delete(`/${path}/${id}`)
      setList(list.filter((item) => item._id !== id))
      window.location.reload(false)
    }catch(err){}
  }

  const handleDeleteRoom = async (id) => {
    try{
      await axios.delete(`/${path}/${id}/${id}`)
      setList(list.filter((item) => item._id !== id))
      window.location.reload(false)
    }catch(err){}
  }

  const isUsersOrHotelsPage =
  location.pathname === "/users" || location.pathname === "/hotels"

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>    <div className="cellAction">
          {isUsersOrHotelsPage && (
            <div className="deleteButton" onClick={() => handleDelete(params.row._id)}>
              Delete
            </div>
          )}
        </div><div className="cellAction">
              {location.pathname === "/hotelrooms" && (
                <div
                  className="deleteButton"
                  onClick={() => handleDeleteRoom(params.row._id)}
                >
                  Delete Room
                </div>
              )}
            </div></>
        )
      },
    },
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New 
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default Datatable;
