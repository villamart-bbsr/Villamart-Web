import Pagination from "../../../components/Pagination";

const DataTable = ({
  pageTitle,
  dataListName,
  searchKeywordOnSubmitHandler,
  searchInputPlaceHolder,
  searchKeywordOnChangeHandler,
  searchKeyword,
  tableHeaderTitleList,
  isLoading,
  isFetching,
  data,
  children,
  setCurrentPage,
  currentPage,
  headers,
}) => {
  return (
    <div className="space-y-6">
      {pageTitle && (
        <h1 className="text-2xl font-semibold text-green-800 border-b border-green-200 pb-3">
          {pageTitle}
        </h1>
      )}

      <div className="w-full mx-auto">
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between w-full mb-6 gap-4">
            <h2 className="text-xl font-bold text-green-700 flex items-center">
              <span className="inline-block w-2 h-6 bg-orange-500 mr-3 rounded"></span>
              {dataListName}
            </h2>
            
            <div className="text-end">
              <form
                onSubmit={searchKeywordOnSubmitHandler}
                className="flex flex-col justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    id="form-subscribe-Filter"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-green-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    placeholder={searchInputPlaceHolder}
                    onChange={searchKeywordOnChangeHandler}
                    value={searchKeyword}
                  />
                </div>
                <button
                  className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-200 transition duration-200"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md border border-green-100">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-green-100">
                    {tableHeaderTitleList.map((title, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-5 py-3 text-sm font-semibold text-left text-green-800 uppercase border-b border-green-200 "
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {isLoading || isFetching ? (
                    <tr>
                      <td 
                        colSpan={tableHeaderTitleList.length} 
                        className="text-center py-10 w-full"
                      >
                        <div className="flex justify-center items-center space-x-3">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-700"></div>
                          <span className="text-green-700">Loading...</span>
                        </div>
                      </td>
                    </tr>
                  ) : data?.length === 0 ? (
                    <tr>
                      <td 
                        colSpan={tableHeaderTitleList.length}

                        className="text-center py-10 w-full text-gray-500"
                      >
                        No records found
                      </td>
                    </tr>
                  ) : (
                    children
                  )}
                </tbody>
              </table>
              
              {!isLoading && (
                <div className="px-5 py-4 bg-white border-t border-green-200">
                  <Pagination
                    onPageChange={(page) => setCurrentPage(page)}
                    currentPage={currentPage}
                    totalPageCount={headers ? JSON.parse(headers?.["x-totalpagecount"]) : 1}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;