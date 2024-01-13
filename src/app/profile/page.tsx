"use client";
import { TreeSite } from "@/entities";
import {
  Footer,
  Header,
  HistoryTicket,
  ModalContentProfile,
  ProfileTicket,
  ProfileTripHistory,
} from "@/widgets";
import { useGetTicketInfoQuery } from "@/services/BibipTripService";
import { useMemo, useState } from "react";
import { getTokenFromSessionStorage } from "@/var/sessionStorage";
import { Ticket, TicketInfo } from "@/global";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const token = getTokenFromSessionStorage();
  const { data } = useGetTicketInfoQuery({
    token,
  });

  const [isShowingHistory, setIsShowingHistory] = useState(false);

  // Фильтрация билетов на этапе рендеринга
  const filteredTickets = useMemo(() => {
    if (!data) return [];
    const currentDate = new Date();
    return data.filter((ticket: Ticket) => {
      const ticketDate = new Date(ticket.arrival_time);
      return isShowingHistory
        ? ticketDate < currentDate
        : ticketDate >= currentDate;
    });
  }, [data, isShowingHistory]);

  const handleSortByFutureClick = () => {
    setIsShowingHistory(false);
  };

  const handleSortByPastClick = () => {
    setIsShowingHistory(true);
  };

  return (
    <>
      <div className="container mx-auto sm:px-10 px-5">
        <Header />
      </div>
      <hr />
      <div className="container mx-auto sm:px-10 px-5">
        <div className="max-w-[840px] mx-auto">
          <TreeSite />

          <div className="flex justify-between">
            <ProfileTripHistory
              handleFutureClick={handleSortByFutureClick}
              handlePastClick={handleSortByPastClick}
              filteredTickets={filteredTickets}
            />
            <div className="flex flex-col">
              {filteredTickets &&
                filteredTickets.map((ticket: Ticket) => (
                  <div key={ticket.order_id}>
                    {isShowingHistory ? (
                      <HistoryTicket ticket={ticket} />
                    ) : (
                      <ProfileTicket
                        setShowModal={setShowModal}
                        ticket={ticket}
                      />
                    )}
                  </div>
                ))}
            </div>
            {/*
            <div className="w-[65%]">
              <HistoryTicket />
              <HistoryTicket />
            </div> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
