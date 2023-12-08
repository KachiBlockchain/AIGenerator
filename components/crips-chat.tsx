" use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("b4da2e8e-688d-4c7f-ae4a-310777c73488")
    }, []);
    return null;
}