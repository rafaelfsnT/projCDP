import { NavBar } from './components/NavBar';

export default function Home() {
  return (
    <>
     <NavBar />

      <div style={{
        paddingLeft: "6%",
        paddingRight: "6%",
      }}
      >
        <h2>Produtos em destaque</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: 'wrap'
          }}>
       
        </div>
      </div>
    </>
  );
}
