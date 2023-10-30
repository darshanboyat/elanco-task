import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import DataTable from "../../components/DataTable";

export default function Application() {
  const [applications, setApplications] = useState([]);
  const [application, setApplication] = useState([]);
  const [resourceCategory, setResourceCategory] = useState("");

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/applications").then(({ data }) => {
      setApplications(data);
      setResourceCategory(data[0]);
      axios
        .get(process.env.REACT_APP_URL + "/applications/" + data[0])
        .then((res) => setApplication(res.data));
    });
  }, []);

  const changeApplication = (application: string) => {
    setResourceCategory(application);
    setApplication([]);
    axios
      .get(process.env.REACT_APP_URL + "/applications/" + application)
      .then(({ data }) => setApplication(data));
  };
  return (
    <Suspense fallback={"Loading...."}>
      <div className="mx-4 lg:mx-auto mt-20 max-w-[1450px] ">
        <h2 className="py-4 text-2xl font-bold">Applications</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[25%] lg:max-h-[80vh] overflow-scroll thin-scroll flex flex-row lg:flex-col">
            {applications.map((app) => (
              <div className={`px-2 py-3 min-w-[150px] lg:min-w-[95%] max-w-[150px] mx-1 my-1 bg-slate-200 rounded-xl font-semibold ${resourceCategory === app && '!bg-blue-600 text-white'} cursor-pointer relative z-50`} onClick={() => changeApplication(app)}>
                {app}
              </div>
            ))}
          </div>
          <DataTable application={application} />
        </div>
      </div>
    </Suspense>
  );
}