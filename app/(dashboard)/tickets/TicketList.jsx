import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

async function getTickets() {
  const supabasa = createServerComponentClient({ cookies });
  const { data, error } = await supabasa.from("tickets").select();

  if (error) {
    console.log(error.message);
  }

  return data;
}

export default async function TicketList() {
  const tickets = await getTickets();
  console.log("tickets", tickets);
  return (
    <>
      {tickets.map((tickets) => (
        <div key={tickets.id} className="card my-5">
          <Link href={`/tickets/${tickets.id}`}>
            <h3>{tickets.title}</h3>
            <p>{tickets.body.slice(0, 200)}...</p>
            <div className={`pill ${tickets.priority}`}>
              {tickets.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center"> There are no open tickets, yay!</p>
      )}
    </>
  );
}
