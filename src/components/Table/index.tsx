import { useContext } from 'react'
import { SearchForm } from '../SearchForm'
import { PriceHighlight, TableContainer, TableContent } from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Table() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <TableContainer>
      <SearchForm />
      <TableContent>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TableContent>
    </TableContainer>
  )
}
