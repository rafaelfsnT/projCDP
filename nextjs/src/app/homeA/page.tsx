"use client";
import { useEffect } from "react";
import { NavBarAdmin } from "../components/NavBarAdmin";
import { useRouter } from "next/navigation";
import { verificaTokenExpirado } from "../../services/token";
export default function HomeA() {
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
      <NavBarAdmin />
    </>
  );
}
