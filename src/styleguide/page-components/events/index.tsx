import React from "react";
import PageLayout from "@page-components/page-layout";

import EventsHero from "./events-hero";
import EventsPanelSection from "./events-panel";

const EventsPage = () => {
  return (
    <PageLayout>
      <>
        <>
          <EventsHero />
          <EventsPanelSection />
        </>
      </>
    </PageLayout>
  );
};

export default EventsPage;
