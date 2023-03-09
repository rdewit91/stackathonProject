import React, { useEffect } from 'react';
import { AllStudent, AllCampus, OneStudent, OneCampus, NavBar } from '../components/Index';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCampusessAsync } from '../reducers/AllCampusReduce';
import { fetchStudentsAsync } from '../reducers/AllStudentReduce';


const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampusessAsync());
        dispatch(fetchStudentsAsync());
    }, [dispatch]);


    return (
        <div id='main'>
           <div className="column container">
                <div id="header">
                    <h1 id='mainHead'>Robs JuniorPhase Final Project</h1>
                    <NavBar />
                </div>
            </div>
            <Routes>
                <Route path="/students" element={<AllStudent />} />
                <Route path="/campuses" element={<AllCampus />} />
                <Route path="/students/:studentId/*" element={<OneStudent />} />
                <Route path="/campuses/:campusId/*" element={<OneCampus />} />
            </Routes>
            </div>
    );
};

export default Main;