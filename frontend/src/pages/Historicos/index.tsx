import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from "../../components/NavBar";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";

export default function Historicos() {
   
   const navigate = useNavigate();
  useEffect(() => {
    let lsToken = localStorage.getItem("americanos.token");

    let token: IToken | null = null;

    if (typeof lsToken === "string") {
      token = JSON.parse(lsToken);
    }

    if (!token || verificaTokenExpirado(token.accessToken)) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <NavBar />
      <h1 className={styles.title}>
        Pessoas que fizeram parte da nossa história
      </h1>
      <div className="container-fluid">
        {/* Bio 1 */}
        <div className={`row ${styles.espacamento}`}>
          <div className={`col-md-4 ${styles.biografia}`}>
            <img src="../../public/perfil1.jpeg" alt="" />
          </div>
          <div className="col-md-8 text-center">
            <h2>Nome da Pessoa</h2>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        {/* Bio 2 */}
        <div className={`row ${styles.espacamento}`}>
          <div className={`col-md-8 text-center ${styles.text}`}>
            <h2>Nome da Pessoa</h2>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className={`col-md-4 ${styles.biografia1}`}>
            <img src="../../public/perfil1.jpeg" alt="" />
          </div>
        </div>

        <div className={`row ${styles.espacamento}`}>
          <div className={`col-md-4 ${styles.biografia}`}>
            <img src="../../public/perfil1.jpeg" alt="" />
          </div>
          <div className="col-md-8 text-center">
            <h2>Nome da Pessoa</h2>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

