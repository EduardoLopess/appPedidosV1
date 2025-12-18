import { useState } from "react"
import { TableData } from "../../../data/TableDataMock"

interface Table {
    id: number,
    tableNumber: number,
    statusTable: boolean
}


const table: Table[] = TableData

export const useFilter = () => {
    
    const [filter, setFilter] = useState<boolean | null>(null)
    const [tableFilter, setTableFilter] = useState<Table[]>(table)
    const [search, setSearch] = useState<string>("")
    
    const tableOrder = (status: boolean) => {  
        if(filter === status) {
            setTableFilter(table)
            setFilter(null)
            return
        } else {
            const tableOrder = table.filter(item => item.statusTable === status)
            setTableFilter(tableOrder)
            setFilter(status)
        } 
    }

    const searchTable = (value: string) => {
        
        const searchTable = table.filter(item => item.tableNumber.toString().includes(value))
        setTableFilter(searchTable)
            

    }

    return {searchTable, tableOrder, tableFilter, search, setSearch}
}