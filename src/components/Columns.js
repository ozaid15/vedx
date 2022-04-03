import { format } from 'date-fns'

export const COLUMNS = [
    {
      Header: "ORDER ID",
      accessor: "order_id"
    },
    {
      Header: "CUSTOMER",
      accessor: "customer",
      disableSortBy: true
    },
    {
      Header: "ADDRESS",
      accessor: "completeAddress",
    },
    {
      Header: "PRODUCT",
      accessor: "product",
    },
    {
      Header: "DATE",
      accessor: "dates",
      Cell: ({value}) => { return format(new Date(value),'dd/MM/yyyy')}
    },
    {
      Header: "STATUS",
      accessor: "status"
    }
  ]