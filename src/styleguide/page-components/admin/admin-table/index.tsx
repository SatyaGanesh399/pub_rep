import React, { useState } from "react";
import addToast from 'react-hot-toast'
import { useTable } from "react-table";
import {
  evaluate,
  updatepackage,
  removejourney,
  uploadReportAction
} from "@src/actions/admin-actions";
import { downloadReportAction } from "@src/actions/general-actions";
import UploadModal from "@page-components/upload-modal";

import css from "./index.module.scss";

type AdminTableProps = {
  tableData: [];
};

const AdminTable = ({ tableData }: AdminTableProps) => {
  const data = React.useMemo(() => tableData, [tableData]);
  const [selectedJourney, setSelectedJourney] = useState("");

  const columns = React.useMemo(
    () => [
      {
        Header: "Email",
        accessor: "email" // accessor is the "key" in the data
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Package",
        accessor: "package"
      },
      {
        Header: "Journey",
        accessor: "journey"
      },
      {
        Header: "Report",
        accessor: "report"
      },
      {
        Header: "Actions",
        accessor: "action"
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });
  const [isUploadModalVisible, setUploadModalVisibility] = useState(false);
  const [email, setEmail] = useState("");

  const getEvaluation = email => {
    evaluate({ email: email })
      .then(res => {
        addToast.success(`${res.message} for ${email}`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const updatePackage = (packageType, email) => {
    updatepackage({ email: email, packageType: packageType })
      .then(res => {
        addToast.success(`${res.message} for ${email}`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const removeJourney = email => {
    if (selectedJourney === "") {
      addToast.error("Select the Journey to be removed")
      return false;
    }
    removejourney({ email: email, journey: selectedJourney })
      .then(res => {
        addToast.success(`${res.message} for ${email}`)
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const uploadReport = formData => {
    if (formData !== false) {
      formData.append("email", email);
      uploadReportAction(formData)
        .then(res => {
          setUploadModalVisibility(false);
         addToast.success(`${res.message} for ${email}`)
        })
        .catch(err =>
          addToast.error(err.response.data)
        );
    } else {
      setUploadModalVisibility(false);
      addToast.error("Select File to Upload")
    }
  };

  const downloadReport = filename => {
    downloadReportAction(filename)
      .then(res => {
        const file = new Blob([res.data], { type: "application/pdf" });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      })
      .catch(err => {
        addToast.error(err.response.data)
      });
  };

  return (
    <>
      <UploadModal
        modalBtnText="Upload"
        modalClipartType={"report"}
        modalText="Select File"
        isModalOpen={isUploadModalVisible}
        onModalClose={uploadReport}
        showCloseBtn={false}
      />
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
          {rows.map((row, rowIndex:number) => {
            prepareRow(row);
            return (
              <tr key={rowIndex} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  const { email, report } = cell.row.values;
                  return cell.column.id === "action" ? (
                    <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                      <button onClick={() => getEvaluation(email)}>
                        Evaluate
                      </button>
                      <button onClick={() => updatePackage("none", email)}>
                        Remove Package
                      </button>
                      <button onClick={() => updatePackage("basic", email)}>
                        Basic Package
                      </button>
                      <button onClick={() => updatePackage("medium", email)}>
                        Intermediate Package
                      </button>
                      <button onClick={() => updatePackage("advanced", email)}>
                        Advanced Package
                      </button>
                      <button
                        onClick={() => {
                          setEmail(email);
                          setUploadModalVisibility(true);
                        }}
                      >
                        Upload Report
                      </button>
                      <button onClick={() => downloadReport(report)}>
                        Show Report
                      </button>
                    </td>
                  ) : cell.column.id !== "journey" ? (
                    <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                      {cell.render("Cell")}
                    </td>
                  ) : (
                    <td key={cell.column.id} {...cell.getCellProps()} className={css.adminTableCell}>
                      <select
                        onChange={e => setSelectedJourney(e.target.value)}
                      >
                        <option value="">Select</option>
                        {cell.value.map((val, i) => (
                          <option key={`journey_opt_${i}`} value={val}>
                            {val}
                          </option>
                        ))}
                      </select>
                      <button onClick={() => removeJourney(email)}>
                        Remove
                      </button>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminTable;
