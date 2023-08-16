import React, { useState } from "react";
import { CSVLink } from "react-csv";
import addToast from 'react-hot-toast'
import { useTable } from "react-table";
import { addOfferAction, deleteOfferAction } from "@src/actions/admin-actions";

import { Offer } from "@src/types/offer";

import css from "./index.module.scss";

type AdminTableProps = {
  tableData: [];
};

const AdminOfferTable = ({ tableData }: AdminTableProps) => {
  const data = React.useMemo(() => tableData, [tableData]);

  const [offerData, setOfferData] = useState<Offer>();

  const columns = React.useMemo(
    () => [
      {
        Header: "Key",
        accessor: "title" // accessor is the "key" in the data
      },

      {
        Header: "Description",
        accessor: "description"
      },
      {
        Header: "Percentage",
        accessor: "percentage"
      },
      {
        Header: "Count",
        accessor: "count"
      },

      {
        Header: "Datetime Creation",
        accessor: "datetimeOfCreation"
      },

      {
        Header: "Datetime Expire",
        accessor: "datetimeOfExpire"
      },

      {
        Header: "Action",
        accessor: "_id"
      }
    ],
    []
  );

  const addOffer = (data: Offer) => {
    addOfferAction(data)
      .then(res => {
        addToast.success(`New Offer: ${data.title} added`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const deleteOffer = (id: string, title: string) => {
    deleteOfferAction(id).then(res => {
      addToast.success(`Offer: ${title} deleted`)
    });
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className={css.adminTable}>
      <thead>
        {headerGroups.map((headerGroup, index:number) => (
          <tr key={index}{...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, columnIndex:number) => (
              <th key={columnIndex} {...column.getHeaderProps()} className={css.adminTableHead}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        <tr>
          <td className={css.adminTableCell}>
            <input
              type="text"
              placeholder="Enter title"
              onChange={e =>
                setOfferData({ ...offerData, title: e.target.value })
              }
              required
            />
          </td>

          <td className={css.adminTableCell}>
            <input
              type="text"
              placeholder="Enter description"
              onChange={e =>
                setOfferData({ ...offerData, description: e.target.value })
              }
              required
            />
          </td>

          <td className={css.adminTableCell}>
            <input
              type="text"
              placeholder="Enter Percentage"
              onChange={e =>
                setOfferData({
                  ...offerData,
                  percentage: parseInt(e.target.value)
                })
              }
              required
            />
          </td>

          <td className={css.adminTableCell}>
            <input
              type="text"
              placeholder="No. of users"
              onChange={e =>
                setOfferData({
                  ...offerData,
                  count: e.target.value
                })
              }
              required
            />
          </td>

          <td className={css.adminTableCell}>
            <input
              type="datetime-local"
              placeholder="Enter datetime"
              onChange={e =>
                setOfferData({
                  ...offerData,
                  datetimeOfCreation: (e.target.value as unknown) as Date
                })
              }
              required
            />
          </td>

          <td className={css.adminTableCell}>
            <input
              type="datetime-local"
              placeholder="Enter datetime"
              onChange={e =>
                setOfferData({
                  ...offerData,
                  datetimeOfExpire: (e.target.value as unknown) as Date
                })
              }
              required
            />
          </td>

          <td className={css.adminTableCell}>
            <button onClick={() => addOffer(offerData)}>Add Offer</button>
          </td>
        </tr>
        {rows.map((row, rowIndex:number) => {
          prepareRow(row);
          return (
            <tr key={rowIndex} {...row.getRowProps()}>
              {row.cells.map(cell => {
                const { _id, title } = cell.row.values;
                return cell.column.id === "_id" ? (
                  <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                    <button onClick={() => deleteOffer(_id, title)}>
                      Delete
                    </button>
                  </td>
                ) : cell.column.id !== "_id" ? (
                  <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                    {cell.render("Cell")}
                  </td>
                ) : (
                  ""
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminOfferTable;
