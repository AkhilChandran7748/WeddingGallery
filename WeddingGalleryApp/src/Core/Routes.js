//routing files
import React, { lazy, Suspense, } from "react";
// import { RENDER_URL } from "../Utils/Urls";
// import RootRouteGuard from "./RootRouteGuard"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const GuestDashboard = lazy(() => import("../components/WeddingGallery"))
// const WhyMaven = lazy(() => import("../modules/guest/WhyMaven"))
// const Services = lazy(() => import("../modules/guest/Services"))
// const Courses = lazy(() => import("../modules/guest/Courses"))
// const Countries = lazy(() => import("../modules/guest/Countries"))
// const ReferalProgram = lazy(() => import("../modules/guest/ReferalProgram"))
// const Contact = lazy(() => import("../modules/guest/Contact"))
// const AdminDashboard = lazy(() => import("../modules/admin/Admin"))
// const ViewStudent = lazy(() => import("../modules/student/ViewStudent"))
// const DataManager = lazy(() => import("../modules/dataManagement/DataManager"))
// const Staffs = lazy(() => import("../modules/staffs/Staffs"))
// const Leads = lazy(() => import("../modules/leads/Leads"))
// const AdminActions = lazy(() => import("../modules/admin/AdminActions"))
// const StaffDashBoard = lazy(() => import("../modules/staffs/StaffDashBoard"))
// const ResetPassword = lazy(() => import("../modules/login/ResetPassword"))
const RoutesComponent = ({ history }) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="displayNone"></div>}>
                <Routes>
                    <Route path="/" element={<GuestDashboard history={history} />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default RoutesComponent;