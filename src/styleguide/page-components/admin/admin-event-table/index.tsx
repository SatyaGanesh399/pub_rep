import React, { useState } from "react";
import { CSVLink } from "react-csv";
import addToast from 'react-hot-toast'
import { useTable } from "react-table";
import {
  addEventAction,
  updateEventAction,
  deleteEventAction
} from "@src/actions/admin-actions";
import { Event } from "@src/types/event";
import { IconDownload } from "@icons/index";

import css from "./index.module.scss";
import { add } from "date-fns";

type AdminTableProps = {
  tableData: [];
};

const AdminEventTable = ({ tableData }: AdminTableProps) => {
  const data = React.useMemo(() => tableData, [tableData]);
  const [eventData, setEventData] = useState<Event>();

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title" // accessor is the "key" in the data
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Description",
        accessor: "description"
      },
      {
        Header: "Banner",
        accessor: "banner"
      },
      {
        Header: "Datetime",
        accessor: "datetime"
      },
      {
        Header: "Registrations",
        accessor: "registrations"
      },
      {
        Header: "Actions",
        accessor: "_id"
      }
    ],
    []
  );

  const updateEventStatus = (status, id, title) => {
    updateEventAction(status, id)
      .then(res => {
        addToast.success(`Event: ${title} updated`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const addEvent = (data: Event) => {
    addEventAction(data)
      .then(res => {
        addToast.success(`New Event: ${data.title} added`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const deleteEvent = (id: string, title: string) => {
    deleteEventAction(id)
      .then(res => {
        addToast.success(`Event: ${title} deleted`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
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
  <tr key={index} {...headerGroup.getHeaderGroupProps()}>
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
                setEventData({ ...eventData, title: e.target.value })
              }
              required
            />
          </td>
          <td className={css.adminTableCell}>
            <select
              onChange={e =>
                setEventData({ ...eventData, status: e.target.value })
              }
              required
            >
              <option>Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </td>
          <td className={css.adminTableCell}>
            <input
              type="text"
              placeholder="Enter description"
              onChange={e =>
                setEventData({ ...eventData, description: e.target.value })
              }
              required
            />
          </td>
          <td className={css.adminTableCell}>
            <input
              type="text"
              placeholder="Enter banner link"
              onChange={e =>
                setEventData({ ...eventData, banner: e.target.value })
              }
              required
            />
          </td>
          <td className={css.adminTableCell}>
            <input
              type="datetime-local"
              placeholder="Enter datetime"
              onChange={e =>
                setEventData({
                  ...eventData,
                  datetime: (e.target.value as unknown) as Date
                })
              }
              required
            />
          </td>
          <td className={css.adminTableCell} />
          <td className={css.adminTableCell}>
            <button onClick={() => addEvent(eventData)}>Add Event</button>
          </td>
        </tr>
        {rows.map((row, index:number) => {
          prepareRow(row);
          return (
            <tr key={index} {...row.getRowProps()}>
              {row.cells.map(cell => {
                const { _id, status, title, registrations } = cell.row.values;
                return cell.column.id === "_id" ? (
                  <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                    <button onClick={() => deleteEvent(_id, title)}>
                      Delete
                    </button>
                  </td>
                ) : cell.column.id === "status" ? (
                  <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                    {status === "active" ? (
                      <button
                        onClick={() =>
                          updateEventStatus("inactive", _id, title)
                        }
                      >
                        Inactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => updateEventStatus("active", _id, title)}
                      >
                        Activate
                      </button>
                    )}
                  </td>
                ) : cell.column.id !== "registrations" ? (
                  <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                    {cell.render("Cell")}
                  </td>
                ) : (
                  <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                    {registrations && registrations.length !== 0 ? (
                      <CSVLink data={registrations}>
                        <IconDownload
                          title="Download Subscribers"
                          className={css.downloadIcon}
                          size={"2x"}
                          width="0"
                        />
                      </CSVLink>
                    ) : (
                      ""
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminEventTable;
