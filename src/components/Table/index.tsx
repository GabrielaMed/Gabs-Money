import { PriceHighlight, TableContainer, TableContent } from "./styles"

export function Table() {
    return (
        <TableContainer>
            <TableContent>
                <tbody>
                    <tr>
                        <td width="50%">Burger</td>
                        <td>
                            <PriceHighlight variant="outcome">- R$ 32,90</PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>20/12/2022</td>
                    </tr>

                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">R$ 10.000,00</PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>19/12/2022</td>
                    </tr>
                </tbody>
            </TableContent>
        </TableContainer>
    )
}