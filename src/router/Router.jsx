import { Route, Routes } from "react-router-dom";
import Step1 from "../forms/Step1";
import Step2 from "../forms/Step2";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/Step2" element={<Step2 />} />
      </Routes>
    </>
  );
};
export default Router;
