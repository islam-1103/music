import React from "react";
import { Link } from "react-router-dom";
import { useTourItems } from "../../hooks/useTourItems";
import { sortByDate } from "../../utils/common";
import Loader from "../Loader/Loader";
import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import TourItem from "./TourItem";

const TourItems = () => {
  const { items = [], isLoading } = useTourItems()

  const filtered = sortByDate(
    items
      .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
      .filter((_, i) => i < 5)
  );
  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text="Концерты" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tour-list">
            {filtered.map((item, i) => (
              <TourItem {...item} i={i} key={item.sys.id} />
            ))}
          </ul>
        )}
        <Link to="/tour" className="button-more">
          Все Концерты
        </Link>
      </div>
    </Section>
  );
};

export default TourItems;
