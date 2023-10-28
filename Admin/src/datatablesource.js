export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="avatar" />
          {params.row.username}
        </div>
      )
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "tara",
    headerName: "Country",
    width: 100,
  },

  {
    field: "oras",
    headerName: "City",
    width: 170,
  },

  {
    field: "telefon",
    headerName: "Phone",
    width: 130,
  },
]

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250},

  {
    field: "nume",
    headerName: "Name",
    width: 250,
  },
  {
    field: "tip",
    headerName: "Type",
    width: 100,
  },
  {
    field: "titlu",
    headerName: "Title",
    width: 230,
  },
  {
    field: "oras",
    headerName: "City",
    width: 100,
  },
]
  export const roomsColumns = [
    { field: "_id", headerName: "ID", width: 250},
    {
      field: "titlu",
      headerName: "Title",
      width: 230,
    },
    {
      field: "descriere",
      headerName: "Description",
      width: 300,
    },
    {
      field: "pret",
      headerName: "Price",
      width: 100,
    },
    {
      field: "maxPersoane",
      headerName: "Max People",
      width: 100,
    },

]