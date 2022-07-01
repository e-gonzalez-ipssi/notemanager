import React from "react";

export default async function useApi(method = "GET", route: string, body = {}) {
    let response;
    try {
        if (method === "GET" || method === "HEAD" || method === "DELETE") {
            response = await fetch("https://m66nqp6pe8.eu-west-1.awsapprunner.com/" + route, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        } else {
            response = await fetch("https://m66nqp6pe8.eu-west-1.awsapprunner.com/" + route, {
                method: method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        }
        let json;
        try {
            json = await response.json();
        } catch (error) {
            json = { errorMessage: "No json result" }
        }

        return json;
    } catch (error) {
        return {
            errorMessage: error
        }
    }
}