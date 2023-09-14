import { useState } from "react";

export default function Calc() {
  const [Data, setData] = useState("");
  return (
    <>
      <table align="center" style={{ marginTop: 60, height: 60 }}>
        <div className="container-sm m-3 border border-4 border-dark">
          <div className="row">
            <input
              type="text"
              value={Data}
              className="border border-3 border-dark fs-1"
            />
          </div>
          <div className="row">
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                setData("");
              }}
            >
              AC
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              /
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              %
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={() => {
                try {
                  let temp = Data.toString();
                  temp = temp.slice(0, temp.length - 1);
                  setData(temp);
                } catch (Exception) {
                  setData("");
                }
              }}
            >
              &#9003;
            </div>
          </div>
          <div className="row">
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              7
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              8
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              9
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              *
            </div>
          </div>
          <div className="row">
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              4
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              5
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              6
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              -
            </div>
          </div>
          <div className="row">
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              1
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              2
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              3
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              +
            </div>
          </div>
          <div className="row">
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              00
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              .
            </div>
            <div
              className="col-3 rounded-circle btn btn-dark fs-1"
              onClick={(e) => {
                setData(Data + e.target.innerHTML);
              }}
            >
              0
            </div>
            <div
              className="col-3 rounded-circle btn btn-warning fs-1"
              onClick={(e) => {
                try {
                  setData(eval(Data));
                } catch (Exception) {
                  setData("error");
                }
              }}
            >
              =
            </div>
          </div>
        </div>
      </table>
    </>
  );
}
