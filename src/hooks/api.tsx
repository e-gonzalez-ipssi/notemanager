import React, { useState } from "react";

export default async function useApi(method = "GET", route: string, body = {}) {
    const [data, setData] = useState([] as any[])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    let response;
    try {
        if (method === "GET" || method === "HEAD") {
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

        const json = await response.json();
        setData(json)
        setLoading(false)
    } catch (error) {
        console.log(error)
        setError(true)
    }

    return {
        data: data,
        loading: loading,
        error: error
    }
}