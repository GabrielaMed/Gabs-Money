import { useEffect, useState } from "react"
import { SearchForm } from "../SearchForm"
import { PriceHighlight, TableContainer, TableContent } from "./styles"

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Table() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadTransaction() {
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();

        //console.log(data);
        setTransactions(data);
    }

    useEffect(() => {
        loadTransaction();
    }, [])


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