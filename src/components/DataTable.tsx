
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface DataTableProps{
  application: {
    id: number;
    InstanceId: string,
    ConsumedQuantity: string,
    Cost: string,
    Date: string,
    MeterCategory: string,
    ResourceGroup: string,
    ResourceLocation: string,
    Tags: {
      [key: string]: string;
    },
    UnitOfMeasure: string,
    Location: string,
    ServiceName: string
  }[];
}
const columns: GridColDef[] = [
  { field: 'InstanceId', headerName: 'InstanceId', width: 250,},
  { field: 'ServiceName', headerName: 'ServiceName', width: 120,},
  { field: 'MeterCategory', headerName: 'MeterCategory', width: 120, },
  {
    field: 'UnitOfMeasure',
    headerName: 'UnitOfMeasure',
    type: 'number',
    width: 90,
  
  },
  {
    field: 'Location',
    headerName: 'Location',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 90,
  
  },
  {
    field: 'ResourceLocation',
    headerName: 'ResourceLocation',
    type: 'number',
    width: 150,
  
  },
  {
    field: 'Cost',
    headerName: 'Cost',
    type: 'number',
    width: 80,
  
  },
  {
    field: 'Date',
    headerName: 'Date',
    type: 'number',
    width: 120,
  
  },
  {
    field: 'ConsumedQuantity',
    headerName: 'ConsumedQuantity',
    type: 'number',
    width: 150,
  
  },
];

const DataTable:React.FC<DataTableProps> = ({application}) => {
  const getRowId = (row:any) => row.InstanceId;
  console.log(application)
  return (
    <div className='mx-2' style={{ height: 630, width: '100%' }}>
      <DataGrid getRowId={getRowId}
        rows={application}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
      />
    </div>
  );
}
export default DataTable;