import {TransactionHistoryTable, TableSections, TableBody, Value} from './TransactionalHistory.styled'


const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryTable>
            <thead>
                <tr>
                <TableSections>Type</TableSections>
                <TableSections>Amount</TableSections>
                <TableSections>Currency</TableSections>
                </tr>
            </thead>

            <TableBody>
                {items.map(({id,type,amount,currency}) => {
                    return (
                    <tr key={id}>
                        <Value>{type}</Value>
                        <Value>{amount}</Value>
                        <Value>{currency}</Value>
                    </tr>
                    )
                }
                )
                }
            </TableBody>
        </TransactionHistoryTable>
    )
}

export default TransactionHistory;







