import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: "Dojo Helpdesk | Tickets",
};

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets Page</h2>
          <p>
            <small>Current open tickets</small>
          </p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
          <button className="btn-primary">Create Ticket</button>
        </Link>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
