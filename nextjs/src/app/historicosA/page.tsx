'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

import { verificaTokenExpirado } from "../../services/token";

export default function HistoricosA () {
  const router = useRouter();
  useEffect(() => {
    let lsToken = localStorage.getItem('americanos.token');

    let token: IToken | null = null;

    if (typeof lsToken === 'string') {
        token = JSON.parse(lsToken);
    }

    if (!token || verificaTokenExpirado(token.accessToken)) {
      router.push("/login");
    }
}, [router]);

    return (
        <>

    
</>
);
}