import { cn } from "../../../lib/cn";
import { tableVariants } from "./variants";

function Table({
  children,
  variant = "default",
  className,
}) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          tableVariants({
            variant,
            className,
          })
        )}
      >
        {children}
      </table>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Header                                    */
/* -------------------------------------------------------------------------- */

function Header({
  children,
  className,
}) {
  return (
    <thead
      className={cn(
        "bg-gray-100 dark:bg-gray-900",
        className
      )}
    >
      {children}
    </thead>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Body                                     */
/* -------------------------------------------------------------------------- */

function Body({
  children,
  className,
}) {
  return (
    <tbody
      className={cn(className)}
    >
      {children}
    </tbody>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Row                                     */
/* -------------------------------------------------------------------------- */

function Row({
  children,
  className,
}) {
  return (
    <tr
      className={cn(
        "border-b last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900",
        className
      )}
    >
      {children}
    </tr>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Head                                     */
/* -------------------------------------------------------------------------- */

function Head({
  children,
  className,
}) {
  return (
    <th
      className={cn(
        "px-6 py-4 text-left text-sm font-semibold",
        className
      )}
    >
      {children}
    </th>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Cell                                    */
/* -------------------------------------------------------------------------- */

function Cell({
  children,
  className,
}) {
  return (
    <td
      className={cn(
        "px-6 py-4 text-sm",
        className
      )}
    >
      {children}
    </td>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Head = Head;
Table.Cell = Cell;

export default Table;