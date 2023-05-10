import axios from "axios";
import React, {useEffect, useState} from "react";

// require('dotenv').config();

const AxiosConfigured = () => {
	// Indicate to the API that all requests for this app are AJAX
	axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

	// Set the baseURL for all requests to the API domain instead of the current domain
	// axios.defaults.baseURL = `http://localhost:8443/api/v1`;
	//fixme::find out how to put ip address in .env

	// desktop
	axios.defaults.baseURL = `http://127.0.0.1:8080/api`;
	// phone
	//axios.defaults.baseURL = `http://192.168.1.137:8443/api/v1`;

	// Allow the browser to send cookies to the API domain (which include auth_token)
	axios.defaults.withCredentials = true;

	//    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;

	return axios;
};

const axiosAgent = AxiosConfigured();

export default class APIInterface {

	async allRings() {
		axiosAgent.get(`/rings`).then((response) => {
			console.log("response.data in APIInterface: " + JSON.stringify(response.data));
			return JSON.stringify(response.data);
		});
        //return allRings;
	}

}