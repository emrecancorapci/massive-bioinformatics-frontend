import { FormattedData } from '@/types/formatted-data';

import { TableCell, TableRow } from '../ui/table';
import { columns } from './columns';

export default function MBTableRow({ row }: { row: FormattedData }) {
  return (
    <TableRow>
      {columns
        .sort((a, b) => a.order - b.order)
        .map((cell) => (
          <TableCell key={cell.id}>
            {cell.CellWrapper === undefined ? <>{row[cell.id]}</> : <cell.CellWrapper>{row[cell.id]}</cell.CellWrapper>}
          </TableCell>
        ))}
    </TableRow>
  );
}
