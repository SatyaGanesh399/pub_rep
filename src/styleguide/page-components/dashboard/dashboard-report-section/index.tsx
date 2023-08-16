import React, { useContext } from "react";
import Button from "@styleguide/components/button";
import addToast from 'react-hot-toast'
import { AuthorizationContext } from "@src/context/authorization-context";
import DashboardReportClipart from "@svg-resources/dashboard-report-clipart";
import { downloadReportAction } from "@src/actions/general-actions";
import css from "./index.module.scss";
import { addDays, format } from "date-fns";

const DashboardReportSection = () => {

  const {
    loggedInUser: { report, updatedAt }
  } = useContext(AuthorizationContext);

  let updatedAtDate = new Date(updatedAt);
  let reportDownloadDate = addDays(updatedAtDate, 4);
  let reportDownloadDateFormat = format(reportDownloadDate, "do MMMM yyyy");

  const downloadReport = () => {
    report === "" || report == null
      ? addToast.error(`Your Report yet not processed. Check back later after ${reportDownloadDateFormat}`)
      : downloadReportAction(report)
          .then(res => {
            window.open(res.url, "_blank");
          })
          .catch(err => {
            addToast.error(err.response.data)
          });
  };

  return (
    <div className={css.reportContainer}>
      <DashboardReportClipart className={css.reportClipart} />
      <p className={css.reportText}>Download your Career Assessment Report</p>
      <Button className={css.reportBtn} onClick={downloadReport}>
        Download
      </Button>
    </div>
  );
};

export default DashboardReportSection;
