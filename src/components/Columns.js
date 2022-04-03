import { format } from 'date-fns'
import { Search } from './Search'

export const COLUMNS = [
    {
      Header: "ORDER ID",
      accessor: "order_id",
      Filter: Search,
      disableFilters: true
    },
    {
      Header: "CUSTOMER",
      accessor: "customer",
      Filter: Search,
      disableSortBy: true
    },
    {
      Header: "ADDRESS",
      accessor: "completeAddress",
      Filter: Search,
      disableFilters: true
    },
    {
      Header: "PRODUCT",
      accessor: "product",
      Filter: Search,
      disableFilters: true
    },
    {
      Header: "DATE",
      accessor: "dates",
      Filter: Search,
      disableFilters: true,
      Cell: ({value}) => { return format(new Date(value),'dd/MM/yyyy')}
    },
    {
      Header: "STATUS",
      accessor: "status",
      Filter: Search,
      disableFilters: true
    }
  ]