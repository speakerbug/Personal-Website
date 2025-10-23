import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Meeting | Henry Saniuk, Jr.',
  description: "Reserve time on Henry Saniuk's calendar using the booking tool.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: '/calendar',
  },
};

export default function CalendarPage() {
  return (
    <main>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-xl-8 col-lg-9 text-center">
              <h1 className="mb-3">Schedule time with Henry</h1>
              <p className="lead mb-0">
                Choose a meeting slot that works for you using the booking calendar below.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card shadow-sm">
                <div className="card-body p-0">
                  <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qh1_kjLlCPrx7du_dZh5qTKgMuN3F2t8TMI9wyKj6Z_ALZffaXAZbYedW5vetD-9ReQc4_qoh?gv=true"
                    title="Schedule a meeting with Henry Saniuk"
                    style={{ border: 0 }}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
