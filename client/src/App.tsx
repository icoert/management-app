import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Button onClick={() => setCount(count + 1)}>
        Cick to count: {count}
      </Button>
    </div>
  );
}

export default App;
