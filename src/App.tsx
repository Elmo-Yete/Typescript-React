import KoderCard from "./components/KoderCard";
import { Koders } from "./data/Koders";

function App() {
  return (
    <>
      <main>
        {Koders.map((koder, index) => {
          return (
            <KoderCard
              key={`Koder:${index}`}
              firstname={koder.firstname}
              lastname={koder.lastname}
              email={koder.email}
              isActive={koder.isActive}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
