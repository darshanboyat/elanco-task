import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import DataTable from "../../components/DataTable";
import SearchedDataTable from "../../components/SearchedDataTable";
import search from "../../utils/search";

type ApplicationType = {
  id: number;
  InstanceId: string;
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: {
    [key: string]: string;
  };
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}[];
export default function Application() {
  const [applications, setApplications] = useState([]);
  const [searchedResults, setSearchedResults] = useState<ApplicationType>([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL + "/raw").then(({ data }) => {
      setApplications(data);
    });
  }, []);
  let timer: NodeJS.Timeout;
  const debounce = (value: string) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(value);
      let val = search(applications, value);
      setSearchedResults(val);
    }, 1000);
    if (value === "") {
      setSearchedResults([]);
    }
  };

  return (
    <Suspense fallback={"Loading...."}>
      <div className="mx-4 lg:mx-auto mt-16 max-w-[1450px] text-center">
        <h2 className="text-2xl font-bold">Raw</h2>
        <form className="relative z-50 flex justify-start mt-2 mb-4">
          <input
            type="text"
            name="searched"
            placeholder="Search....."
            className="bg-transparent border-b-2 border-slate-400 focus:outline-none active:border-0 w-[70%] lg:w-[30%]  lg:p-2"
            onChange={(e) => {
              debounce(e.target.value);
            }}
          />
        </form>
        <div className="flex justify-center">
          {searchedResults.length === 0 ? (
            <DataTable application={applications} />
          ) : (
            <SearchedDataTable application={searchedResults} />
          )}
        </div>
      </div>
    </Suspense>
  );
}
