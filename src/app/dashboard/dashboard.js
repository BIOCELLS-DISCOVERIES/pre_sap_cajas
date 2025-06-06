"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [usuario, setUsuario] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    if (!user) {
      router.push("/login"); // Si no hay usuario, redirigir al login
    } else {
      setUsuario(user);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link href="/transferStocks">Transferencia de Stock</Link>
          </li>
          <li>
            <Link href="/reportes">Reportes</Link>
          </li>
          <li>
            <Link href="/archivo">Subir Archivo</Link>
          </li>
          <li>
            <Link href="/solicitudes">Solicitud-Transferencia</Link>
          </li>
          <li>
            <Link href="/caja">Cajas</Link>
          </li>
        </ul>
        <div className={styles.userInfo}>
          <span>Bienvenido, {usuario}</span>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <div className={styles.content}>
        <h1>Bienvenido a SAP</h1>
        <p>Selecciona una opción del menú</p>
      </div>
    </div>
  );
}
