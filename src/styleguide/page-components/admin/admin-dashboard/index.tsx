import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import addToast, {Toaster} from 'react-hot-toast'
import {
  IconHome,
  IconRefresh,
  IconDownload,
  IconEvent,
  IconUser,
  IconOffer
} from "@icons/index";
import {
  getAllUsersAction,
  getAllSubscribersAction,
  getEventsParticipantsAction,
  getOfferAction
} from "@src/actions/admin-actions";
import AdminTable from "../admin-table";
import AdminEventTable from "../admin-event-table";
import AdminOfferTable from "../admin-offer-table";

import css from "./index.module.scss";
import Link from "next/link";

const AdminView = ({ data, view }) => {
  switch (view) {
    case "users":
      return <AdminTable tableData={data} />;
    case "events":
      return <AdminEventTable tableData={data} />;
    case "offers":
      return <AdminOfferTable tableData={data} />;
    default:
      return <></>;
  }
};

const AdminDashboard = () => {
  const [view, setView] = useState<"users" | "events" | "offers">("users");
  const [tableData, setTableData] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
 

  const getUsers = () => {
    getAllUsersAction()
      .then(res => {
        setTableData(res);
        view !== "users" ? setView("users") : "";
        addToast.success("Refreshed")
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const getSubscribers = () => {
    getAllSubscribersAction()
      .then(res => {
        setSubscribers(res);
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const getEvents = () => {
    getEventsParticipantsAction()
      .then(res => {
        setView("events");
        setTableData(res);
        addToast.success("Refreshed")
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const getOffers = () => {
    getOfferAction()
      .then(res => {
        setView("offers");
        setTableData(res);
        addToast.success("Refreshed")
      })
      .catch(err =>
        addToast.error(err.response.data)
      );
  };

  const refreshComponents = view => {
    switch (view) {
      case "users":
        getUsers();

      case "events":
        getEvents();

      case "offers":
        getOffers();
    }
  };

  useEffect(() => {
    getUsers();
    getSubscribers();
  }, []);

  return (
    <div>
      <Toaster />
      <div className={css.dashboardHeader}>
        <h1>Admin</h1>
        <div>
          <IconEvent
            title="Add Event"
            className={css.refreshIcon}
            size={"2x"}
            onClick={() => getEvents()}
            width="0"
          />
          <IconOffer
            title="offers"
            className={css.refreshIcon}
            size={"2x"}
            onClick={() => getOffers()}
            width="0"
          />
          <IconUser
            title="Users"
            className={css.refreshIcon}
            size={"2x"}
            onClick={() => getUsers()}
            width="0"
          />
          <CSVLink data={subscribers}>
            <IconDownload
              title="Download Subscribers"
              className={css.refreshIcon}
              size={"2x"}
              width="0"
            />
          </CSVLink>
          <IconRefresh
            title="Refresh"
            className={css.refreshIcon}
            size={"2x"}
            onClick={() => refreshComponents(view)}
            width="0"
          />
          <Link href="/">
            <IconHome
              title="Home"
              className={css.homeIcon}
              size={"2x"}
              width="0"
            />
          </Link>
        </div>
      </div>
      <div className={css.adminContent}>
        <AdminView data={tableData} view={view} />
      </div>
    </div>
  );
};

export default AdminDashboard;
