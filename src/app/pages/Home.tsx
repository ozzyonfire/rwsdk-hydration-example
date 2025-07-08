import { RequestInfo } from "rwsdk/worker";
import { ClientComponent } from "./components/client-component";

export function Home({ ctx }: RequestInfo) {
  return (
    <div>
      <p>
        {ctx.user?.username
          ? `You are logged in as user ${ctx.user.username}`
          : "You are not logged in"}
      </p>
      <ClientComponent />
    </div>
  );
}
