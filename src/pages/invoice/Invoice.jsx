import React from "react";
import "./invoice.css";
const Invoice = () => {
  return (
    <div className=" bg-[#f8f9fa] invoice">
      <div className="px-4 xl:px-5 pt-12">
        <div className="page-breadcrumb mb-8 ">
          <p>
            {" "}
            <span className=" text-[#4650dd] hover:underline duration-150">
              Home
            </span>{" "}
            <span className="muted"> / Invoice</span>{" "}
          </p>
        </div>
        <div className=" mb-12">
          <h1 className=" header">invoice</h1>
        </div>
        <div className="row flex mb-12 justify-between items-center">
          <div className="">
            <p className=" font-bold text-xl">Invoice #20190204</p>
          </div>
          <div className=" flex gap-2">
            <button className="btn download-btn">Download</button>
            <button className="btn pay-btn">Pay</button>
          </div>
        </div>
        <div className="card p-12 mb-12">
          <div className=" w-full text-end ">
            <p className=" inline-block px-2 py-1 rounded-[0.25rem] text-xs text-white bg-[#dc3545]">
              Overdue
            </p>
          </div>
          <div className=" mb-12 text-center">
            <img
              src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/brand/brand-1.svg"
              className=" mb-6 max-w-[6rem] mx-auto"
              alt=""
            />
            <p className=" mb-2 text-3xl font-bold">
              Invoice from Vintage, Ltd.
            </p>
            <p className=" muted text-sm">Invoice #20190204</p>
          </div>
          <div className="row flex flex-wrap text-sm ">
            <div className="   w-full md:w-1/2">
              <h6 className=" h6  muted">invoice from</h6>
              <p className=" muted mb-6">
                <strong className=" text-[#343a40]">Franz Kafka</strong>
                <br />
                Bank Clerk <br />
                Nerudova 23 <br />
                111 50 Praha
              </p>
              <h6 className=" h6  muted">Invoice id</h6>
              <p className=" mb-6">#20190204</p>
            </div>
            <div className="   w-full md:w-1/2">
              <h6 className=" h6 muted">invoice to</h6>
              <p className=" muted mb-6">
                <strong className=" text-[#343a40]">Jack London</strong>
                <br />
                Lonely Wolf <br />
                1150 Lost St. <br />
                Middle of Nowhere
              </p>
              <h6 className=" h6 muted">Due Date</h6>
              <p className=" mb-6">Feb 23, 2021</p>
            </div>
          </div>
          <div className="row md:px-3">
            <div className="table-responsive overflow-x-auto">
              <table className=" table my-6 text-sm">
                <thead>
                  <tr>
                    <th className="  text-start">
                      <span className=" font-bold text-sm">Description</span>
                    </th>
                    <th className="  text-start">
                      <span className=" font-bold text-sm">Hours</span>
                    </th>
                    <th className="  text-end">
                      <span className=" font-bold text-sm">Costs</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Novel proofreading</td>
                    <td>50</td>
                    <td className=" text-end">$9230</td>
                  </tr>
                  <tr>
                    <td>Consulting</td>
                    <td>3</td>
                    <td className=" text-end">$333</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total amount due</strong>
                    </td>
                    <td className=" text-end" colSpan={2}>
                      <span className=" text-2xl font-bold"> $9563</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className=" my-12" />
            <p className="h6">Note</p>
            <p className=" muted  text-xs">
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into a horrible vermin. He lay on
              his armour-like back, and if he lifted his head a little he could
              see his brown belly, slightly domed and divided by arches into
              stiff sections
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
