import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { name: "Industry best services", value: "Services" },
    { name: "Run Elanco day-to-day", value: "Resources" },
    { name: "build application to fulfil requirements", value: "Applications" },
    { name: "Cloud Environment", value: "Cloud Computing data" },
  ];
  return (
    <div className="relative isolate overflow-hidden lg:pt-24 lg:pb-20 py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
            Who we are
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Elanco has built many of its services from scratch following
            industry best practices and leveraging software-defined solutions
            wherever possible. One service is Elanco’s Cloud Environment, which
            can be interacted with to produce a rich data extract to help us
            understand areas of improvement within our business. Elanco has
            provided you with access to some of their anonymised Cloud Computing
            data. It includes information about the various applications and the
            accompanying compute resources that run Elanco day-to-day. Using the
            provided data, Elanco would like you to build an application to
            fulfil a certain set of requirements.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/applications"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </Link>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-400">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-black">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
