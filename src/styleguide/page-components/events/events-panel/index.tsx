import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import classNames from "classnames";
import A from "@styleguide/components/a";
import Img from "@styleguide/components/img";
import Slider from "@styleguide/components/slider";
import { Event } from "@src/types/event";
import { getEventsAction } from "@src/actions/general-actions";

import css from "./index.module.scss";

const EventsPanelSection = () => {
  const [events, setEvents] = useState<Event[]>([]);
  useEffect(() => {
    getEventsAction().then(events =>
      setEvents(events.filter(event => event.status === "active"))
    );
  }, []);

  return (
    <div className={classNames(css.promoSection, css.videoSection)} id="events">
      <div className={css.promoHeading}>Upcoming Events</div>
      {events.length === 0 ? (
        <div className={css.promoSubHeading}>No Events Released</div>
      ) : (
        <>
          <div className={css.promoSubHeading}>
            Beyond the clicks, catch up with us. Meet us live!
          </div>
          <Slider
            slidesLength={events.length}
            sliderName="video"
            showDots={true}
            containerStyles={css.sliderVideoContainer}
            slideWidth={374}
            sliderWindowWidth={374 * events.length}
          >
            {events.map((event, i) => (
              <div key={`event-slide-${i}`} className={css.slideVideoContainer}>
                <div className={css.slideVideoImageContainer}>
                  <Img
                    https
                    className={css.slideVideoImage}
                    src={event.banner}
                    alt={event.title}
                  />
                </div>
                <div className={css.slideVideoContent}>
                  <h3 className={css.slideVideoHeading}>{event.title}</h3>
                  <p className={css.slideVideoHeading2}>
                    {format(
                      new Date(event.datetime),
                      "E LLL dd yyyy, hh:mm aaa"
                    )}
                  </p>
                  <p className={css.slideVideoSubHeading}>
                    {event.description}
                  </p>
                  <A
                    internal
                    link="/event/register"
                    className={css.registerBtn}
                  >
                    Register
                  </A>
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
};

export default EventsPanelSection;
