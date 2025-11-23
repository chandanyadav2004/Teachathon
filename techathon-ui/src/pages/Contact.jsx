import React from "react";

const PROFILE_A = "/mnt/data/682e61bd-95c5-41ee-880c-3aa9c1346192.png";
const PROFILE_B = "/mnt/data/79dab2c9-2a94-4234-adc8-4d41f9b81973.png";

export default function Contact() {
  const leaders = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      role: "Faculty Lead",
      phone: "+91-98765-43210",
      img: PROFILE_A,
    },
    {
      id: 2,
      name: "Mr. Rohit Verma",
      role: "Event Coordinator",
      phone: "+91-91234-56789",
      img: PROFILE_B,
    },
    {
      id: 3,
      name: "Ms. Priya Singh",
      role: "Student Lead",
      phone: "+91-99887-66554",
      img: PROFILE_A,
    },
  ];

  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT: Google Map */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-mono text-green-300 mb-4">Contact & Location</h2>

          <div className="rounded-lg border border-green-400/30 p-1 bg-black/30 max-w-full">
            <div className="rounded-md overflow-hidden bg-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6290091539504!2d72.82588847555657!3d19.385210081884036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec74e3140ff%3A0x75f69f9215d5c989!2sAnnasaheb%20Vartak%20College%20of%20Arts%2C%20Commerce%2C%20Science!5e0!3m2!1sen!2sin!4v1763892105151!5m2!1sen!2sin" 
                
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[360px] border-0"
              ></iframe>
            </div>
          </div>

          <div className="mt-6 text-green-200/80 font-mono">
            <p className="mb-2">Vartak  College </p>
            <p className="text-sm mb-1">Shastri Nagar, Vishal Nagar, Vasai West, Vasai-Virar, Maharashtra 401202</p>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:t23.avcollege@avc.ac.in" className="text-green-200 hover:underline">
               t23.avcollege@avc.ac.in
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT: Leaders */}
        <aside className="lg:col-span-5">
          <h3 className="text-xl font-mono text-green-300 mb-4">Event Leads</h3>

          <div className="space-y-4">
            {leaders.map((leader) => (
              <div
                key={leader.id}
                className="p-4 rounded-md border border-green-400/20 bg-black/20 flex flex-col sm:flex-row gap-4"
              >
                {/* LEFT (image only on small devices) */}
                <div className="w-full sm:w-auto flex justify-center sm:block">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-20 h-20 sm:w-16 sm:h-16 rounded-md object-cover border border-green-400/10"
                  />
                </div>

                {/* RIGHT: name & phone */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="font-mono text-green-200 font-semibold text-center sm:text-left">
                    {leader.name}
                  </div>
                  <div className="text-green-200/70 text-sm text-center sm:text-left">
                    {leader.role}
                  </div>

                  <a
                    href={`tel:${leader.phone}`}
                    className="mt-2 sm:mt-1 inline-block text-sm text-green-200/90 font-mono border border-green-400/20 px-3 py-1 rounded hover:bg-black/30 text-center sm:text-left"
                  >
                    {leader.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
}
