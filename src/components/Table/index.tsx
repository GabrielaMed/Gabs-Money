import { useContext, useEffect, useState } from "react"
import { SearchForm } from "../SearchForm"
import { PriceHighlight, TableContainer, TableContent } from "./styles"
import { TransactionsContext } from "../../contexts/TransactionsContext"

export function Table() {
    const { transactions } = useContext(TransactionsContext);

    return (
        <TableContainer>
            <SearchForm />
            <TableContent>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>R$ {transaction.price}</PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </TableContent>
        </TableContainer>
    )
}